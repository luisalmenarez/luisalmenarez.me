import type { ImageMetadata } from 'astro';
import { PROFILE } from './profile';
import type { Locale } from '@/i18n';
import { TAGS } from './tags';
import adminDashboard from '@/assets/projects/admin-dashboard.webp';
import commissionSettlement from '@/assets/projects/commission-settlement.webp';
import cloudfleetExtract from '@/assets/projects/cloudfleet-extract.webp';
import manfit from '@/assets/projects/manfit.webp';
import uniandesEcosistema from '@/assets/projects/uniandes-ecosistema.webp';

export type ProjectRole = 'developed' | 'contributed' | 'team';
export type ProjectStatus = 'live' | 'archived' | 'wip';
export type ProjectKind = 'professional' | 'personal' | 'oss';

type ProjectTag = (typeof TAGS)[keyof typeof TAGS];
type Localized<T> = Record<Locale, T>;

export interface ProjectCompany {
  name: string;
  description?: Localized<string>;
  url?: string;
}

export interface ProjectEntry {
  slug: string;
  role: ProjectRole;
  status: ProjectStatus;
  kind?: ProjectKind;
  period: Localized<string>;
  featured?: boolean;
  image?: ImageMetadata;
  link?: string;
  github?: string;
  company?: ProjectCompany;
  tags: ProjectTag[];
  title: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
}

/**
 * Badge presentation for role and status.
 *
 * Lives with the data, next to TAGS, so the project list and the project pages
 * cannot drift apart. Projects.astro still carries its own copy; it can import
 * from here whenever its owner migrates the card.
 */
export const ROLE_LABEL = {
  developed: 'projects.role.developed',
  contributed: 'projects.role.contributed',
  team: 'projects.role.team',
} as const satisfies Record<ProjectRole, string>;

export const ROLE_CLASS: Record<ProjectRole, string> = {
  developed:
    'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
  contributed:
    'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
  team: 'bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/30',
};

/** `live` has no badge: it is the default state and adds noise. */
export const STATUS_LABEL = {
  archived: 'projects.status.archived',
  wip: 'projects.status.wip',
} as const satisfies Partial<Record<ProjectStatus, string>>;

export const STATUS_CLASS: Record<keyof typeof STATUS_LABEL, string> = {
  archived:
    'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/30',
  wip: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30',
};

