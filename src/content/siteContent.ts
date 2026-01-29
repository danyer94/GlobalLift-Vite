import { Plane, Ship, TrendingUp, type LucideIcon } from 'lucide-react';
import { compactFormatter, numberFormatter, percentFormatter } from '../utils/formatters';

export type Language = 'es' | 'en';

export type NavItem = {
  label: string;
  href: string;
};

export const brandLogoSrc = `${import.meta.env.BASE_URL}logo/Global-Lift.png`;

export const otifDisplay = percentFormatter.format(0.984);

export type Stat = {
  value: number;
  label: string;
  format: 'number' | 'compact' | 'percent';
  prefix?: string;
  suffix?: string;
};

export const formatStatValue = (stat: Stat) => {
  const prefix = stat.prefix ?? '';
  const suffix = stat.suffix ?? '';

  if (stat.format === 'compact') {
    return `${prefix}${compactFormatter.format(stat.value)}${suffix}`;
  }

  if (stat.format === 'percent') {
    return `${prefix}${percentFormatter.format(stat.value)}${suffix}`;
  }

  return `${prefix}${numberFormatter.format(stat.value)}${suffix}`;
};

export type CompanyProfile = {
  name: string;
  about: string;
  vision: string;
  mission: string;
  commitment: string;
};

export type CompanyValue = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductGalleryItem = {
  src: string;
  alt: string;
  label: string;
  category: string;
};

export type Lane = {
  route: string;
  etaDays: number;
  status: string;
};

export type Location = {
  city: string;
  detail: string;
};

export type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export type NavigationCopy = {
  ariaLabel: string;
  cta: string;
};

export type LanguageToggleCopy = {
  label: string;
  english: string;
  spanish: string;
};

