import type { ImageMetadata } from 'astro';
import type { Locale } from '@/i18n';
import { TAGS } from './tags';
import adminDashboard from '@/assets/projects/admin-dashboard.webp';
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
  period: string;
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

export const PROJECTS: ProjectEntry[] = [
  {
    slug: 'manfit',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: '2026 - Actualidad',
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
    slug: 'uniandes-ecosistema',
    role: 'developed',
    status: 'live',
    kind: 'professional',
    period: '2024 - 2025',
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
    period: '2024',
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
    period: '2023 - 2026',
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
