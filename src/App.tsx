import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Globe2,
  Ship,
  Plane,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Check,
  ArrowRight,
} from 'lucide-react';

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Red Global', href: '#network' },
  { label: 'Casos', href: '#cases' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const compactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
});
const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1,
});

const otifDisplay = percentFormatter.format(0.984);

const highlights = [
  `Cumplimiento Aduanero ${numberFormatter.format(360)}°`,
  'Visibilidad en Tiempo Real',
  'Seguro Multimodal Integrado',
];

type Stat = {
  value: number;
  label: string;
  format: 'number' | 'compact' | 'percent';
  prefix?: string;
  suffix?: string;
};

const stats: Stat[] = [
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

const formatStatValue = (stat: Stat) => {
  if (stat.format === 'compact') {
    return `${stat.prefix ?? ''}${compactFormatter.format(stat.value)}${stat.suffix ?? ''}`;
  }

  if (stat.format === 'percent') {
    return `${stat.prefix ?? ''}${percentFormatter.format(stat.value)}${stat.suffix ?? ''}`;
  }

  return `${stat.prefix ?? ''}${numberFormatter.format(stat.value)}${stat.suffix ?? ''}`;
};

const services = [
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

const differentiators = [
  'Equipos dedicados por industria y tipo de carga.',
  'Monitoreo proactivo con alertas y playbooks operativos.',
  'Optimización de costos con análisis de rutas y consolidación.',
];

const lanes = [
  { route: 'Shenzhen → Manzanillo', etaDays: 18, status: 'En Tránsito' },
  { route: 'Hamburgo → Veracruz', etaDays: 12, status: 'Despacho' },
  { route: 'São Paulo → Houston', etaDays: 4, status: 'Listo para Embarque' },
];

const formatEta = (days: number) => `${numberFormatter.format(days)} días`;

const partners = ['TechCorp', 'Luxe', 'GlobalInd', 'PrimeShip', 'Nextra'];

const locations = [
  {
    city: 'New York',
    detail: `HQ Américas · Control ${numberFormatter.format(24)}/${numberFormatter.format(7)}`,
  },
  { city: 'London', detail: 'Operaciones Europa · Aduanas' },
  { city: 'Dubai', detail: 'Gateway MEA · Carga Especial' },
  { city: 'Singapore', detail: 'Hub Asia · Multimodal' },
  { city: 'Sydney', detail: 'Oceania · Distribución Regional' },
];

const caseStudies = [
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

const testimonials = [
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

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const fieldOrder: Array<keyof FormState> = ['name', 'email', 'company', 'message'];

const getFieldError = (name: keyof FormState, value: string) => {
  const trimmed = value.trim();

  if (name === 'name') {
    return trimmed.length === 0 ? 'El nombre es obligatorio.' : '';
  }

  if (name === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmed) ? '' : 'Ingresa un correo válido.';
  }

  if (name === 'company') {
    return trimmed.length === 0 ? 'La empresa es obligatoria.' : '';
  }

  if (name === 'message') {
    return trimmed.length < 10
      ? `Describe tu operación en al menos ${numberFormatter.format(10)} caracteres.`
      : '';
  }

  return '';
};

const validateForm = (values: FormState) => {
  return (Object.keys(values) as Array<keyof FormState>).reduce(
    (acc, key) => ({ ...acc, [key]: getFieldError(key, values[key]) }),
    { ...initialForm }
  );
};

function App() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [formErrors, setFormErrors] = useState<FormState>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isDirty = Object.values(formData).some((value) => value.trim().length > 0);

  useEffect(() => {
    if (!isDirty) {
      return;
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormState;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setFormErrors((prev) => ({ ...prev, [fieldName]: getFieldError(fieldName, value) }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const errors = validateForm(formData);
    const hasErrors = Object.values(errors).some((error) => error.length > 0);

    setFormErrors(errors);

    if (hasErrors) {
      const firstErrorField = fieldOrder.find((field) => errors[field]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element instanceof HTMLElement) {
          element.focus();
        }
      }
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div id="top" className="bg-ink text-mist">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-ink focus:shadow-signal"
      >
        Saltar al Contenido Principal
      </a>
      <nav className="fixed top-0 z-50 w-full nav-blur" aria-label="Navegación principal">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <a href="#top" className="flex items-center gap-3">
              <Globe2 className="h-8 w-8 text-signal" aria-hidden="true" />
              <span className="text-lg font-semibold tracking-[0.2em] text-mist">
                GLOBAL<span className="text-signal">LIFT</span>
              </span>
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-mist"
                >
                  {item.label}
                </a>
              ))}
            </div>
              <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
              Agendar Llamada
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <section className="hero-aurora min-h-[90vh] pt-32">
          <div className="container mx-auto px-6 pb-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-8 reveal" style={{ animationDelay: '0.1s' }}>
                <span className="badge">Export Intelligence</span>
                <div className="space-y-5">
                  <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                    Exportaciones <span className="text-gradient">Sin Fricción</span> y Con Trazabilidad Total.
                  </h1>
                  <p className="text-lg text-muted md:text-xl">
                    GlobalLift coordina logística marítima y aérea, compliance aduanero y consultoría estratégica
                    para que tu carga llegue a tiempo y con un solo punto de control.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="#contact" className="btn btn-primary">
                    Solicitar Consultoría
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href="#services" className="btn btn-ghost">
                    Ver Servicios
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-signal" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
                <div className="panel p-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="badge">Live Lanes</span>
                    <span className="text-signal tabular-nums">OTIF {otifDisplay}</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {lanes.map((lane) => (
                      <div
                        key={lane.route}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/60 px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-mist break-words">{lane.route}</p>
                          <p className="text-xs text-muted">ETA {formatEta(lane.etaDays)}</p>
                        </div>
                        <span className="text-xs text-signal">{lane.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="panel-solid p-5">
                      <p className="text-2xl font-semibold text-mist tabular-nums">
                        {formatStatValue(stat)}
                      </p>
                      <p className="mt-1 text-sm text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="text-sm uppercase tracking-[0.4em] text-muted">Confianza Global</p>
              <div className="flex flex-wrap items-center gap-8 text-lg text-mist">
                {partners.map((partner) => (
                  <span key={partner} className="text-base text-muted">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-ink py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-end">
              <div>
                <p className="badge">Servicios</p>
                <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                  Operación Diseñada para Exportadores que Exigen Precisión.
                </h2>
              </div>
              <p className="text-lg text-muted">
                Recibes logística, compliance y análisis operativo para reducir tiempos, riesgos y costos ocultos
                en la cadena de exportación.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="card">
                    <Icon className="h-10 w-10 text-signal" aria-hidden="true" />
                    <h3 className="mt-6 text-xl font-semibold text-mist">{service.title}</h3>
                    <p className="mt-3 text-sm text-muted">{service.description}</p>
                    <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-signal">
                      Explorar Servicio
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {differentiators.map((item) => (
                <div key={item} className="panel-solid p-5 text-sm text-muted">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-signal" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="network" className="bg-graphite py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="panel map-frame h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                  alt="Mapa global con rutas de exportación"
                  className="h-full w-full object-cover opacity-60"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
                <div className="route-lines" aria-hidden="true"></div>
                <div className="map-dot" style={{ top: '30%', left: '22%' }} aria-hidden="true"></div>
                <div className="map-dot" style={{ top: '24%', left: '48%' }} aria-hidden="true"></div>
                <div className="map-dot" style={{ top: '44%', left: '52%' }} aria-hidden="true"></div>
                <div className="map-dot" style={{ top: '40%', left: '70%' }} aria-hidden="true"></div>
                <div className="map-dot" style={{ top: '62%', left: '82%' }} aria-hidden="true"></div>
              </div>
              <div className="space-y-6">
                <p className="badge">Red Global</p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Presencia Estratégica para Operar en Cada Huso Horario.
                </h2>
                <p className="text-lg text-muted">
                  Ubicaciones clave en puertos, aeropuertos y zonas francas para asegurar cumplimiento local y
                  visibilidad regional.
                </p>
                <div className="space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.city}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink/50 p-4"
                    >
                      <MapPin className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-mist">{location.city}</p>
                        <p className="text-sm text-muted break-words">{location.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="bg-ink py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="badge">Casos</p>
                <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                  Resultados Medibles para Operaciones Globales.
                </h2>
              </div>
              <p className="text-lg text-muted lg:max-w-xl">
                Soluciones a medida con KPIs claros y reportes ejecutivos para equipos de dirección.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.title} className="panel overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="h-full w-full object-cover"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-ink/50"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="badge">{caseStudy.category}</span>
                      <h3 className="mt-4 text-xl font-semibold text-mist break-words">{caseStudy.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted break-words">{caseStudy.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-graphite py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="badge">Testimonios</p>
                <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                  Equipos que Escalan Sin Fricciones Operativas.
                </h2>
              </div>
              <p className="text-lg text-muted lg:max-w-xl">
                Un equipo dedicado opera como extensión directa del tuyo: mismo ritmo, mismos indicadores.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="card">
                  <p className="text-base text-mist break-words">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                      width={200}
                      height={200}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="font-semibold text-mist">{testimonial.name}</p>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
              <div className="space-y-6">
                <p className="badge">Contacto</p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Estrategia de Exportación con Control Total.
                </h2>
                <p className="text-lg text-muted">
                  Recibirás respuesta en menos de {numberFormatter.format(24)} horas con un diagnóstico inicial y
                  un plan de acción.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-mist">1 World Trade Center, New York</p>
                      <p className="text-sm text-muted">Centro global de operaciones</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-mist">contacto@globallift.com</p>
                      <p className="text-sm text-muted">
                        Respuesta en menos de {numberFormatter.format(24)} horas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-mist">+1 (212) 555-7890</p>
                      <p className="text-sm text-muted">Línea internacional directa</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel p-8">
                <h3 className="text-xl font-semibold text-mist">Solicitar Consultoría</h3>
                <p className="mt-2 text-sm text-muted">
                  Completa el formulario y recibe una propuesta inicial con tiempos y costos estimados.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="text-sm text-muted">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="off"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.name)}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm focus:border-signal"
                      placeholder="Ej. Ana Pérez…"
                    />
                    {formErrors.name ? (
                      <p id="name-error" className="mt-2 text-xs text-red-400" role="alert">
                        {formErrors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-muted">
                      Correo corporativo
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="off"
                      spellCheck={false}
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm focus:border-signal"
                      placeholder="Ej. nombre@empresa.com…"
                    />
                    {formErrors.email ? (
                      <p id="email-error" className="mt-2 text-xs text-red-400" role="alert">
                        {formErrors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm text-muted">
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="off"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.company)}
                      aria-describedby={formErrors.company ? 'company-error' : undefined}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm focus:border-signal"
                      placeholder="Ej. GlobalLift Logistics…"
                    />
                    {formErrors.company ? (
                      <p id="company-error" className="mt-2 text-xs text-red-400" role="alert">
                        {formErrors.company}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm text-muted">
                      Necesidad principal
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm focus:border-signal"
                      placeholder={`Ej. Exportamos ${numberFormatter.format(
                        12
                      )} contenedores/mes a Europa…`}
                    ></textarea>
                    {formErrors.message ? (
                      <p id="message-error" className="mt-2 text-xs text-red-400" role="alert">
                        {formErrors.message}
                      </p>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Enviar Solicitud
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {isSubmitted ? (
                    <p className="text-sm text-signal" role="status">
                      Gracias. Te contactaremos en menos de {numberFormatter.format(24)} horas.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-graphite py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe2 className="h-8 w-8 text-signal" aria-hidden="true" />
                <span className="text-lg font-semibold tracking-[0.2em] text-mist">
                  GLOBAL<span className="text-signal">LIFT</span>
                </span>
              </div>
              <p className="text-sm text-muted">
                Soluciones premium de exportación para empresas que necesitan control, velocidad y precisión
                global.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Servicios</p>
              <p>Logística marítima</p>
              <p>Carga aérea</p>
              <p>Consultoría</p>
              <p>Compliance aduanero</p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Compañía</p>
              <p>Nosotros</p>
              <p>Liderazgo</p>
              <p>Seguridad</p>
              <p>Sostenibilidad</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} GlobalLift. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" className="text-muted transition-colors hover:text-signal" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="https://x.com" className="text-muted transition-colors hover:text-signal" aria-label="X">
                X
              </a>
              <a href="https://www.youtube.com" className="text-muted transition-colors hover:text-signal" aria-label="YouTube">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
