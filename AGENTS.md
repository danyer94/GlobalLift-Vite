# AGENTS.md - Contexto para Agentes de IA

## INSTRUCCION CRITICA DE ACTUALIZACION

CUALQUIER AGENTE DE IA QUE REALICE CAMBIOS EN ESTE PROYECTO DEBE:

1. ACTUALIZAR ESTE FICHERO AGENTS.md INMEDIATAMENTE DESPUES DE COMPLETAR LOS CAMBIOS
2. REFLEJAR EL ESTADO ACTUAL DEL PROYECTO EN LA SECCION "ESTADO ACTUAL"
3. DOCUMENTAR NUEVAS DEPENDENCIAS, ARCHIVOS O ESTRUCTURAS
4. ACTUALIZAR LA FECHA DE "ULTIMA MODIFICACION"

Este archivo sirve como fuente unica de verdad para todos los agentes de IA que trabajen en este proyecto.

# AGENTS.md - Contexto para Agentes de IA

## INSTRUCCION CRITICA DE ACTUALIZACION

CUALQUIER AGENTE DE IA QUE REALICE CAMBIOS EN ESTE PROYECTO DEBE:

1. ACTUALIZAR ESTE FICHERO AGENTS.md INMEDIATAMENTE DESPUES DE COMPLETAR LOS CAMBIOS
2. REFLEJAR EL ESTADO ACTUAL DEL PROYECTO EN LA SECCION "ESTADO ACTUAL"
3. DOCUMENTAR NUEVAS DEPENDENCIAS, ARCHIVOS O ESTRUCTURAS
4. ACTUALIZAR LA FECHA DE "ULTIMA MODIFICACION"

Este archivo sirve como fuente unica de verdad para todos los agentes de IA que trabajen en este proyecto.

---

## ESTADO ACTUAL DEL PROYECTO

**Ultima modificacion:** 2026-02-06
**Estado:** Proyecto web corporativo de Global Lift SRL con diseño premium cinematográfico, sistema visual tokenizado y sin sección FAQ.
**URL de produccion:** https://globallift.do

### Caracteristicas implementadas recientemente:

