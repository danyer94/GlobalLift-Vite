import { useEffect, useState } from 'react';
import { CaseStudies } from './components/CaseStudies';
import { CompanyOverview } from './components/CompanyOverview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Network } from './components/Network';
import { Partners } from './components/Partners';
import { ProductGallery } from './components/ProductGallery';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
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
    <div id="top" className="bg-ink text-mist">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-ink focus:shadow-signal"
      >
        {content.copy.skipToContent}
      </a>
      <Navigation
        items={content.navItems}
        logoSrc={brandLogoSrc}
        copy={content.copy.navigation}
        languageToggleCopy={content.copy.languageToggle}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main id="main-content">
        <Hero highlights={content.highlights} copy={content.copy.hero} />
        <CompanyOverview profile={content.companyProfile} values={content.companyValues} copy={content.copy.companyOverview} />
        <Partners partners={content.partners} copy={content.copy.partners} />
        <Services services={content.services} differentiators={content.differentiators} copy={content.copy.services} />
        <ProductGallery items={content.productGallery} copy={content.copy.productGallery} />
        <Network locations={content.locations} copy={content.copy.network} />
        <CaseStudies caseStudies={content.caseStudies} copy={content.copy.caseStudies} />
        <Testimonials testimonials={content.testimonials} copy={content.copy.testimonials} />
        <Contact copy={content.copy.contact} />
      </main>

      <Footer logoSrc={brandLogoSrc} copy={content.copy.footer} />
    </div>
  );
}

export default App;
