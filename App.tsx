
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ArtifactCard from './components/ArtifactCard';
import Footer from './components/Footer';
import VaultDrawer from './components/VaultDrawer';
import ProductView from './components/ProductView';
import ShippingView from './components/ShippingView';
import ContactView from './components/ContactView';
import AboutView from './components/AboutView';
import WorldMap from './components/WorldMap';
import { Theme, AccessLevel, Artifact, CartItem, Language, Page } from './types';
import { ARTIFACTS, ACCENT_COLOR } from './constants';
import { UI_TRANSLATIONS } from './translations';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('EN');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const showNotification = (msg: string) => setNotification(msg);

  const addToCart = (artifact: Artifact, withLight: boolean = false) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.artifact.id === artifact.id && item.withLight === withLight);
      if (existing) {
        return prev.map(item =>
          item.artifact.id === artifact.id && item.withLight === withLight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { artifact, quantity: 1, withLight }];
    });
    showNotification(t.addedToVault);
  };

  const removeFromCart = (id: string, withLight: boolean) => {
    setCartItems(prev => prev.filter(item => !(item.artifact.id === id && item.withLight === withLight)));
  };

  const updateQuantity = (id: string, withLight: boolean, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.artifact.id === id && item.withLight === withLight) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-black';
  const dividerColor = isDark ? 'bg-white/10' : 'bg-black/10';

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const goHome = () => setCurrentPage('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'map':
        return <WorldMap theme={theme} language={language} onBack={goHome} />;
      case 'ship':
        return <ShippingView theme={theme} language={language} onBack={goHome} />;
      case 'contact':
        return <ContactView theme={theme} language={language} onBack={goHome} />;
      case 'about':
        return <AboutView theme={theme} language={language} onBack={goHome} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="max-w-screen-2xl mx-auto px-6 mb-32 text-center">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-[8.5rem] font-black tracking-tighter leading-none mb-4 whitespace-pre-line">
                  {t.heroTitle}
                </h2>
                <p className="text-[11px] md:text-[13px] tracking-[0.35em] font-light opacity-60">
                  {t.heroSub}
                </p>
              </div>
            </section>

            {/* Grid: Level 1 */}
            <section className="max-w-screen-2xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-mono tracking-[0.4em] opacity-50 whitespace-nowrap">{AccessLevel.CORE}</span>
                <div className={`h-px w-full ${dividerColor}`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {ARTIFACTS.filter(a => a.level === AccessLevel.CORE).map(artifact => (
                  <ArtifactCard 
                    key={artifact.id} 
                    artifact={artifact} 
                    theme={theme}
                    language={language}
                    onLockedClick={() => {}}
                    onAcquire={() => addToCart(artifact)}
                    onClick={() => setSelectedArtifact(artifact)}
                  />
                ))}
              </div>
            </section>

            {/* Grid: Level 2 */}
            <section className="max-w-screen-2xl mx-auto px-6 mt-1">
              <div className="flex items-center gap-4 mb-8 pt-12">
                <span className="text-[10px] font-mono tracking-[0.4em] opacity-50 whitespace-nowrap">{AccessLevel.LIMITED}</span>
                <div className={`h-px w-full ${dividerColor}`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {ARTIFACTS.filter(a => a.level === AccessLevel.LIMITED).map(artifact => (
                  <ArtifactCard
                    key={artifact.id}
                    artifact={artifact}
                    theme={theme}
                    language={language}
                    onLockedClick={() => showNotification(t.verificationRequired)}
                    onAcquire={() => addToCart(artifact)}
                    onClick={() => setSelectedArtifact(artifact)}
                  />
                ))}
              </div>
            </section>

            {/* Grid: Level 3 */}
            <section className="max-w-screen-2xl mx-auto px-6 mt-1">
              <div className="flex items-center gap-4 mb-8 pt-12">
                <span className="text-[10px] font-mono tracking-[0.4em] opacity-50 whitespace-nowrap">{AccessLevel.ARCHIVE}</span>
                <div className={`h-px w-full ${dividerColor}`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {ARTIFACTS.filter(a => a.level === AccessLevel.ARCHIVE).map(artifact => (
                  <ArtifactCard 
                    key={artifact.id} 
                    artifact={artifact} 
                    theme={theme}
                    language={language}
                    onLockedClick={() => showNotification(t.verificationRequired)}
                    onAcquire={() => {}}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500 overflow-x-hidden uppercase`} style={{ ['--selection-color' as any]: ACCENT_COLOR }}>
      {!selectedArtifact && (
        <div className="fixed inset-0 pointer-events-none noise-bg opacity-[0.03]"></div>
      )}
      <style>{`
        ::selection {
          background-color: ${ACCENT_COLOR};
        }
      `}</style>

      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        cartCount={totalCount} 
        onVaultClick={() => setIsVaultOpen(true)}
        language={language}
        setLanguage={setLanguage}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <VaultDrawer 
        isOpen={isVaultOpen} 
        onClose={() => setIsVaultOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        theme={theme}
        language={language}
      />

      {selectedArtifact && (
        <ProductView 
          artifact={selectedArtifact} 
          theme={theme} 
          language={language}
          onClose={() => setSelectedArtifact(null)}
          onAcquire={(withLight) => {
            addToCart(selectedArtifact, withLight);
          }}
        />
      )}

      <main className="pt-40">
        {/* NEW SYSTEM NOTIFICATION */}
        {notification && (
          <div className="fixed top-24 right-6 z-[300] pointer-events-none flex flex-col items-end">
            <div className="px-5 py-3 border backdrop-blur-3xl bg-black/90 shadow-[0_0_40px_rgba(0,191,255,0.3)] animate-in fade-in slide-in-from-right-8 duration-300 flex items-center gap-4" style={{ borderColor: ACCENT_COLOR }}>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-[11px] tracking-[0.4em] font-black text-white uppercase">{notification}</p>
              <div className="h-4 w-px bg-white/10 ml-2"></div>
              <p className="text-[8px] tracking-[0.2em] text-[#00BFFF] font-mono">STATUS: OK</p>
            </div>
            <div className="h-0.5 w-full origin-right animate-out slide-out-to-right-full duration-[2500ms] ease-linear" style={{ backgroundColor: ACCENT_COLOR }}></div>
          </div>
        )}

        {renderContent()}
      </main>

      {currentPage !== 'map' && <Footer theme={theme} language={language} />}
    </div>
  );
};

export default App;
