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
import {
  brandLogoSrc,
  caseStudies,
  companyProfile,
  companyValues,
  differentiators,
  formatEta,
  formatStatValue,
  highlights,
  lanes,
  locations,
  navItems,
  otifDisplay,
  partners,
  productGallery,
  services,
  stats,
  testimonials,
} from './content/siteContent';

function App() {
  return (
    <div id="top" className="bg-ink text-mist">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-ink focus:shadow-signal"
      >
        Saltar al Contenido Principal
      </a>
      <Navigation items={navItems} logoSrc={brandLogoSrc} />

      <main id="main-content">
        <Hero
          highlights={highlights}
          lanes={lanes}
          stats={stats}
          otifDisplay={otifDisplay}
          formatEta={formatEta}
          formatStatValue={formatStatValue}
        />
        <CompanyOverview profile={companyProfile} values={companyValues} />
        <Partners partners={partners} />
        <Services services={services} differentiators={differentiators} />
        <ProductGallery items={productGallery} />
        <Network locations={locations} />
        <CaseStudies caseStudies={caseStudies} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>

      <Footer logoSrc={brandLogoSrc} />
    </div>
  );
}

export default App;
