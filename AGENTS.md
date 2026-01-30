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

**Ultima modificacion:** 2026-01-30
**Estado:** Proyecto web de Global Lift SRL con SEO multilenguaje completamente optimizado
**URL de produccion:** https://globallift.do

### Caracteristicas implementadas recientemente:

- SEO dinamico bilingue (es/en) con react-helmet-async
- Schema.org markup completo (Organization, WebPage, WebSite, FAQPage)
- Metadatos dinamicos segun idioma seleccionado
- Hreflang tags para SEO internacional
- robots.txt con acceso a bots de IA (PerplexityBot, ChatGPT-User, ClaudeBot, GPTBot)
- sitemap.xml configurado
- Open Graph y Twitter Cards dinamicos
- FAQPage schema en componente Faq.tsx
- Componente SEO.tsx para manejo dinamico de metadatos

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
- **Linting:** ESLint con typescript-eslint

---

## ESTRUCTURA DE DIRECTORIOS

```
/
├── public/
│   ├── images/           # Imagenes de productos y equipo
│   ├── logo/            # Logotipos (PNG, ICO)
│   ├── robots.txt       # Acceso a bots incluyendo IA
│   └── sitemap.xml      # Mapa del sitio
├── src/
│   ├── components/       # Componentes React
│   │   ├── SEO.tsx      # Gestion dinamica de SEO
│   │   ├── Faq.tsx      # FAQ con Schema markup
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Products.tsx
│   │   ├── Process.tsx
│   │   ├── Why.tsx
│   │   ├── Values.tsx
│   │   ├── Commitment.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductGallery.tsx
│   │   └── LanguageToggle.tsx
│   ├── content/
│   │   └── siteContent.ts  # Contenido bilingue (es/en)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html           # Template HTML limpio (meta manejados por React)
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
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
  - Incluye: navItems, seo, hero, about, services, products, process, why, values, commitment, faq, contact

### Componentes Principales
- **App.tsx:** Componente raiz con logica de cambio de idioma y componente SEO
- **main.tsx:** Punto de entrada con HelmetProvider para SEO
- **Navigation.tsx:** Incluye LanguageToggle para cambio entre es/en
- **Faq.tsx:** FAQPage schema markup para SEO/GEO (AI search engines)

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
4. **FAQPage:** En componente Faq.tsx con microdatos y JSON-LD

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
- Componentes en PascalCase (SEO.tsx, Faq.tsx)
- Hooks en camelCase (useState, useEffect)
- Tipos en siteContent.ts con sufijo Copy (HeroCopy, FaqCopy)
- CSS con clases Tailwind, prefijo 'section' para secciones

### Manejo de idiomas:
- SIEMPRE actualizar ambos idiomas (es/en) en siteContent.ts
- El componente SEO.tsx se encarga de renderizar metadatos correctos
- El cambio de idioma actualiza localStorage y document.documentElement.lang

### SEO:
- NUNCA hardcodear meta tags en index.html (usar SEO.tsx)
- FAQ items automaticamente generan schema markup
- Cada cambio de contenido debe considerar ambos idiomas

---

## DEPENDENCIAS INSTALADAS

### Produccion
- react: ^18.3.1
- react-dom: ^18.3.1
- lucide-react: ^0.344.0
- react-helmet-async: ^(instalado recientemente)

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