export const PROJECTS: ProjectEntry[] = [
  {
    slug: 'gymplate',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: { es: '2026 - Actualidad', en: '2026 - Present' },
    featured: true,
    // Screenshot predates the GymPlate rebrand; replace it with a current capture.
    image: manfit,
    link: 'https://www.gymplate.app',
    tags: [
      TAGS.NEXTJS,
      TAGS.TYPESCRIPT,
      TAGS.PRISMA,
      TAGS.POSTGRES,
      TAGS.TAILWINDCSS,
      TAGS.PWA,
    ],
    title: { es: 'GymPlate', en: 'GymPlate' },
    description: {
      es: 'Plataforma de entrenamiento y nutrición en producción para entrenadores personales, sus clientes y atletas que entrenan por su cuenta. Nació como MANFIT y evolucionó a GymPlate: una plataforma multi-tenant con rutinas con progresión, módulo de nutrición con generador de planes y registro de comidas con IA. PWA instalable construida con Next.js 16.',
      en: 'Production training and nutrition platform for personal trainers, their clients and athletes who train on their own. It started as MANFIT and grew into GymPlate: a multi-tenant platform with progressive routines, a nutrition module with a meal-plan generator and AI-assisted meal logging. Installable PWA built with Next.js 16.',
    },
    highlights: {
      es: [
        'En producción en gymplate.app desde octubre de 2026, con más de 1.600 commits y 700+ PRs desde abril',
        'Rebranding de MANFIT a GymPlate con arquitectura multi-tenant y modo atleta para entrenar sin entrenador',
        'Registro de comidas con IA: una foto o descripción del plato se convierte en alimentos y gramos del catálogo usando Claude',
        'Motor de nutrición con 55 reglas, cálculo BMR/TDEE y 89 recetas con combinaciones culturales colombianas',
        'Rutinas con tracking por serie, récords de fuerza, volumen semanal y sugerencias de progresión de cargas',
        'Consentimiento por categoría de datos bajo la Ley 1581 (datos de salud y fotos) con prueba firmada con HMAC',
        'Roles de super-admin, entrenador, cliente y atleta con NextAuth; notificaciones push (VAPID) y emails con Resend',
        '272 archivos de pruebas unitarias con Vitest y 87 specs end-to-end con Playwright',
      ],
      en: [
        'In production at gymplate.app since October 2026, with 1,600+ commits and 700+ PRs since April',
        'Rebrand from MANFIT to GymPlate with a multi-tenant architecture and an athlete mode for training without a coach',
        'AI meal logging: a photo or description of the plate becomes catalog foods and grams using Claude',
        'Nutrition engine with 55 rules, BMR/TDEE calculation and 89 recipes with Colombian cultural pairings',
        'Routines with per-set tracking, strength PRs, weekly volume and load-progression suggestions',
        'Per-category consent under Colombia\'s Law 1581 (health data and photos) with HMAC-signed proof',
        'Super-admin, trainer, client and athlete roles with NextAuth; push notifications (VAPID) and email via Resend',
        '272 Vitest unit-test files and 87 Playwright end-to-end specs',
      ],
    },
  },
  {
    // The client is not named on purpose: only the generic technical story is public.
    slug: 'commission-settlement',
    role: 'team',
    status: 'live',
    kind: 'professional',
    period: { es: '2025 - 2026', en: '2025 - 2026' },
    image: commissionSettlement,
    company: {
      name: 'PrevalentWare',
      url: 'https://prevalentware.com',
      description: {
        es: 'Cliente del sector fintech',
        en: 'Fintech client',
      },
    },
    tags: [TAGS.N8N, TAGS.TYPESCRIPT, TAGS.AWS, TAGS.SQLSERVER, TAGS.PRISMA],
    title: {
      es: 'Liquidación de comisiones',
      en: 'Commission Settlement',
    },
    description: {
      es: 'Sistema en n8n que automatiza la liquidación quincenal de comisiones de más de 200 comisionistas para un cliente fintech, con lógica tributaria y de seguridad social colombiana. Lo construí junto al Tech Lead como recurso dedicado, con un backend de soporte en Bun, Hono y TypeScript sobre AWS Lambda e infraestructura como código en CDK.',
      en: 'n8n system that automates biweekly commission settlement for 200+ agents at a fintech client, applying Colombian tax and social-security rules. Built together with the Tech Lead as a dedicated engineer, with a supporting Bun, Hono and TypeScript backend on AWS Lambda and infrastructure as code in CDK.',
    },
    highlights: {
      es: [
        'Más de 60 reglas de negocio versionadas en un documento maestro, que fue la única fuente de verdad para el desarrollo y las pruebas',
        'Módulos de créditos y seguros en producción, validados a lo largo de 7 cortes quincenales reales',
        'Cálculo de retenciones y aportes a seguridad social sobre el acumulado mensual, reteniendo solo el diferencial frente a pagos previos',
        'Estrategia SQL previa al loop y estado compartido entre ejecuciones para superar los límites de estado de n8n',
        'Validación de entradas con normalización canónica y rechazo de valores corruptos de Excel antes de calcular',
        'Backend de soporte en Bun + Hono + TypeScript sobre AWS Lambda, con CDK multi-stack (red, dev, test, prod y CI/CD)',
        'SQL Server con Prisma, autorización RBAC con Casbin y SharePoint para la ingesta y entrega de archivos',
      ],
      en: [
        '60+ business rules versioned in a master document that served as the single source of truth for development and testing',
        'Loans and insurance modules in production, validated across 7 real biweekly settlement cycles',
        'Withholding and social-security calculations over the monthly accrual, retaining only the differential against prior payments',
        'Pre-loop SQL strategy and state shared across executions to work around n8n\'s state limits',
        'Input validation with canonical normalization and rejection of corrupt Excel values before any calculation runs',
        'Supporting Bun + Hono + TypeScript backend on AWS Lambda, with a multi-stack CDK setup (network, dev, test, prod and CI/CD)',
        'SQL Server with Prisma, RBAC authorization with Casbin and SharePoint for file ingestion and delivery',
      ],
    },
  },
  {
    slug: 'trk',
    role: 'developed',
    status: 'live',
    kind: 'personal',
    period: { es: '2026 - Actualidad', en: '2026 - Present' },
    tags: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.POSTGRES, TAGS.RESTAPI],
    title: { es: 'trk', en: 'trk' },
    description: {
      es: 'Tracker personal de proyectos para registrar ítems, avances y decisiones de todos mis repos desde la terminal. Lo componen una CLI compilada para Mac, Linux y Windows, una API en Next.js sobre Supabase y una skill para Claude Code, todo en un monorepo con Bun.',
      en: 'Personal project tracker to log items, progress and decisions across all my repos from the terminal. It combines a CLI compiled for Mac, Linux and Windows, a Next.js API on Supabase and a Claude Code skill, all in a Bun monorepo.',
    },
    highlights: {
      es: [
        'Monorepo con Bun en tres paquetes: núcleo de dominio con Zod, API en Next.js con Drizzle y CLI con commander',
        'CLI de 13 comandos, todos con salida --json para que la consuman scripts y agentes de IA',
        'Binarios nativos con bun build --compile para Mac, Linux (WSL) y Windows',
        'Un token por máquina guardado como hash SHA-256 y comparado en tiempo constante',
        'RLS en Supabase que cierra la API REST pública; CI con pruebas contra un Postgres real',
        'Sin procesos en segundo plano: todo registro es explícito, decisión documentada como ADR',
      ],
      en: [
        'Bun monorepo with three packages: a Zod domain core, a Next.js API with Drizzle and a commander-based CLI',
        '13-command CLI, every command with --json output so scripts and AI agents can consume it',
        'Native binaries via bun build --compile for Mac, Linux (WSL) and Windows',
        'One token per machine, stored as a SHA-256 hash and checked in constant time',
        'Supabase RLS locks down the public REST API; CI runs tests against a real Postgres',
        'No background processes: every entry is explicit, a decision recorded as an ADR',
      ],
    },
  },
  {
    slug: 'fleet-optimizer',
    role: 'developed',
    status: 'wip',
    kind: 'professional',
    period: { es: '2026', en: '2026' },
    tags: [TAGS.NEXTJS, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.RECHARTS],
    title: { es: 'Optimizador de flota', en: 'Fleet Optimizer' },
    description: {
      es: 'Demo de programación de flota para una empresa de transporte de carga líquida, que hoy planea sus asignaciones en Excel. Un motor determinista en TypeScript asigna cada solicitud al vehículo óptimo por compatibilidad, capacidad, disponibilidad y un puntaje ponderado. La IA queda fuera del núcleo: solo sugiere después de optimizar.',
      en: 'Fleet-scheduling demo for a liquid-cargo transport company that plans its assignments in Excel today. A deterministic TypeScript engine assigns each request to the best vehicle by compatibility, capacity, availability and a weighted score. AI stays out of the core: it only suggests after optimization.',
    },
    highlights: {
      es: [
        'Motor de optimización determinista y auditable: las reglas de negocio viven en código, no en un modelo',
        'Compatibilidad producto × producto (qué cargó antes el tanque) con una matriz de 2.862 pares sobre 132 productos',
        'El hallazgo en los datos reales obligó a reescribir el PDD a la v2 antes de seguir construyendo',
        'IA detrás de una interfaz intercambiable, usada solo para recomendaciones posteriores a la optimización',
        'Importación y exportación de Excel para convivir con el flujo actual del equipo de operaciones',
      ],
      en: [
        'Deterministic, auditable optimization engine: business rules live in code, not in a model',
        'Product × product compatibility (what the tank carried before) with a 2,862-pair matrix over 132 products',
        'A finding in the real data forced a rewrite of the PDD to v2 before building further',
        'AI behind a swappable interface, used only for post-optimization recommendations',
        'Excel import and export to fit the operations team\'s current workflow',
      ],
    },
  },
  {
    slug: 'engineering-studio-site',
    role: 'developed',
    status: 'wip',
    kind: 'personal',
    period: { es: '2026', en: '2026' },
    tags: [TAGS.NEXTJS, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWINDCSS],
    title: {
      es: 'Sitio de estudio de ingeniería',
      en: 'Engineering Studio Website',
    },
    description: {
      es: 'Reconstrucción del sitio de un estudio de ingeniería estructural y BIM. El sitio anterior era una SPA que servía HTML vacío y no aparecía en buscadores; el nuevo renderiza todo en el servidor, suma un cotizador por pasos que califica el brief técnico y un visor 3D de modelos con three.js.',
      en: 'Rebuild of a structural engineering and BIM studio\'s website. The old site was an SPA that served empty HTML and never showed up in search; the new one renders everything on the server, adds a step-by-step quote wizard that qualifies the technical brief and a 3D model viewer with three.js.',
    },
    highlights: {
      es: [
        'Home con LCP de 0,87 s, CLS de 0 y TBT de 40 ms en Lighthouse móvil (Slow 4G y CPU 4× más lenta)',
        'HTML de la home de 35 kB comprimido y renderizado por completo en el servidor',
        'Visor 3D con three.js cargado bajo demanda: la página pesa 328 kB antes de cargarlo',
        'Interruptores de lanzamiento en código (indexación, assets, revisión legal y precios) en lugar de TODOs',
        'Pruebas end-to-end con Playwright y auditoría de accesibilidad con axe-core',
      ],
      en: [
        'Home page LCP of 0.87 s, CLS of 0 and TBT of 40 ms on mobile Lighthouse (Slow 4G, 4× CPU slowdown)',
        'Home HTML at 35 kB compressed, fully server-rendered',
        'three.js 3D viewer loaded on demand: the page weighs 328 kB before it loads',
        'Launch switches in code (indexing, assets, legal review and pricing) instead of TODOs',
        'End-to-end tests with Playwright and accessibility audits with axe-core',
      ],
    },
  },
  {
    slug: 'uniandes-ecosistema',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: { es: '2024 - 2025', en: '2024 - 2025' },
    image: uniandesEcosistema,
    link: 'https://ecosistema.uniandes.edu.co/',
    company: {
      name: 'Esinergia S.A.S',
      url: 'https://esinergia.co',
    },
    tags: [TAGS.TWIG, TAGS.SCSS, TAGS.STORYBOOK, TAGS.DRUPAL, TAGS.JAVASCRIPT, TAGS.FIGMA],
    title: {
      es: 'Universidad de los Andes - Ecosistema',
      en: 'Universidad de los Andes - Ecosistema',
    },
    description: {
      es: 'Desarrollo completo del sitio web institucional Ecosistema Uniandes, implementando un sistema de diseño modular con componentes reutilizables documentados en Storybook.',
      en: 'Full development of the Ecosistema Uniandes institutional website, implementing a modular design system with reusable components documented in Storybook.',
    },
    highlights: {
      es: [
        'Implementación completa de sistema de diseño con componentes modulares',
        'Desarrollo e implementación de componentes reutilizables y escalables en Storybook, incluyendo variantes y temas claro/oscuro',
        'Creación de menú sticky con comportamiento dinámico al scroll',
        'Implementación de componentes con alto grado de accesibilidad y sistemas de grids responsive',
        'Componentes y buscadores con filtros y estados interactivos',
        'Documentación técnica completa en Storybook',
        'Arquitectura BEM con design tokens de Site Studio',
        'Accesibilidad WCAG implementada en todos los componentes',
      ],
      en: [
        'Complete implementation of a design system with modular components',
        'Development and implementation of reusable and scalable components in Storybook, including variants and light/dark themes',
        'Creation of a sticky menu with dynamic scroll behavior',
        'Implementation of highly accessible components and responsive grid systems',
        'Components and search features with filters and interactive states',
        'Complete technical documentation in Storybook',
        'BEM architecture with Site Studio design tokens',
        'WCAG accessibility implemented across all components',
      ],
    },
  },
  {
    slug: 'admin-dashboard',
    role: 'developed',
    status: 'live',
    kind: 'personal',
    period: { es: '2024', en: '2024' },
    image: adminDashboard,
    link: 'https://crud-dataviewer.vercel.app/',
    github: 'https://github.com/luisalmenarez/Dashboard',
    tags: [TAGS.NEXTJS, TAGS.TAILWINDCSS, TAGS.CLERK, TAGS.PRISMA, TAGS.RECHARTS],
    title: {
      es: 'Dashboard Administrativo',
      en: 'Admin Dashboard',
    },
    description: {
      es: 'Panel administrativo completo desarrollado con Next.js que ofrece una interfaz intuitiva para la gestión de datos y visualización de estadísticas en tiempo real.',
      en: 'Complete admin panel built with Next.js that provides an intuitive interface for data management and real-time statistics visualization.',
    },
    highlights: {
      es: [
        'Desarrollado con Next.js 14 y React 18',
        'Autenticación integrada con ClerkJS',
        'Estadísticas interactivas con Recharts',
        'Formularios validados con React Hook Form y Zod',
        'Diseño responsive con soporte para modo oscuro',
        'Gestión de base de datos con Prisma ORM',
        'Calendario avanzado usando FullCalendar',
        'Estilo moderno con Tailwind CSS',
        'Consumo de APIs con Axios y manejo de fechas con date-fns',
      ],
      en: [
        'Built with Next.js 14 and React 18',
        'Authentication integrated with ClerkJS',
        'Interactive statistics with Recharts',
        'Forms validated with React Hook Form and Zod',
        'Responsive design with dark mode support',
        'Database management with Prisma ORM',
        'Advanced calendar using FullCalendar',
        'Modern styling with Tailwind CSS',
        'API consumption with Axios and date handling with date-fns',
      ],
    },
  },
  {
    slug: 'cloudfleet-extract',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: { es: '2023 - 2026', en: '2023 - 2026' },
    image: cloudfleetExtract,
    company: {
      name: 'Coordinadora de Tanques S.A.S',
      url: 'https://coorditanques.com',
    },
    tags: [TAGS.NODEJS, TAGS.SQLSERVER, TAGS.RESTAPI, TAGS.POWERBI],
    title: {
      es: 'CloudFleetExtract',
      en: 'CloudFleetExtract',
    },
    description: {
      es: 'Pipeline ETL automatizado en Node.js que sincroniza más de 51,000 órdenes de trabajo desde la API de CloudFleet hacia SQL Server, alimentando dashboards de Power BI usados por operaciones y gerencia. Reemplazó procesos manuales de exportación.',
      en: 'Automated Node.js ETL pipeline that syncs 51,000+ work orders from the CloudFleet API into SQL Server, powering Power BI dashboards used by operations and management. Replaced manual export workflows.',
    },
    highlights: {
      es: [
        'Procesa más de 51,000 órdenes de trabajo en producción, alimentando dashboards en tiempo real',
        'Orquestador con tres modos: sincronización incremental, actualización de órdenes abiertas y ejecución completa',
        'Diseño idempotente: detecta órdenes existentes y actualiza en lugar de duplicar',
        'Sincronización incremental que lee la última fecha en BD para evitar reprocesamiento',
        'Manejo de paginación con header x-nextpage, rate-limiting (delay 2s) y procesamiento por lotes de 30 con pausas de 3s',
        'Lógica en cascada para clasificación de mantenimientos: labor → encabezado → fallback "SIN CLASIFICAR"',
        'Captura de cuatro fechas de cierre distintas para análisis temporal en Power BI',
        'Programado con PM2 y Windows Task Scheduler para ejecución continua sin intervención',
      ],
      en: [
        'Processes 51,000+ work orders in production, powering real-time dashboards',
        'Orchestrator with three modes: incremental sync, open-order updates, and full run',
        'Idempotent by design: detects existing orders and updates instead of duplicating',
        'Incremental sync reads the last date in the DB to avoid reprocessing',
        'Handles pagination via x-nextpage header, rate-limiting (2s delay) and batches of 30 with 3s pauses',
        'Cascading logic for maintenance classification: labor → header → "UNCLASSIFIED" fallback',
        'Captures four distinct closure dates for time-based analysis in Power BI',
        'Scheduled with PM2 and Windows Task Scheduler for unattended continuous execution',
      ],
    },
  },
];

interface ProjectSchemaInput {
  project: ProjectEntry;
  lang: Locale;
  url: string;
}

/**
 * schema.org CreativeWork for a single project page.
 *
 * Deliberately not SoftwareApplication: the list mixes web apps with an ETL
 * pipeline and an institutional site, and only some of them are installable
 * software. CreativeWork covers all of them without lying about any.
 */
export function buildProjectSchema({
  project,
  lang,
  url,
}: ProjectSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title[lang],
    description: project.description[lang],
    url,
    inLanguage: lang,
    keywords: project.tags.map((tag) => tag.name).join(', '),
    author: {
      '@type': 'Person',
      name: PROFILE.name,
      url: PROFILE.url,
    },
    ...(project.link ? { sameAs: [project.link] } : {}),
  };
}