- **Refinamiento Visual (Design Audit):**
  - Tipografía unificada: `Unbounded` (Headings) y `Onest` (Body). Eliminado `Zalando Sans`.
  - Branding consistente: Componente `<Logo />` unificado en Nav y Footer.
  - Paleta de colores profundizada: "Midnight" (`#0f172a`), "Electric Cyan" (`#06b6d4`) y "Deep Violet" (`#7c3aed`).
  - Sistema de color unificado con tokens: `--primary` (Midnight), `--secondary` (cian accesible para links/estados) y `--accent` (violet para highlights).
  - Gradientes/overlays normalizados a tokens (`rgb(var(--...)/alpha)`) para consistencia global (Hero, decoraciones, mapas).
  - Navegación y controles refinados: hover de links en `secondary`, `LanguageToggle` estilo segmented control.
  - ProductGallery: indicadores de carrusel alineados al color de acento (`secondary`) y limpieza de prop no usada.
  - Whitespace Premium: Aumento del padding en secciones (`py-32` a `py-48`).
  - Gradients Tokenizados: `--gradient-aurora` (Vibrante) y `--gradient-surface`.
  - Contrast Rhythm: Sección "Why" invertida (Dark Mode) para romper la monotonía.
  - Navegación móvil visible con accesos rápidos por sección (sin menú oculto en mobile).
  - ProductGallery refinado: controles visibles en touch/focus y overlays/control buttons tokenizados.
  - Tokens nuevos de interfaz: `--overlay-soft`, `--overlay-strong`, `--control-glass-bg`, `--control-glass-border`.
  - Nuevas clases de sistema: `.badge-contrast`, `.icon-button-overlay`, `.fullscreen-surface`.
  - Direccion visual "Cinematico Dramatico" aplicada en Fase 1:
    - Fondos fotograficos full-bleed en secciones clave (`About`, `Services`, `Process`, `Values`, `Commitment`) con mascara cinematica y glass surfaces.
    - Hero reconstruido con capas `<img>` reales (en lugar de `background-image`) para controlar encuadre.
    - Hero con `object-position` responsive por breakpoint (mobile/tablet/desktop) para reducir zoom perceptual y recorte agresivo.
    - Overlays del Hero ajustados para mayor contraste dramatico sin perder legibilidad del panel principal.
    - Nuevos tokens cinematograficos: `--cinema-overlay-strong`, `--cinema-overlay-soft`, `--cinema-vignette`.
    - Nueva clase de sistema: `.cinema-surface` para estandarizar secciones con foto + overlay.
  - Fase 2 aplicada:
    - `Services` convertido a mosaico editorial asimetrico (tarjeta protagonista + tarjetas secundarias con spans variables).
    - Tarjetas de `Services` con media layers propias (`--service-media`, `--service-media-position`) y tratamiento cinematografico consistente.
    - `Process` redisenado a narrativa sticky: panel visual fijo a la izquierda + pasos progresivos en columna derecha.
    - Nuevas clases de sistema para Fase 2: `.service-editorial-card`, `.process-stage`, `.process-step-card`.
  - Fase 3 aplicada:
    - Motion unificado con nuevos tokens: `--motion-fast`, `--motion-base`, `--motion-slow`, `--ease-standard`, `--ease-emphasis`.
    - Textura cinematica sutil con grano tokenizado (`--cinema-grain-opacity`) en Hero y superficies cinematicas.
    - Crossfade unificado para media (`.media-crossfade`) y nuevas animaciones de polish (`.cinema-fade-in`, `.cinema-zoom-in`).
    - Estados hover/focus refinados en icon buttons, tarjetas editoriales y pasos de proceso para consistencia tactil.
  - Calibracion de intensidad cinematica (3 presets):
    - Presets disponibles a nivel global via `:root[data-cinema]`: `balanced`, `impact`, `immersive`.
    - Preset activo actual: `immersive`.
    - Cambio rapido de preset en `src/App.tsx` mediante constante `CINEMA_PRESET`.
    - Tokens calibrables por preset: overlay hero, grano, opacidad de media, lift de cards/pasos y velocidad de motion.
  - Integracion de fotografias nuevas en `public/images/generated` en todas las secciones principales (Hero, Reveal, About, Services, Products, Process, Why, Values, Commitment, Contact).
  - Hero y fondos cinematicos actualizados para usar assets generados en lugar de imagenes legacy repetidas.
  - Archivo unico de prompts fotograficos para generacion manual de fondos en `docs/prompts/chatgpt-image-prompts.md` con tamano fijo sugerido (`1536x1024`) en cada prompt.
  - ImageRevealSection optimizado con altura responsive por viewport para reducir fatiga de scroll.
  - Hero simplificado (menos wrappers) y Services con menor densidad visual.
  - LanguageToggle con mejoras de accesibilidad (aria-label + navegación con flechas).
- **Interacciones y Movimiento:**
  - Efecto "Rack Focus" en reveals (Blur + Fade + Slide).
  - Parallax aumentado para mayor profundidad.
  - Física de botones (`active:scale-95`).
- SEO dinamico bilingue (es/en) con react-helmet-async
- Schema.org markup completo (Organization, WebPage, WebSite)
- Metadatos dinamicos segun idioma seleccionado
- Hreflang tags para SEO internacional
- robots.txt con acceso a bots de IA (PerplexityBot, ChatGPT-User, ClaudeBot, GPTBot)
- sitemap.xml configurado
- Open Graph y Twitter Cards dinamicos
- Componente SEO.tsx para manejo dinamico de metadatos
- Lectura de idioma desde parametro `?lang=` para alinear hreflang con el contenido servido
- Imagenes del hero usando `import.meta.env.BASE_URL` para soportar despliegues en subruta
- Imagenes de fondo del Hero usando `import.meta.env.BASE_URL` para respetar el `base` de Vite
- pnpm-lock.yaml actualizado para coincidir con package.json en CI (Netlify con frozen-lockfile)
- Correccion de rutas de imagenes del Hero para evitar doble BASE_URL
- Sistema de animaciones con framer-motion (reveal + parallax por seccion)
- Componente MotionSection para decoraciones y reveal consistente
- Elemento "barco" fijo sincronizado al scroll
- Optimizaciones de scroll (reveal sin blur y throttling en seccion de imagenes)
- Ajuste del Hero para centrar el panel principal de CTA