export type HeroCopy = {
  badge: string;
  titleLead: string;
  titleAccent: string;
  titleTail: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type CompanyOverviewCopy = {
  badge: string;
  visionLabel: string;
  missionLabel: string;
  commitmentLabel: string;
  valuesLabel: string;
};

export type PartnersCopy = {
  label: string;
};

export type ServicesCopy = {
  badge: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
};

export type ProductGalleryCopy = {
  badge: string;
  heading: string;
  subheading: string;
  viewFullLabel: string;
  prevLabel: string;
  nextLabel: string;
  zoomLabel: string;
  focusLabel: string;
  autoRotateLabel: string;
  detailItems: string[];
  highlightItems: string[];
  closeViewLabel: string;
  closeButtonLabel: string;
};

export type NetworkCopy = {
  badge: string;
  heading: string;
  description: string;
  mapAlt: string;
};

export type CaseStudiesCopy = {
  badge: string;
  heading: string;
  subheading: string;
};

export type TestimonialsCopy = {
  badge: string;
  heading: string;
  subheading: string;
};

export type ContactCopy = {
  badge: string;
  heading: string;
  description: string;
  responseTimeHours: number;
  addressTitle: string;
  addressDetail: string;
  emailTitle: string;
  emailDetail: string;
  phoneTitle: string;
  phoneDetail: string;
  formTitle: string;
  formDescription: string;
  submitLabel: string;
  successMessage: string;
  messageMinChars: number;
  fields: {
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
  };
  errors: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
};

export type FooterCopy = {
  description: string;
  servicesTitle: string;
  servicesItems: string[];
  companyTitle: string;
  companyItems: string[];
  rights: string;
};

export type SiteCopy = {
  skipToContent: string;
  navigation: NavigationCopy;
  languageToggle: LanguageToggleCopy;
  hero: HeroCopy;
  companyOverview: CompanyOverviewCopy;
  partners: PartnersCopy;
  services: ServicesCopy;
  productGallery: ProductGalleryCopy;
  network: NetworkCopy;
  caseStudies: CaseStudiesCopy;
  testimonials: TestimonialsCopy;
  contact: ContactCopy;
  footer: FooterCopy;
};

export type SiteContent = {
  navItems: NavItem[];
  highlights: string[];
  companyProfile: CompanyProfile;
  companyValues: CompanyValue[];
  services: Service[];
  differentiators: string[];
  productGallery: ProductGalleryItem[];
  locations: Location[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  partners: string[];
  stats: Stat[];
  lanes: Lane[];
  copy: SiteCopy;
};
const productImageBase = `${import.meta.env.BASE_URL}images/`;

const partners = ['TechCorp', 'Luxe', 'GlobalInd', 'PrimeShip', 'Nextra'];

const statsEs: Stat[] = [
  { value: 25, label: 'Años en Comercio Exterior', format: 'number', suffix: '+' },
  { value: 120, label: 'Países con Cobertura', format: 'number', suffix: '+' },
  {
    value: 2_800_000_000,
    label: 'Volumen Anual Gestionado',
    format: 'compact',
    prefix: '$',
  },
  { value: 0.98, label: 'Retención de Clientes', format: 'percent' },
];

const statsEn: Stat[] = [
  { value: 25, label: 'Years in Global Trade', format: 'number', suffix: '+' },
  { value: 120, label: 'Countries Covered', format: 'number', suffix: '+' },
  {
    value: 2_800_000_000,
    label: 'Annual Volume Managed',
    format: 'compact',
    prefix: '$',
  },
  { value: 0.98, label: 'Client Retention', format: 'percent' },
];

const companyValuesEs: CompanyValue[] = [
  {
    title: 'Integridad',
    description: 'Actuamos con transparencia, ética y respeto a las leyes.',
  },
  {
    title: 'Compromiso',
    description: 'Cumplimos con responsabilidad cada acuerdo asumido.',
  },
  {
    title: 'Excelencia Operativa',
    description: 'Buscamos eficiencia, calidad y mejora continua.',
  },
  {
    title: 'Confianza',
    description: 'Construimos relaciones sólidas y duraderas.',
  },
  {
    title: 'Adaptabilidad',
    description: 'Respondemos de forma ágil a las dinámicas del mercado.',
  },
  {
    title: 'Enfoque Multisectorial',
    description: 'Generamos oportunidades comerciales estratégicas.',
  },
  {
    title: 'Crecimiento Responsable',
    description: 'Impulsamos el desarrollo sostenible.',
  },
];

const companyValuesEn: CompanyValue[] = [
  {
    title: 'Integrity',
    description: 'We act with transparency, ethics, and respect for the law.',
  },
  {
    title: 'Commitment',
    description: 'We honor every agreement with responsibility.',
  },
  {
    title: 'Operational Excellence',
    description: 'We pursue efficiency, quality, and continuous improvement.',
  },
  {
    title: 'Trust',
    description: 'We build strong, lasting relationships.',
  },
  {
    title: 'Adaptability',
    description: 'We respond quickly to market dynamics.',
  },
  {
    title: 'Multisector Focus',
    description: 'We create strategic commercial opportunities.',
  },
  {
    title: 'Responsible Growth',
    description: 'We drive sustainable development.',
  },
];
const servicesEs: Service[] = [
  {
    title: 'Logística Marítima Premium',
    description:
      'Rutas optimizadas, consolidación inteligente y visibilidad de cada contenedor con reportes proactivos.',
    icon: Ship,
  },
  {
    title: 'Carga Aérea Prioritaria',
    description:
      'Capacidad garantizada en aerolíneas clave y despacho exprés para cargas sensibles al tiempo.',
    icon: Plane,
  },
  {
    title: 'Consultoría de Comercio Exterior',
    description:
      'Estrategia arancelaria, compliance y planes de expansión internacional basados en datos.',
    icon: TrendingUp,
  },
];

const servicesEn: Service[] = [
  {
    title: 'Premium Ocean Logistics',
    description:
      'Optimized routes, smart consolidation, and visibility for every container with proactive reporting.',
    icon: Ship,
  },
  {
    title: 'Priority Air Freight',
    description:
      'Guaranteed capacity with key airlines and express clearance for time-sensitive cargo.',
    icon: Plane,
  },
  {
    title: 'Global Trade Advisory',
    description:
      'Tariff strategy, compliance, and data-driven international expansion plans.',
    icon: TrendingUp,
  },
];

const differentiatorsEs = [
  'Equipos dedicados por industria y tipo de carga.',
  'Monitoreo proactivo con alertas y playbooks operativos.',
  'Optimización de costos con análisis de rutas y consolidación.',
];

const differentiatorsEn = [
  'Dedicated teams by industry and cargo type.',
  'Proactive monitoring with alerts and operational playbooks.',
  'Cost optimization through route analysis and consolidation.',
];
const productGalleryEs: ProductGalleryItem[] = [
  {
    src: `${productImageBase}aguacate.jpeg`,
    alt: 'Aguacate Hass listo para exportación.',
    label: 'Aguacate Hass',
    category: 'Producto',
  },
  {
    src: `${productImageBase}aguacates.jpeg`,
    alt: 'Selección de aguacates para exportación.',
    label: 'Selección de aguacates',
    category: 'Producto',
  },
  {
    src: `${productImageBase}aguacate_2.jpeg`,
    alt: 'Aguacate premium empacado para exportación.',
    label: 'Aguacate premium',
    category: 'Producto',
  },
  {
    src: `${productImageBase}mangos_1.jpeg`,
    alt: 'Mangos frescos listos para empaque.',
    label: 'Mangos frescos',
    category: 'Producto',
  },
  {
    src: `${productImageBase}mangos_2.jpeg`,
    alt: 'Mangos seleccionados para exportación.',
    label: 'Mangos seleccionados',
    category: 'Producto',
  },
  {
    src: `${productImageBase}mangos_3.jpeg`,
    alt: 'Mango dorado con control de calidad.',
    label: 'Mango dorado',
    category: 'Producto',
  },
  {
    src: `${productImageBase}mangos_4.jpeg`,
    alt: 'Mangos en proceso de selección.',
    label: 'Selección de mangos',
    category: 'Producto',
  },
  {
    src: `${productImageBase}mangos_5.jpeg`,
    alt: 'Mangos premium para exportación.',
    label: 'Mangos premium',
    category: 'Producto',
  },
  {
    src: `${productImageBase}mangos_6.jpeg`,
    alt: 'Mangos listos para despacho internacional.',
    label: 'Mangos listos',
    category: 'Producto',
  },
  {
    src: `${productImageBase}pirmiento.jpeg`,
    alt: 'Pimientos listos para exportación.',
    label: 'Pimientos',
    category: 'Producto',
  },
  {
    src: `${productImageBase}tomates.jpeg`,
    alt: 'Tomates empacados para exportación.',
    label: 'Tomates',
    category: 'Producto',
  },
  {
    src: `${productImageBase}verdura.jpeg`,
    alt: 'Verduras mixtas listas para exportación.',
    label: 'Verduras mixtas',
    category: 'Producto',
  },
  {
    src: `${productImageBase}cajas.jpeg`,
    alt: 'Cajas de exportación certificadas.',
    label: 'Empaque certificado',
    category: 'Empaque',
  },
  {
    src: `${productImageBase}cajas_2.jpeg`,
    alt: 'Cajas paletizadas para exportación.',
    label: 'Paletizado seguro',
    category: 'Empaque',
  },
  {
    src: `${productImageBase}cajas_3.jpeg`,
    alt: 'Empaque reforzado para transporte internacional.',
    label: 'Empaque reforzado',
    category: 'Empaque',
  },
];
const productGalleryEn: ProductGalleryItem[] = [
  {
    src: `${productImageBase}aguacate.jpeg`,
    alt: 'Hass avocados ready for export.',
    label: 'Hass Avocado',
    category: 'Product',
  },
  {
    src: `${productImageBase}aguacates.jpeg`,
    alt: 'Selected avocados for export.',
    label: 'Avocado Selection',
    category: 'Product',
  },
  {
    src: `${productImageBase}aguacate_2.jpeg`,
    alt: 'Premium avocado packed for export.',
    label: 'Premium Avocado',
    category: 'Product',
  },
  {
    src: `${productImageBase}mangos_1.jpeg`,
    alt: 'Fresh mangoes ready for packing.',
    label: 'Fresh Mangoes',
    category: 'Product',
  },
  {
    src: `${productImageBase}mangos_2.jpeg`,
    alt: 'Selected mangoes for export.',
    label: 'Selected Mangoes',
    category: 'Product',
  },
  {
    src: `${productImageBase}mangos_3.jpeg`,
    alt: 'Golden mango under quality control.',
    label: 'Golden Mango',
    category: 'Product',
  },
  {
    src: `${productImageBase}mangos_4.jpeg`,
    alt: 'Mangoes in selection process.',
    label: 'Mango Selection',
    category: 'Product',
  },
  {
    src: `${productImageBase}mangos_5.jpeg`,
    alt: 'Premium mangoes for export.',
    label: 'Premium Mangoes',
    category: 'Product',
  },
  {
    src: `${productImageBase}mangos_6.jpeg`,
    alt: 'Mangoes ready for international dispatch.',
    label: 'Ready-to-Ship Mangoes',
    category: 'Product',
  },
  {
    src: `${productImageBase}pirmiento.jpeg`,
    alt: 'Peppers ready for export.',
    label: 'Peppers',
    category: 'Product',
  },
  {
    src: `${productImageBase}tomates.jpeg`,
    alt: 'Tomatoes packed for export.',
    label: 'Tomatoes',
    category: 'Product',
  },
  {
    src: `${productImageBase}verdura.jpeg`,
    alt: 'Mixed vegetables ready for export.',
    label: 'Mixed Vegetables',
    category: 'Product',
  },
  {
    src: `${productImageBase}cajas.jpeg`,
    alt: 'Certified export boxes.',
    label: 'Certified Packaging',
    category: 'Packaging',
  },
  {
    src: `${productImageBase}cajas_2.jpeg`,
    alt: 'Palletized export boxes.',
    label: 'Secure Palletization',
    category: 'Packaging',
  },
  {
    src: `${productImageBase}cajas_3.jpeg`,
    alt: 'Reinforced packaging for international transport.',
    label: 'Reinforced Packaging',
    category: 'Packaging',
  },
];
const locationsEs: Location[] = [
  {
    city: 'New York',
    detail: `HQ Américas · Control ${numberFormatter.format(24)}/${numberFormatter.format(7)}`,
  },
  { city: 'London', detail: 'Operaciones Europa · Aduanas' },
  { city: 'Dubai', detail: 'Gateway MEA · Carga Especial' },
  { city: 'Singapore', detail: 'Hub Asia · Multimodal' },
  { city: 'Sydney', detail: 'Oceania · Distribución Regional' },
];

const locationsEn: Location[] = [
  {
    city: 'New York',
    detail: `Americas HQ · ${numberFormatter.format(24)}/${numberFormatter.format(7)} Control`,
  },
  { city: 'London', detail: 'Europe Operations · Customs' },
  { city: 'Dubai', detail: 'MEA Gateway · Special Cargo' },
  { city: 'Singapore', detail: 'Asia Hub · Multimodal' },
  { city: 'Sydney', detail: 'Oceania · Regional Distribution' },
];

const caseStudiesEs: CaseStudy[] = [
  {
    title: 'Optimización de Supply Chain para Tecnología Médica',
    category: 'Marítimo + Aéreo',
    summary:
      `Reducimos tiempos de tránsito en ${percentFormatter.format(
        0.22
      )} con un modelo híbrido de puertos alternos y carga aérea de respaldo.`,
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Expansión LATAM para Marca de Lujo',
    category: 'Compliance + Aduanas',
    summary:
      `Implementamos un plan de cumplimiento regional que aceleró aperturas en ${numberFormatter.format(
        6
      )} mercados clave.`,
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
];

const caseStudiesEn: CaseStudy[] = [
  {
    title: 'Supply Chain Optimization for Medical Technology',
    category: 'Ocean + Air',
    summary:
      `Reduced transit times by ${percentFormatter.format(
        0.22
      )} with a hybrid model of alternate ports and backup air freight.`,
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'LATAM Expansion for a Luxury Brand',
    category: 'Compliance + Customs',
    summary:
      `Implemented a regional compliance plan that accelerated launches in ${numberFormatter.format(
        6
      )} key markets.`,
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
];
const testimonialsEs: Testimonial[] = [
  {
    quote:
      '"GlobalLift nos dio visibilidad total de la operación y un equipo que entiende los riesgos reales del comercio internacional."',
    name: 'Carolina Méndez',
    role: 'Directora de Operaciones, MedTech Global',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      '"La consistencia en tiempos y reportes nos permitió crecer sin aumentar la carga interna de nuestro equipo."',
    name: 'Luis Navarro',
    role: 'VP Supply Chain, Luxe Brands',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
];

const testimonialsEn: Testimonial[] = [
  {
    quote:
      '"GlobalLift gave us end-to-end visibility of the operation and a team that understands real international trade risk."',
    name: 'Carolina Méndez',
    role: 'Director of Operations, MedTech Global',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      '"Consistency in timelines and reporting let us grow without adding internal load to our team."',
    name: 'Luis Navarro',
    role: 'VP Supply Chain, Luxe Brands',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
];

const lanesEs: Lane[] = [
  { route: 'Shenzhen → Manzanillo', etaDays: 18, status: 'En Tránsito' },
  { route: 'Hamburgo → Veracruz', etaDays: 12, status: 'Despacho' },
  { route: 'São Paulo → Houston', etaDays: 4, status: 'Listo para Embarque' },
];

const lanesEn: Lane[] = [
  { route: 'Shenzhen → Manzanillo', etaDays: 18, status: 'In Transit' },
  { route: 'Hamburg → Veracruz', etaDays: 12, status: 'Customs Clearance' },
  { route: 'São Paulo → Houston', etaDays: 4, status: 'Ready to Ship' },
];

export const formatEta = (days: number, language: Language) =>
  language === 'es'
    ? `${numberFormatter.format(days)} días`
    : `${numberFormatter.format(days)} days`;
export const siteContent: Record<Language, SiteContent> = {
  es: {
    navItems: [
      { label: 'Quiénes Somos', href: '#about' },
      { label: 'Servicios', href: '#services' },
      { label: 'Productos', href: '#products' },
      { label: 'Red Global', href: '#network' },
      { label: 'Casos', href: '#cases' },
      { label: 'Testimonios', href: '#testimonials' },
      { label: 'Contacto', href: '#contact' },
    ],
    highlights: [
      `Cumplimiento Aduanero ${numberFormatter.format(360)}°`,
      'Visibilidad en Tiempo Real',
      'Seguro Multimodal Integrado',
    ],
    companyProfile: {
      name: 'Global Lift SRL',
      about:
        'Global Lift SRL es una empresa dominicana dedicada a la importación, exportación, logística y comercialización de bienes y servicios, con un enfoque multisectorial y una visión estratégica orientada al comercio nacional e internacional. Operamos bajo los más altos estándares de cumplimiento legal, eficiencia operativa y transparencia, facilitando conexiones comerciales entre mercados, proveedores y clientes.',
      vision:
        'Ser una empresa líder en comercio internacional y soluciones logísticas en el Caribe y mercados globales, reconocida por su confiabilidad, diversificación, cumplimiento y capacidad de generar valor sostenible.',
      mission:
        'Brindar soluciones integrales de importación, exportación, logística y servicios comerciales, facilitando el flujo eficiente de bienes y servicios en múltiples industrias mediante procesos estructurados, ética empresarial y una gestión orientada al crecimiento sostenible.',
      commitment:
        'En Global Lift SRL trabajamos para ser un aliado estratégico confiable, conectando mercados, optimizando operaciones y creando oportunidades comerciales con visión global y ejecución local.',
    },
    companyValues: companyValuesEs,
    services: servicesEs,
    differentiators: differentiatorsEs,
    productGallery: productGalleryEs,
    locations: locationsEs,
    caseStudies: caseStudiesEs,
    testimonials: testimonialsEs,
    partners,
    stats: statsEs,
    lanes: lanesEs,
    copy: {
      skipToContent: 'Saltar al Contenido Principal',
      navigation: {
        ariaLabel: 'Navegación principal',
        cta: 'Agendar Llamada',
      },
      languageToggle: {
        label: 'Seleccionar idioma',
        english: 'Inglés',
        spanish: 'Español',
      },
      hero: {
        badge: 'Inteligencia de Exportación',
        titleLead: 'Exportaciones',
        titleAccent: 'Sin Fricción',
        titleTail: 'y con Trazabilidad Total.',
        description:
          'GlobalLift coordina logística marítima y aérea, compliance aduanero y consultoría estratégica para que tu carga llegue a tiempo y con un solo punto de control.',
        primaryCta: 'Solicitar Consultoría',
        secondaryCta: 'Ver Servicios',
      },
      companyOverview: {
        badge: 'Quiénes Somos',
        visionLabel: 'Nuestra Visión',
        missionLabel: 'Nuestra Misión',
        commitmentLabel: 'Nuestro Compromiso',
        valuesLabel: 'Nuestros Valores',
      },
      partners: {
        label: 'Confianza Global',
      },
      services: {
        badge: 'Servicios',
        heading: 'Operación diseñada para exportadores que exigen precisión.',
        subheading:
          'Recibes logística, compliance y análisis operativo para reducir tiempos, riesgos y costos ocultos en la cadena de exportación.',
        ctaLabel: 'Explorar Servicio',
      },
      productGallery: {
        badge: 'Productos',
        heading: 'Catálogo exportable con empaque certificado y control de calidad.',
        subheading:
          'Fotografías reales de productos, selección y empaquetado listos para despacho internacional. Cada lote se valida con estándares de inocuidad y trazabilidad.',
        viewFullLabel: 'Ver imagen completa',
        prevLabel: 'Imagen anterior',
        nextLabel: 'Imagen siguiente',
        zoomLabel: 'Click para ampliar',
        focusLabel: 'Producto en foco',
        autoRotateLabel: 'Rotación automática cada 3s',
        detailItems: [
          'Empaque certificado y trazabilidad por lote.',
          'Control de temperatura y humedad en tránsito.',
          'Etiquetado multilingüe y documentación lista.',
        ],
        highlightItems: [
          'Control de temperatura y humedad en cada etapa de empaque.',
          'Etiquetado multilingüe con trazabilidad por lote y destino.',
          'Protección de impacto para mantener frescura y presentación.',
        ],
        closeViewLabel: 'Cerrar vista completa',
        closeButtonLabel: 'Cerrar',
      },
      network: {
        badge: 'Red Global',
        heading: 'Presencia estratégica para operar en cada huso horario.',
        description:
          'Ubicaciones clave en puertos, aeropuertos y zonas francas para asegurar cumplimiento local y visibilidad regional.',
        mapAlt: 'Mapa global con rutas de exportación',
      },
      caseStudies: {
        badge: 'Casos',
        heading: 'Resultados medibles para operaciones globales.',
        subheading: 'Soluciones a medida con KPIs claros y reportes ejecutivos para equipos de dirección.',
      },
      testimonials: {
        badge: 'Testimonios',
        heading: 'Equipos que escalan sin fricciones operativas.',
        subheading: 'Un equipo dedicado opera como extensión directa del tuyo: mismo ritmo, mismos indicadores.',
      },
      contact: {
        badge: 'Contacto',
        heading: 'Estrategia de exportación con control total.',
        description:
          'Recibirás respuesta en menos de {{hours}} horas con un diagnóstico inicial y un plan de acción.',
        responseTimeHours: 24,
        addressTitle: '1 World Trade Center, New York',
        addressDetail: 'Centro global de operaciones',
        emailTitle: 'contacto@globallift.com',
        emailDetail: 'Respuesta en menos de {{hours}} horas',
        phoneTitle: '+1 (212) 555-7890',
        phoneDetail: 'Línea internacional directa',
        formTitle: 'Solicitar Consultoría',
        formDescription:
          'Completa el formulario y recibe una propuesta inicial con tiempos y costos estimados.',
        submitLabel: 'Enviar Solicitud',
        successMessage: 'Gracias. Te contactaremos en menos de {{hours}} horas.',
        messageMinChars: 10,
        fields: {
          nameLabel: 'Nombre completo',
          emailLabel: 'Correo corporativo',
          companyLabel: 'Empresa',
          messageLabel: 'Necesidad principal',
          namePlaceholder: 'Ej. Ana Pérez',
          emailPlaceholder: 'Ej. nombre@empresa.com',
          companyPlaceholder: 'Ej. GlobalLift Logistics',
          messagePlaceholder: `Ej. Exportamos ${numberFormatter.format(12)} contenedores/mes a Europa.`,
        },
        errors: {
          name: 'Ingresa tu nombre.',
          email: 'Ingresa un correo válido.',
          company: 'Ingresa el nombre de tu empresa.',
          message: 'Describe tu operación en al menos {{min}} caracteres.',
        },
      },
      footer: {
        description:
          'Soluciones premium de exportación para empresas que necesitan control, velocidad y precisión global.',
        servicesTitle: 'Servicios',
        servicesItems: ['Logística marítima', 'Carga aérea', 'Consultoría', 'Compliance aduanero'],
        companyTitle: 'Compañía',
        companyItems: ['Nosotros', 'Liderazgo', 'Seguridad', 'Sostenibilidad'],
        rights: '© {{year}} GlobalLift. Todos los derechos reservados.',
      },
    },
  },
  en: {
    navItems: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#products' },
      { label: 'Global Network', href: '#network' },
      { label: 'Case Studies', href: '#cases' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    highlights: ['Customs Compliance 360°', 'Real-Time Visibility', 'Integrated Multimodal Insurance'],
    companyProfile: {
      name: 'Global Lift SRL',
      about:
        'Global Lift SRL is a Dominican company dedicated to import, export, logistics, and commercialization of goods and services, with a multisector focus and a strategic vision geared toward national and international trade. We operate under the highest standards of legal compliance, operational efficiency, and transparency, enabling commercial connections between markets, suppliers, and customers.',
      vision:
        'To be a leading company in international trade and logistics solutions in the Caribbean and global markets, recognized for reliability, diversification, compliance, and the ability to generate sustainable value.',
      mission:
        'To provide comprehensive import, export, logistics, and commercial services, enabling the efficient flow of goods and services across multiple industries through structured processes, business ethics, and growth-oriented management.',
      commitment:
        'At Global Lift SRL we work to be a trusted strategic partner, connecting markets, optimizing operations, and creating commercial opportunities with global vision and local execution.',
    },
    companyValues: companyValuesEn,
    services: servicesEn,
    differentiators: differentiatorsEn,
    productGallery: productGalleryEn,
    locations: locationsEn,
    caseStudies: caseStudiesEn,
    testimonials: testimonialsEn,
    partners,
    stats: statsEn,
    lanes: lanesEn,
    copy: {
      skipToContent: 'Skip to main content',
      navigation: {
        ariaLabel: 'Primary navigation',
        cta: 'Schedule a Call',
      },
      languageToggle: {
        label: 'Language',
        english: 'English',
        spanish: 'Spanish',
      },
      hero: {
        badge: 'Export Intelligence',
        titleLead: 'Frictionless',
        titleAccent: 'Exports',
        titleTail: 'with Full Traceability.',
        description:
          'GlobalLift coordinates ocean and air logistics, customs compliance, and strategic advisory so your cargo arrives on time with a single point of control.',
        primaryCta: 'Request Advisory',
        secondaryCta: 'View Services',
      },
      companyOverview: {
        badge: 'Who We Are',
        visionLabel: 'Our Vision',
        missionLabel: 'Our Mission',
        commitmentLabel: 'Our Commitment',
        valuesLabel: 'Our Values',
      },
      partners: {
        label: 'Trusted Globally',
      },
      services: {
        badge: 'Services',
        heading: 'Operations designed for exporters who demand precision.',
        subheading:
          'You get logistics, compliance, and operational analytics to reduce time, risk, and hidden costs across the export chain.',
        ctaLabel: 'Explore Service',
      },
      productGallery: {
        badge: 'Products',
        heading: 'Export-ready catalog with certified packaging and quality control.',
        subheading:
          'Real product photos, selection, and packing ready for international dispatch. Every lot is validated with safety and traceability standards.',
        viewFullLabel: 'View full image',
        prevLabel: 'Previous image',
        nextLabel: 'Next image',
        zoomLabel: 'Click to zoom',
        focusLabel: 'Featured product',
        autoRotateLabel: 'Auto-rotates every 3s',
        detailItems: [
          'Certified packaging and lot-level traceability.',
          'Temperature and humidity control in transit.',
          'Multilingual labeling and documentation ready.',
        ],
        highlightItems: [
          'Temperature and humidity control at every packing stage.',
          'Multilingual labeling with lot and destination traceability.',
          'Impact protection to preserve freshness and presentation.',
        ],
        closeViewLabel: 'Close full view',
        closeButtonLabel: 'Close',
      },
      network: {
        badge: 'Global Network',
        heading: 'Strategic presence to operate across every time zone.',
        description:
          'Key locations in ports, airports, and free zones to ensure local compliance and regional visibility.',
        mapAlt: 'Global map with export routes',
      },
      caseStudies: {
        badge: 'Case Studies',
        heading: 'Measurable results for global operations.',
        subheading: 'Tailored solutions with clear KPIs and executive reporting for leadership teams.',
      },
      testimonials: {
        badge: 'Testimonials',
        heading: 'Teams that scale without operational friction.',
        subheading: 'A dedicated team runs as a direct extension of yours: same pace, same KPIs.',
      },
      contact: {
        badge: 'Contact',
        heading: 'Export strategy with total control.',
        description: 'You will receive a response in under {{hours}} hours with an initial assessment and action plan.',
        responseTimeHours: 24,
        addressTitle: '1 World Trade Center, New York',
        addressDetail: 'Global operations center',
        emailTitle: 'contact@globallift.com',
        emailDetail: 'Reply in under {{hours}} hours',
        phoneTitle: '+1 (212) 555-7890',
        phoneDetail: 'Direct international line',
        formTitle: 'Request Advisory',
        formDescription: 'Complete the form and receive an initial proposal with estimated timelines and costs.',
        submitLabel: 'Submit Request',
        successMessage: 'Thank you. We will contact you in under {{hours}} hours.',
        messageMinChars: 10,
        fields: {
          nameLabel: 'Full name',
          emailLabel: 'Work email',
          companyLabel: 'Company',
          messageLabel: 'Primary need',
          namePlaceholder: 'e.g. Ana Perez',
          emailPlaceholder: 'e.g. name@company.com',
          companyPlaceholder: 'e.g. GlobalLift Logistics',
          messagePlaceholder: `e.g. We export ${numberFormatter.format(12)} containers/month to Europe.`,
        },
        errors: {
          name: 'Please enter your name.',
          email: 'Enter a valid email.',
          company: 'Enter your company name.',
          message: 'Describe your operation in at least {{min}} characters.',
        },
      },
      footer: {
        description: 'Premium export solutions for companies that need control, speed, and global precision.',
        servicesTitle: 'Services',
        servicesItems: ['Ocean logistics', 'Air freight', 'Advisory', 'Customs compliance'],
        companyTitle: 'Company',
        companyItems: ['About', 'Leadership', 'Security', 'Sustainability'],
        rights: '© {{year}} GlobalLift. All rights reserved.',
      },
    },
  },
};
