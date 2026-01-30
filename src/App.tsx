import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Commitment } from './components/Commitment';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Process } from './components/Process';
import { Products } from './components/Products';
import { SEO } from './components/SEO';
import { Services } from './components/Services';
import { Values } from './components/Values';
import { Why } from './components/Why';
import { brandLogoSrc, siteContent, type Language } from './content/siteContent';

const STORAGE_KEY = 'globallift-language';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'es';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') {
    return stored;
  }

  const browserLang = window.navigator.language?.toLowerCase() ?? '';
  return browserLang.startsWith('es') ? 'es' : 'en';
};

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const content = siteContent[language];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  return (
    <div id="top" className="bg-ink text-mist antialiased">
      <SEO 
        language={language}
        title={content.seo.title}
        description={content.seo.description}
      />
      <Navigation items={content.navItems} logoSrc={brandLogoSrc} copy={content.navigation} language={language} onLanguageChange={setLanguage} />

      <main id="main-content">
        <Hero copy={content.hero} />
        <About copy={content.about} />
        <Services copy={content.services} />
        <Products copy={content.products} />
        <Process copy={content.process} />
        <Why copy={content.why} />
        <Values copy={content.values} />
        <Commitment copy={content.commitment} />
        <Faq copy={content.faq} />
        <Contact copy={content.contact} trustCues={content.hero.trustCues} />
      </main>
      <Footer items={content.navItems} logoSrc={brandLogoSrc} note={content.about.oneLine} />
    </div>
  );
}

export default App;
