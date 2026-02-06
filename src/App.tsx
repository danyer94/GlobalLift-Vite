import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Boat } from './components/Boat';
import { Commitment } from './components/Commitment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ImageRevealSection } from './components/ImageRevealSection';
import { Navigation } from './components/Navigation';
import { Process } from './components/Process';
import { Products } from './components/Products';
import { SEO } from './components/SEO';
import { Services } from './components/Services';
import { Values } from './components/Values';
import { Why } from './components/Why';
import { siteContent, type Language } from './content/siteContent';
import { ScrollProvider } from './utils/scroll';

const STORAGE_KEY = 'globallift-language';
const CINEMA_PRESET = 'immersive';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'es';
  }

  const params = new URLSearchParams(window.location.search);
  const paramLanguage = params.get('lang')?.toLowerCase();
  if (paramLanguage === 'es' || paramLanguage === 'en') {
    return paramLanguage;
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
      document.documentElement.setAttribute('data-cinema', CINEMA_PRESET);
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  return (
    <div id="top" className="bg-background text-foreground antialiased">
      <SEO
        language={language}
        title={content.seo.title}
        description={content.seo.description}
      />
      <Navigation
        items={content.navItems}
        copy={content.navigation}
        language={language}
        onLanguageChange={setLanguage}
      />

      <ScrollProvider>
        <Boat />
        <main id="main-content">
          <Hero copy={content.hero} />
          <About copy={content.about} />
          <ImageRevealSection
            image1={`${import.meta.env.BASE_URL}images/generated/reveal-export-orchard.png`}
            title1={content.revealSection.title1}
            subtitle1={content.revealSection.subtitle1}
            image2={`${import.meta.env.BASE_URL}images/generated/reveal-air-cargo.png`}
            title2={content.revealSection.title2}
            subtitle2={content.revealSection.subtitle2}
          />
          <Services copy={content.services} />
          <Products copy={content.products} />
          <Process copy={content.process} />
          <Why copy={content.why} />
          <Values copy={content.values} />
          <Commitment copy={content.commitment} />
          <Contact copy={content.contact} trustCues={content.hero.trustCues} />
        </main>
      </ScrollProvider>
      <Footer items={content.navItems} note={content.about.oneLine} />
    </div>
  );
}

export default App;
