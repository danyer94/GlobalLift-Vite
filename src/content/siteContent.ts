import { Plane, Ship, TrendingUp, type LucideIcon } from 'lucide-react';
import { compactFormatter, numberFormatter, percentFormatter } from '../utils/formatters';

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Quiénes Somos', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Productos', href: '#products' },
  { label: 'Red Global', href: '#network' },
  { label: 'Casos', href: '#cases' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

export const brandLogoSrc = `${import.meta.env.BASE_URL}logo/Global-Lift.png`;

export const otifDisplay = percentFormatter.format(0.984);

export const highlights = [
  `Cumplimiento Aduanero ${numberFormatter.format(360)}°`,
  'Visibilidad en Tiempo Real',
  'Seguro Multimodal Integrado',
];

export type Stat = {
  value: number;
  label: string;
  format: 'number' | 'compact' | 'percent';
  prefix?: string;
  suffix?: string;
};

export const stats: Stat[] = [
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

export const companyProfile: CompanyProfile = {
  name: 'Global Lift SRL',
  about:
    'Global Lift SRL es una empresa dominicana dedicada a la importación, exportación, logística y comercialización de bienes y servicios, con un enfoque multisectorial y una visión estratégica orientada al comercio nacional e internacional. Operamos bajo los más altos estándares de cumplimiento legal, eficiencia operativa y transparencia, facilitando conexiones comerciales entre mercados, proveedores y clientes.',
  vision:
    'Ser una empresa líder en comercio internacional y soluciones logísticas en el Caribe y mercados globales, reconocida por su confiabilidad, diversificación, cumplimiento y capacidad de generar valor sostenible.',
  mission:
    'Brindar soluciones integrales de importación, exportación, logística y servicios comerciales, facilitando el flujo eficiente de bienes y servicios en múltiples industrias mediante procesos estructurados, ética empresarial y una gestión orientada al crecimiento sostenible.',
  commitment:
    'En Global Lift SRL trabajamos para ser un aliado estratégico confiable, conectando mercados, optimizando operaciones y creando oportunidades comerciales con visión global y ejecución local.',
};

export const companyValues: CompanyValue[] = [
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

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
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

export const differentiators = [
  'Equipos dedicados por industria y tipo de carga.',
  'Monitoreo proactivo con alertas y playbooks operativos.',
  'Optimización de costos con análisis de rutas y consolidación.',
];

export type ProductGalleryItem = {
  src: string;
  alt: string;
  label: string;
  category: string;
};

const productImageBase = `${import.meta.env.BASE_URL}images/`;

export const productGallery: ProductGalleryItem[] = [
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

export type Lane = {
  route: string;
  etaDays: number;
  status: string;
};

export const lanes: Lane[] = [
  { route: 'Shenzhen → Manzanillo', etaDays: 18, status: 'En Tránsito' },
  { route: 'Hamburgo → Veracruz', etaDays: 12, status: 'Despacho' },
  { route: 'São Paulo → Houston', etaDays: 4, status: 'Listo para Embarque' },
];

export const formatEta = (days: number) => `${numberFormatter.format(days)} días`;

export const partners = ['TechCorp', 'Luxe', 'GlobalInd', 'PrimeShip', 'Nextra'];

export type Location = {
  city: string;
  detail: string;
};

export const locations: Location[] = [
  {
    city: 'New York',
    detail: `HQ Américas · Control ${numberFormatter.format(24)}/${numberFormatter.format(7)}`,
  },
  { city: 'London', detail: 'Operaciones Europa · Aduanas' },
  { city: 'Dubai', detail: 'Gateway MEA · Carga Especial' },
  { city: 'Singapore', detail: 'Hub Asia · Multimodal' },
  { city: 'Sydney', detail: 'Oceania · Distribución Regional' },
];

export type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
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

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      '“GlobalLift nos dio visibilidad total de la operación y un equipo que entiende los riesgos reales del comercio internacional.”',
    name: 'Carolina Méndez',
    role: 'Directora de Operaciones, MedTech Global',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      '“La consistencia en tiempos y reportes nos permitió crecer sin aumentar la carga interna de nuestro equipo.”',
    name: 'Luis Navarro',
    role: 'VP Supply Chain, Luxe Brands',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
];