---

## RESUMEN DEL PROYECTO

**Nombre:** Global Lift SRL  
**Tipo:** Sitio web corporativo B2B  
**Descripcion:** Soluciones de importacion, exportacion, logistica y comercializacion en Republica Dominicana  
**Idiomas:** Espanol (principal) e Ingles  
**Target:** Clientes B2B internacionales y locales

---

## STACK TECNOLOGICO

- **Framework:** React 18.3.1 con TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** Lucide React 0.344.0
- **SEO:** react-helmet-async (dinamico)
- **Animaciones:** framer-motion
- **Linting:** ESLint con typescript-eslint

---

## ESTRUCTURA DE DIRECTORIOS

```
/
|-- docs/
|   |-- prompts/           # Prompts de IA para diseno y generacion visual
|   `-- plans/             # Documentos de diseno y planes
|-- public/
|   |-- images/           # Imagenes de productos y equipo
|   |   `-- generated/    # Fondos fotograficos generados (ChatGPT-Image)
|   |-- logo/             # Logotipos (PNG, ICO)
|   |-- robots.txt        # Acceso a bots incluyendo IA
|   `-- sitemap.xml       # Mapa del sitio
|-- src/
|   |-- components/       # Componentes React
|   |   |-- SEO.tsx        # Gestion dinamica de SEO
|   |   |-- Hero.tsx
|   |   |-- About.tsx
|   |   |-- Services.tsx
|   |   |-- Products.tsx
|   |   |-- Process.tsx
|   |   |-- Why.tsx
|   |   |-- Values.tsx
|   |   |-- Commitment.tsx
|   |   |-- Contact.tsx
|   |   |-- MotionSection.tsx
|   |   |-- Boat.tsx
|   |   |-- Navigation.tsx
|   |   |-- Footer.tsx
|   |   |-- ProductGallery.tsx
|   |   `-- LanguageToggle.tsx
|   |-- content/
|   |   `-- siteContent.ts  # Contenido bilingue (es/en)
|   |-- utils/
|   |   |-- formatters.ts
|   |   `-- scroll.tsx
|   |-- App.tsx
|   |-- main.tsx
|   `-- index.css
|-- index.html           # Template HTML limpio (meta manejados por React)
|-- package.json
|-- tailwind.config.js
|-- vite.config.ts
|-- tsconfig.json
`-- eslint.config.js
```

---

## ARCHIVOS CLAVE Y SU PROPOSITO

### Configuracion y SEO

- **index.html:** Template base limpio. Meta tags gestionados dinamicamente por SEO.tsx
- **public/robots.txt:** Permite acceso a todos los bots incluyendo IA
- **public/sitemap.xml:** Mapa del sitio para indexacion
- **src/components/SEO.tsx:** Componente dinamico para meta tags bilingues

### Contenido

- **src/content/siteContent.ts:** Fuente unica de contenido en espanol e ingles
  - Tipo: `Record<Language, SiteContent>` donde Language = 'es' | 'en'
  - Incluye: navItems, seo, hero, about, services, products, process, why, values, commitment, contact

### Componentes Principales

- **App.tsx:** Componente raiz con logica de cambio de idioma y componente SEO
- **main.tsx:** Punto de entrada con HelmetProvider para SEO
- **Navigation.tsx:** Incluye LanguageToggle para cambio entre es/en
- **MotionSection.tsx:** Wrapper de secciones con reveal y parallax decorativo (soporta `background` para fondos como el Hero)
- **Boat.tsx:** Elemento fijo decorativo sincronizado al scroll
- **src/utils/scroll.tsx:** Proveedor de scrollYProgress compartido

