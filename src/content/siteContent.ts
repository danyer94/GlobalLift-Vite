export type Language = 'es' | 'en';

export type NavItem = {
  label: string;
  href: string;
};

export type SeoCopy = {
  title: string;
  description: string;
};

export type NavigationCopy = {
  cta: string;
};

export type HeroCopy = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  micro: string;
  slogans: string[];
};

export type AboutCopy = {
  label: string;
  heading: string;
  paragraphs: string[];
  oneLine: string;
};

export type ServicesCopy = {
  label: string;
  heading: string;
  items: string[];
};

export type ProductsCopy = {
  label: string;
  heading: string;
  exportText: string;
  supplyText: string;
  cta: string;
};

export type ProcessCopy = {
  label: string;
  heading: string;
  steps: string[];
};

export type WhyCopy = {
  label: string;
  heading: string;
  items: string[];
};

export type CompanyValue = {
  title: string;
  description: string;
};

export type ValuesCopy = {
  label: string;
  heading: string;
  visionLabel: string;
  visionText: string;
  missionLabel: string;
  missionText: string;
  valuesLabel: string;
  values: CompanyValue[];
};

export type CommitmentCopy = {
  label: string;
  heading: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCopy = {
  label: string;
  heading: string;
  items: FaqItem[];
};

export type ContactCopy = {
  label: string;
  heading: string;
  description: string;
  form: {
    fields: string[];
    submitLabel: string;
    micro: string;
  };
};

export type SiteContent = {
  navItems: NavItem[];
  seo: SeoCopy;
  navigation: NavigationCopy;
  hero: HeroCopy;
  about: AboutCopy;
  services: ServicesCopy;
  products: ProductsCopy;
  process: ProcessCopy;
  why: WhyCopy;
  values: ValuesCopy;
  commitment: CommitmentCopy;
  faq: FaqCopy;
  contact: ContactCopy;
};

export const brandLogoSrc = `${import.meta.env.BASE_URL}logo/Global-Lift.png`;

export const siteContent: Record<Language, SiteContent> = {
  es: {
    navItems: [
      { label: 'Servicios', href: '#services' },
      { label: 'Productos', href: '#products' },
      { label: 'Proceso', href: '#process' },
      { label: 'Valores', href: '#values' },
      { label: 'Contacto', href: '#contact' },
    ],
    seo: {
      title: 'Global Lift SRL | Importación, Exportación y Logística',
      description:
        'Soluciones B2B de importación, exportación, logística y comercialización. Conectamos mercados con República Dominicana con cumplimiento y transparencia.',
    },
    navigation: {
      cta: 'Contacto',
    },
    hero: {
      title: 'Conectamos mercados con República Dominicana',
      subtitle:
        'Soluciones B2B de importación, exportación, logística y comercialización, con cumplimiento legal, transparencia y procesos estructurados.',
      primaryCta: 'Contacto',
      secondaryCta: 'Servicios',
      micro: 'Cuéntanos qué necesitas mover, abastecer o conectar entre mercados.',
      slogans: [
        'Conectamos mercados, ejecutamos en RD',
        'Comercio global, ejecución local',
        'Logística y comercio con confianza',
      ],
    },
    about: {
      label: 'QUIÉNES SOMOS',
      heading: 'Global Lift SRL',
      paragraphs: [
        'Global Lift SRL es una empresa dominicana dedicada a la importación, exportación, logística y comercialización de bienes y servicios, con un enfoque multisectorial y una visión estratégica orientada al comercio nacional e internacional. Actuamos como puente entre vendedores en el extranjero y oportunidades de abastecimiento en República Dominicana, facilitando conexiones comerciales entre mercados, proveedores y clientes.',
        'Operamos bajo altos estándares de cumplimiento legal, eficiencia operativa y transparencia. Nuestro enfoque se centra en optimizar operaciones y habilitar relaciones comerciales sólidas, con una gestión orientada al crecimiento sostenible y a la creación de valor a largo plazo.',
      ],
      oneLine: 'Conectamos comercio internacional con ejecución local en RD.',
    },
    services: {
      label: 'SERVICIOS',
      heading: 'SERVICIOS',
      items: [
        'Importación — Gestionamos soluciones integrales para apoyar operaciones de importación.',
        'Exportación — Facilitamos exportaciones con coordinación estructurada y enfoque B2B.',
        'Logística y coordinación — Organizamos el flujo eficiente de bienes y servicios.',
        'Comercialización — Apoyamos procesos comerciales para conectar oferta y demanda.',
        'Conexión proveedor–cliente — Servimos de puente entre mercados, proveedores y compradores.',
        'Trade facilitation / servicios comerciales — Acompañamos la operación con procesos estructurados y ética empresarial.',
        'Abastecimiento / provisión — Podemos apoyar el suministro de diversos productos según la necesidad del cliente.',
      ],
    },
    products: {
      label: 'PRODUCTOS',
      heading: 'PRODUCTOS',
      exportText:
        'Exportamos principalmente frutas, vegetales y carbón, conectando oferta en República Dominicana con oportunidades comerciales en el exterior.',
      supplyText:
        'Además, Global Lift SRL puede actuar como proveedor y apoyar procesos de abastecimiento de diversos productos, de forma coordinada y orientada a la relación B2B.',
      cta: '¿Buscas un producto específico? Cuéntanos qué necesitas y evaluamos la mejor forma de apoyarte.',
    },
    process: {
      label: 'PROCESO',
      heading: 'PROCESO',
      steps: [
        'Descubrimiento — Entendemos tu necesidad comercial y el flujo de la operación.',
        'Abastecimiento o conexión — Identificamos la conexión proveedor–cliente según el caso.',
        'Coordinación logística — Organizamos la coordinación logística para un flujo eficiente.',
        'Entrega y seguimiento — Damos seguimiento para sostener una relación comercial confiable.',
      ],
    },
    why: {
      label: 'DIFERENCIALES',
      heading: 'DIFERENCIALES',
      items: [
        'Cumplimiento legal — Operamos con respeto a las leyes y estándares de cumplimiento.',
        'Transparencia — Priorizamos claridad en procesos y acuerdos comerciales.',
        'Eficiencia operativa — Trabajamos con procesos estructurados y enfoque en ejecución.',
        'Ética empresarial — Construimos relaciones desde la integridad y la responsabilidad.',
        'Adaptabilidad — Respondemos de forma ágil a dinámicas del mercado y necesidades del cliente.',
        'Enfoque multisectorial — Facilitamos oportunidades comerciales en múltiples industrias.',
        'Crecimiento responsable — Buscamos crear valor sostenible a largo plazo.',
      ],
    },
    values: {
      label: 'VALORES',
      heading: 'VALORES',
      visionLabel: 'VISIÓN',
      visionText:
        'Ser una empresa líder en comercio internacional y soluciones logísticas en el Caribe y mercados globales, reconocida por confiabilidad, diversificación, cumplimiento y capacidad de generar valor sostenible.',
      missionLabel: 'MISIÓN',
      missionText:
        'Brindar soluciones integrales de importación, exportación, logística y servicios comerciales, facilitando el flujo eficiente de bienes y servicios en múltiples industrias mediante procesos estructurados, ética empresarial y una gestión orientada al crecimiento sostenible.',
      valuesLabel: 'VALORES',
      values: [
        {
          title: 'Integridad',
          description: 'Transparencia, ética y respeto a las leyes en cada operación.',
        },
        {
          title: 'Compromiso',
          description: 'Responsabilidad real en cada acuerdo asumido.',
        },
        {
          title: 'Excelencia Operativa',
          description: 'Eficiencia, calidad y mejora continua en la ejecución.',
        },
        {
          title: 'Confianza',
          description: 'Relaciones sólidas y duraderas con proveedores y clientes.',
        },
        {
          title: 'Adaptabilidad',
          description: 'Agilidad para responder a cambios del mercado.',
        },
        {
          title: 'Enfoque Multisectorial',
          description: 'Oportunidades comerciales estratégicas en múltiples industrias.',
        },
        {
          title: 'Crecimiento Responsable',
          description: 'Desarrollo con visión sostenible y valor a largo plazo.',
        },
      ],
    },
    commitment: {
      label: 'COMPROMISO',
      heading: 'COMPROMISO',
      text:
        'En Global Lift SRL trabajamos para ser un aliado estratégico confiable, conectando mercados, optimizando operaciones y creando oportunidades comerciales con visión global y ejecución local. Nuestra prioridad es facilitar relaciones B2B sólidas a través de transparencia, cumplimiento y una operación estructurada que apoye el crecimiento responsable.',
    },
    faq: {
      label: 'FAQ',
      heading: 'FAQ',
      items: [
        {
          question: '¿Qué tipo de productos exportan?',
          answer:
            'Principalmente frutas, vegetales y carbón. Si buscas algo específico, compártenos tu requerimiento para evaluar el apoyo posible.',
        },
        {
          question: '¿Cómo funciona el puente entre proveedores extranjeros y RD?',
          answer:
            'Facilitamos conexiones comerciales entre mercados, proveedores y clientes, alineando necesidades B2B con ejecución local en República Dominicana.',
        },
        {
          question: '¿Pueden apoyar con logística?',
          answer:
            'Sí. Brindamos soluciones logísticas y coordinación para facilitar el flujo eficiente de bienes y servicios, como parte de una solución integral.',
        },
        {
          question: '¿Trabajan con múltiples industrias?',
          answer:
            'Sí. Operamos con un enfoque multisectorial, facilitando oportunidades comerciales en distintas áreas según la necesidad del cliente.',
        },
        {
          question: '¿Qué significa “cumplimiento legal” en su operación?',
          answer:
            'Significa operar con respeto a las leyes y estándares aplicables, con transparencia y ética empresarial en los procesos.',
        },
        {
          question: '¿Cómo inicio una solicitud o conversación comercial?',
          answer:
            'Escríbenos con tu necesidad (importación, exportación, logística, abastecimiento) y te responderemos para entender el alcance.',
        },
      ],
    },
    contact: {
      label: 'CONTACTO',
      heading: 'CONTACTO',
      description:
        'Conversemos sobre tu operación. Cuéntanos qué necesitas importar, exportar, coordinar o abastecer y trabajemos una ruta clara, responsable y orientada a resultados.',
      form: {
        fields: ['Nombre', 'Empresa', 'Email', 'Teléfono', 'Tipo de servicio', 'Producto (opcional)', 'Mensaje'],
        submitLabel: 'Enviar solicitud',
        micro: 'Revisamos tu solicitud y respondemos con el siguiente paso más claro.',
      },
    },
  },
  en: {
    navItems: [
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#products' },
      { label: 'Process', href: '#process' },
      { label: 'Values', href: '#values' },
      { label: 'Contact', href: '#contact' },
    ],
    seo: {
      title: 'Global Lift SRL | Import, Export & Logistics',
      description:
        'B2B import, export, logistics, and trade facilitation. Connecting markets with the Dominican Republic through compliance and transparency.',
    },
    navigation: {
      cta: 'Contact',
    },
    hero: {
      title: 'Connecting markets with the Dominican Republic',
      subtitle:
        'B2B solutions for import, export, logistics, and trade facilitation—built on legal compliance, transparency, and structured processes.',
      primaryCta: 'Contact',
      secondaryCta: 'Services',
      micro: 'Tell us what you need to move, source, or connect between markets.',
      slogans: ['Connecting markets. Local execution.', 'Global trade, local delivery', 'Logistics and trade, built trust'],
    },
    about: {
      label: 'ABOUT',
      heading: 'Global Lift SRL',
      paragraphs: [
        'Global Lift SRL is a Dominican company focused on importing, exporting, logistics, and the commercialization of goods and services—with a multi-sector approach and a strategic view of both national and international trade. We serve as a bridge between overseas sellers and sourcing opportunities in the Dominican Republic, facilitating commercial connections among markets, suppliers, and clients.',
        'We operate with strong standards for legal compliance, operational efficiency, and transparency. Our focus is to optimize operations and build lasting commercial relationships through structured processes, ethical business practices, and sustainability-oriented growth.',
      ],
      oneLine: 'International trade connectivity with local execution in the DR.',
    },
    services: {
      label: 'SERVICES',
      heading: 'SERVICES',
      items: [
        'Import — End-to-end support solutions for import operations.',
        'Export — B2B export facilitation through structured coordination.',
        'Logistics & coordination — We coordinate an efficient flow of goods and services.',
        'Commercialization — We support trade processes that connect supply and demand.',
        'Supplier–client connection — We bridge markets, suppliers, and buyers.',
        'Trade facilitation / commercial services — We support operations through structured processes and ethical standards.',
        'Sourcing & supply — We can support the provision of various products based on client needs.',
      ],
    },
    products: {
      label: 'PRODUCTS',
      heading: 'PRODUCTS',
      exportText:
        'We primarily export fruits, vegetables, and coal, connecting Dominican supply with international commercial opportunities.',
      supplyText:
        'In addition, Global Lift SRL can operate as a supplier and support sourcing and supply for various products, through coordinated, B2B-focused execution.',
      cta: 'Looking for a specific product? Tell us what you need and we’ll assess how to support you.',
    },
    process: {
      label: 'PROCESS',
      heading: 'PROCESS',
      steps: [
        'Discovery — We understand your commercial need and operational flow.',
        'Sourcing or connection — We align the right supplier–client connection for the case.',
        'Logistics coordination — We coordinate logistics for an efficient flow.',
        'Delivery & follow-up — We follow through to support a reliable commercial relationship.',
      ],
    },
    why: {
      label: 'WHY',
      heading: 'WHY',
      items: [
        'Legal compliance — We operate with respect for laws and compliance standards.',
        'Transparency — We prioritize clarity across processes and commercial agreements.',
        'Operational efficiency — We work through structured processes and execution focus.',
        'Ethical business — We build relationships rooted in integrity and responsibility.',
        'Adaptability — We respond quickly to market dynamics and client needs.',
        'Multi-sector approach — We facilitate commercial opportunities across industries.',
        'Responsible growth — We aim to create sustainable long-term value.',
      ],
    },
    values: {
      label: 'VALUES',
      heading: 'VALUES',
      visionLabel: 'VISION',
      visionText:
        'To be a leading company in international trade and logistics solutions across the Caribbean and global markets—recognized for reliability, diversification, compliance, and the ability to create sustainable value.',
      missionLabel: 'MISSION',
      missionText:
        'To deliver integrated import, export, logistics, and commercial services—enabling the efficient flow of goods and services across industries through structured processes, ethical business practices, and sustainability-oriented management.',
      valuesLabel: 'VALUES',
      values: [
        {
          title: 'Integrity',
          description: 'Transparency, ethics, and respect for laws in every operation.',
        },
        {
          title: 'Commitment',
          description: 'Real accountability in every agreement we take on.',
        },
        {
          title: 'Operational Excellence',
          description: 'Efficiency, quality, and continuous improvement in execution.',
        },
        {
          title: 'Trust',
          description: 'Strong, long-term relationships with suppliers and clients.',
        },
        {
          title: 'Adaptability',
          description: 'Agility to respond to market changes.',
        },
        {
          title: 'Multi-sector Approach',
          description: 'Strategic commercial opportunities across industries.',
        },
        {
          title: 'Responsible Growth',
          description: 'Growth with sustainability and long-term value in mind.',
        },
      ],
    },
    commitment: {
      label: 'COMMITMENT',
      heading: 'COMMITMENT',
      text:
        'At Global Lift SRL, we work to be a trusted strategic partner—connecting markets, optimizing operations, and creating commercial opportunities through global vision and local execution. Our priority is enabling strong B2B relationships through transparency, compliance, and a structured operation that supports responsible growth.',
    },
    faq: {
      label: 'FAQ',
      heading: 'FAQ',
      items: [
        {
          question: 'What products do you export?',
          answer:
            'Primarily fruits, vegetables, and coal. If you’re looking for something specific, share your request so we can assess how to support.',
        },
        {
          question: 'How does your bridge between overseas sellers and the DR work?',
          answer:
            'We facilitate commercial connections among markets, suppliers, and clients—aligning B2B needs with local execution in the Dominican Republic.',
        },
        {
          question: 'Can you support logistics?',
          answer:
            'Yes. We provide logistics solutions and coordination to enable an efficient flow of goods and services as part of an integrated approach.',
        },
        {
          question: 'Do you work across multiple industries?',
          answer:
            'Yes. We operate with a multi-sector approach, facilitating opportunities across areas based on client needs.',
        },
        {
          question: 'What does “legal compliance” mean in your operations?',
          answer:
            'It means operating in accordance with applicable laws and standards—prioritizing transparency and ethical business processes.',
        },
        {
          question: 'How do I start a request or commercial conversation?',
          answer:
            'Message us with your need (import, export, logistics, sourcing) and we’ll follow up to understand the scope.',
        },
      ],
    },
    contact: {
      label: 'CONTACT',
      heading: 'CONTACT',
      description:
        'Let’s talk about your operation. Tell us what you need to import, export, coordinate, or source—so we can align a clear, responsible, results-driven path.',
      form: {
        fields: ['Name', 'Company', 'Email', 'Phone', 'Service Type', 'Product (optional)', 'Message'],
        submitLabel: 'Send request',
        micro: 'We review your request and reply with the clearest next step.',
      },
    },
  },
};

