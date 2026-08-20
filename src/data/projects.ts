import type { ImageMetadata } from 'astro';
import { PROFILE } from './profile';
import type { Locale } from '@/i18n';
import { TAGS } from './tags';
import adminDashboard from '@/assets/projects/admin-dashboard.webp';
import b2pago from '@/assets/projects/b2pago.webp';
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
    slug: 'manfit',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: { es: '2026 - Actualidad', en: '2026 - Present' },
    featured: true,
    image: manfit,
    link: 'https://manfit.com.co',
    tags: [
      TAGS.NEXTJS,
      TAGS.TYPESCRIPT,
      TAGS.PRISMA,
      TAGS.POSTGRES,
      TAGS.TAILWINDCSS,
      TAGS.PWA,
    ],
    title: { es: 'MANFIT', en: 'MANFIT' },
    description: {
      es: 'Plataforma SaaS en producción para entrenadores personales: gestión de clientes con roles, rutinas con progresión automática de cargas, biblioteca de ejercicios con video, tracking de adherencia con gráficas, módulo de nutrición con generador automático de planes y 89 recetas, y notificaciones push. PWA instalable construida con Next.js 16.',
      en: 'Production-ready SaaS platform for personal trainers: role-based client management, routines with automatic load progression, video-backed exercise library, adherence tracking with charts, nutrition module with auto-generated meal plans and 89 recipes, and push notifications. Installable PWA built with Next.js 16.',
    },
    highlights: {
      es: [
        'Plataforma desplegada en producción en manfit.com.co con ciclo de release continuo (100+ PRs mergeados)',
        'Sistema de roles (super-admin, entrenador, cliente) con NextAuth, Google OAuth, reset de contraseña por email e invitaciones por link',
        'Biblioteca de 138 ejercicios con video YouTube unlisted y detección automática de Shorts vertical 9:16',
        'Planes con duración flexible (1/4/8 semanas), tracking por serie individual y progresión automática de cargas (+2.5 kg upper / +5 kg lower)',
        'Módulo de nutrición completo: anamnesis (12 campos), motor BMR/TDEE, generador automático con rotación semanal y combos culturales, 89 recetas (61 colombianas + 28 internacionales)',
        'PWA instalable con notificaciones push (VAPID) por evento + cron diario',
        'Gráficas de progresión con Recharts, generación de PDFs con react-pdf, emails transaccionales con Resend e importación masiva CSV con validación',
        'Tests unitarios con Vitest sobre la lógica de nutrición y parsing de ingredientes',
      ],
      en: [
        'Production deployment at manfit.com.co with continuous release cadence (100+ merged PRs)',
        'Role-based access (super-admin, trainer, client) with NextAuth, Google OAuth, email-based password reset and invite-link onboarding',
        'Exercise library of 138 entries backed by unlisted YouTube videos with automatic vertical-Shorts 9:16 detection',
        'Plans with flexible duration (1/4/8 weeks), per-set tracking and automatic load progression (+2.5 kg upper / +5 kg lower)',
        'Full nutrition module: 12-field anamnesis, BMR/TDEE engine, auto-generator with weekly rotation and cultural combos, 89 recipes (61 Colombian + 28 international)',
        'Installable PWA with push notifications (VAPID) on event triggers and daily cron',
        'Progression charts with Recharts, PDF generation with react-pdf, transactional emails with Resend, and bulk CSV import with validation',
        'Unit tests with Vitest covering nutrition logic and recipe-ingredient parsing',
      ],
    },
  },
  {
    slug: 'b2pago',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: { es: '2025 - Actualidad', en: '2025 - Present' },
    image: b2pago,
    company: {
      name: 'PrevalentWare',
      url: 'https://prevalentware.com',
      description: {
        es: 'Cliente sector financiero',
        en: 'Financial sector client',
      },
    },
    tags: [TAGS.N8N, TAGS.TYPESCRIPT, TAGS.AWS, TAGS.SQLSERVER, TAGS.PRISMA],
    title: { es: 'B2Pago', en: 'B2Pago' },
    description: {
      es: 'Sistema de automatización para la liquidación quincenal de comisiones comerciales construido sobre n8n. Implementa más de 60 reglas de negocio incluyendo lógica tributaria colombiana completa (Art. 383, RETEICA, IVA, ReteIVA, seguridad social) y un esquema de retención y liberación de pagos cuando la comisión no cubre la cotización a SS. Acompañado por un backend de soporte en Bun + Hono + TypeScript desplegado en AWS Lambda con infraestructura como código (CDK).',
      en: 'n8n-based automation for biweekly commission settlement. Implements 60+ business rules including the full Colombian tax stack (Art. 383 progressive table, ICA withholding, VAT, VAT withholding, social security) and a hold/release scheme for payments that don\'t cover the social-security threshold. Backed by a Bun + Hono + TypeScript service running on AWS Lambda with infrastructure as code (CDK).',
    },
    highlights: {
      es: [
        'Más de 60 reglas de negocio orquestadas en n8n, con lógica tributaria colombiana completa: tabla progresiva del Art. 383 (7 rangos UVT), RETEICA, IVA, ReteIVA y seguridad social con cálculo de IBC (40% del acumulado, piso SMMLV, tope 25 SMMLV)',
        'Esquema de retención/liberación: si la comisión no cubre la cotización a SS se retiene "bruta limpia" (sin retenciones) y se libera intra-mes —agrupándose con la siguiente comisión— o fin de mes —como registro sintético en el mes siguiente—',
        'Recálculo progresivo de RTI Art. 383 y SS sobre el acumulado mensual con retención del diferencial vs pagos previos; distribución proporcional por bruta y por contribución al pool en la liberación intra-mes',
        'Workarounds técnicos sobre limitaciones de n8n: estrategia pre-loop para acumulados (los nodos SQL no comparten visibilidad de INSERTs en el loop) y uso de $getWorkflowStaticData(\'global\') como bus de estado mutable entre iteraciones',
        'Validaciones robustas con normalización canónica (insensible a mayúsculas, tildes y espacios), rechazo de valores espurios de Excel (NaN, #N/A, #REF!, #VALUE!) y validaciones cruzadas régimen × IVA × facturación',
        'Backend de soporte en Bun + Hono + TypeScript desplegado en AWS Lambda; infraestructura como código en CDK multi-stack (network, dev, test, prod, CI/CD)',
        'Persistencia en SQL Server (RDS) con Prisma + adapter MSSQL, autorización con Casbin (RBAC), autenticación con Better-Auth + Cognito, archivos en S3 y secretos en Secrets Manager',
        'UPSERT idempotente del maestro de comisionistas, generación de reportes XLSX consolidados y de excepciones, e integración con SharePoint para ingesta y entrega de archivos',
      ],
      en: [
        '60+ business rules orchestrated in n8n covering the full Colombian tax stack: Art. 383 progressive table (7 UVT brackets), ICA withholding, VAT, VAT withholding and social security with IBC computation (40% of monthly accrual, SMMLV floor, 25-SMMLV cap)',
        'Hold/release scheme: when a commission doesn\'t cover the social-security contribution, the gross amount is held untouched (no withholdings applied) and later released either intra-month —pooled with the next commission— or end-of-month —as a synthetic record at the start of the next month—',
        'Progressive recalculation of Art. 383 income tax withholding and social security over the monthly accrual, retaining only the differential vs prior payments; proportional distribution by gross and by net contribution to the pool during intra-month release',
        'Technical workarounds for n8n limitations: pre-loop strategy for monthly accruals (SQL nodes do not share INSERT visibility within the loop) and use of $getWorkflowStaticData(\'global\') as a mutable state bus across iterations',
        'Robust input validation with canonical normalization (case/accent/whitespace insensitive), rejection of spurious Excel values (NaN, #N/A, #REF!, #VALUE!) and cross-field validation across tax regime × VAT × billing responsibility',
        'Supporting backend in Bun + Hono + TypeScript deployed to AWS Lambda; infrastructure as code in CDK multi-stack setup (network, dev, test, prod, CI/CD)',
        'Persistence on SQL Server (RDS) with Prisma + MSSQL adapter, authorization via Casbin (RBAC), authentication with Better-Auth + Cognito, file storage on S3 and secrets in Secrets Manager',
        'Idempotent UPSERT of the commissioners master, generation of consolidated and exception XLSX reports, and SharePoint integration for source-file ingestion and output delivery',
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