---

## SISTEMA DE IDIOMAS

**Implementacion:**

- Estado en App.tsx: `const [language, setLanguage] = useState<Language>('es')`
- Persistencia: localStorage con key 'globallift-language'
- Deteccion: browser language con fallback a 'es'
- Contenido: Objetos separados para 'es' y 'en' en siteContent.ts

**SEO Multilenguaje:**

- HTML lang attribute dinamico
- Hreflang tags: es, en, x-default
- OG locale dinamico: es_DO / en_US
- Schema.org inLanguage dinamico

---

## COMANDOS DE DESARROLLO

```bash
# Desarrollo
npm run dev

# Build para produccion
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

---

## CONFIGURACION SEO/GEO IMPLEMENTADA

### Meta Tags Dinamicos (SEO.tsx)

- Title y description segun idioma
- Keywords optimizadas por idioma
- Geo-targeting: DO (Republica Dominicana)
- Canonical URL dinamica
- Open Graph completo (type, url, title, description, image, locale, site_name)
- Twitter Cards (card, url, title, description, image)

### Schema.org Markup

1. **Organization:** Datos de Global Lift SRL, logo, direccion, contacto
2. **WebPage:** Informacion de la pagina actual con idioma dinamico
3. **WebSite:** Informacion del sitio con soporte multilenguaje

### Robots.txt

Permite explicitamente:

- Googlebot, Bingbot (buscadores tradicionales)
- PerplexityBot, ChatGPT-User, ClaudeBot, GPTBot (IA)

---

## PENDIENTES Y MEJORAS FUTURAS

- Implementar paginas adicionales si se requiere (ej: /about, /services)
- Considerar implementar i18n con URLs diferentes (/es/, /en/)
- Anadir Google Analytics o similar para tracking
- Implementar blog para content marketing SEO
- Optimizar imagenes con lazy loading avanzado

---

## NOTAS PARA DESARROLLADORES

### Convenciones de codigo:

- Componentes en PascalCase (SEO.tsx, Hero.tsx)
- Hooks en camelCase (useState, useEffect)
- Tipos en siteContent.ts con sufijo Copy (HeroCopy, ContactCopy)
- CSS con clases Tailwind, prefijo 'section' para secciones

### Manejo de idiomas:

- SIEMPRE actualizar ambos idiomas (es/en) en siteContent.ts
- El componente SEO.tsx se encarga de renderizar metadatos correctos
- El cambio de idioma actualiza localStorage y document.documentElement.lang

### SEO:

- NUNCA hardcodear meta tags en index.html (usar SEO.tsx)
- Cada cambio de contenido debe considerar ambos idiomas

---

## DEPENDENCIAS INSTALADAS

### Produccion

- react: ^18.3.1
- react-dom: ^18.3.1
- lucide-react: ^0.344.0
- react-helmet-async: ^2.0.5
- framer-motion: ^11.3.0

### Desarrollo

- vite: ^5.4.2
- typescript: ^5.5.3
- tailwindcss: ^3.4.17
- eslint: ^9.9.1
- @vitejs/plugin-react: ^4.3.1

---

## CONTACTO Y PROPIETARIO

**Empresa:** Global Lift SRL  
**Ubicacion:** Republica Dominicana  
**Tipo de negocio:** Importacion, exportacion, logistica B2B

---

## CHECKLIST PARA AGENTES DE IA

Antes de entregar cambios:

- [ ] Actualizar AGENTS.md con estado actual
- [ ] Actualizar fecha de "Ultima modificacion"
- [ ] Documentar nuevas dependencias si las hay
- [ ] Verificar que ambos idiomas (es/en) estan actualizados
- [ ] Ejecutar `npm run lint` sin errores
- [ ] Verificar que el build funciona (`npm run build`)
- [ ] Documentar cualquier cambio en estructura de archivos

---

**Este archivo fue creado el 2026-01-30 y debe mantenerse actualizado con cada cambio significativo en el proyecto.**
