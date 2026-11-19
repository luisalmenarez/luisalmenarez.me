import type { Locale } from '@/i18n';

type Localized<T> = Record<Locale, T>;

interface ExperienceEntry {
  company: string;
  /** Optional: without it the company renders as plain text instead of a link. */
  companyUrl?: string;
  /** Identical across locales for every entry so far; localize if that changes. */
  title: string;
  /** `end: null` means the role is current. Formatting belongs to the view. */
  dateISO: { start: string; end: string | null };
  technologies: string[];
  location: Localized<string>;
  summary: Localized<string>;
  responsibilities: Localized<string[]>;
  achievements: Localized<string[]>;
}

/**
 * Work history, newest first.
 *
 * Locale-invariant fields live at the top level and localized copy is wrapped in
 * `Localized<T>`, mirroring PROJECTS. The previous shape was
 * `Record<Locale, ExperienceEntry[]>` — two parallel arrays where company,
 * companyUrl, title and all 13 technologies per entry were retyped by hand in
 * both blocks, with nothing to catch them drifting apart.
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    // Under NDA: no client names, internal systems or identifiable architecture.
    company: 'NGDS',
    title: 'Full Stack Developer',
    dateISO: { start: '2026-09', end: null },
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Node.js',
      'HubSpot',
      'SQL Server',
      'REST APIs',
      'TailwindCSS',
      'GitHub Actions',
      'Agile/Scrum',
    ],
    location: {
      es: 'Bogotá, Colombia · Remoto',
      en: 'Bogotá, Colombia · Remote',
    },
    summary: {
      es:
        'Desarrollo full-stack en una consultora de transformación digital: portales web, integraciones con CRM y migración de sistemas legacy para clientes empresariales.',
      en:
        'Full-stack development at a digital transformation consultancy: web portals, CRM integrations and legacy-system migrations for enterprise clients.',
    },
    responsibilities: {
      es: [
        'Liderazgo técnico de un portal web para la red comercial de un cliente, sobre un monorepo en Next.js y TypeScript pensado para alojar varios portales.',
        'Migración de datos de un sistema legacy en SQL Server hacia HubSpot: homologación, normalización e integración de registros.',
        'Migración de frontends legacy a Next.js manteniendo las reglas de negocio existentes.',
        'Definición del estándar de desarrollo del equipo y del flujo de pull requests: revisión asistida por IA, validación de un compañero y merge.',
        'Administración de la organización de GitHub del proyecto con acceso por equipos.',
      ],
      en: [
        'Technical lead of a web portal for a client\'s sales network, built on a Next.js and TypeScript monorepo designed to host several portals.',
        'Data migration from a legacy SQL Server system into HubSpot: mapping, normalization and record integration.',
        'Migration of legacy frontends to Next.js while preserving the existing business rules.',
        'Definition of the team\'s development standard and pull-request flow: AI-assisted review, peer approval and merge.',
        'Administration of the project\'s GitHub organization with team-based access.',
      ],
    },
    achievements: {
      es: [
        'Integración de registros hacia HubSpot en producción durante el primer mes en la compañía.',
        'Base de monorepo reutilizable que permite arrancar nuevos portales del cliente sin rehacer la infraestructura.',
      ],
      en: [
        'Shipped a record integration into HubSpot to production within the first month at the company.',
        'Reusable monorepo foundation that lets new client portals start without rebuilding the infrastructure.',
      ],
    },
  },
  {
    company: 'PrevalentWare S.A.S',
    companyUrl: 'https://prevalentware.com',
    title: 'Full Stack Developer',
    dateISO: { start: '2025-10', end: '2026-09' },
    technologies: [
      'n8n',
      'Next.js',
      'React.js',
      'TypeScript',
      'Node.js',
      'Bun',
      'AWS',
      'AWS CDK',
      'Prisma',
      'GraphQL',
      'SQL Server',
      'Python',
      'SharePoint',
    ],
    location: {
      es: 'Envigado, Colombia · Remoto',
      en: 'Envigado, Colombia · Remote',
    },
    summary: {
      es:
        'Desarrollo de automatizaciones y soluciones web para clientes en LATAM, como recurso dedicado en un proyecto fintech, sobre n8n, Next.js, TypeScript y AWS.',
      en:
        'Automation and web solutions for LATAM clients, as a dedicated engineer on a fintech engagement, built on n8n, Next.js, TypeScript and AWS.',
    },
    responsibilities: {
      es: [
        'Construcción, junto al Tech Lead, de un sistema en n8n que liquida las comisiones de más de 200 comisionistas con lógica tributaria y de seguridad social colombiana (retención en la fuente, ReteICA, ReteIVA, aportes a seguridad social).',
        'Documentación de las reglas de negocio en un documento maestro versionado, con matrices de prueba, historias de usuario y diagramas BPMN.',
        'Soporte y ajustes sobre una automatización RPA existente en Python y sobre bases SQL Server de otros clientes.',
        'Desarrollo full-stack con Next.js, TypeScript, Prisma y GraphQL, desplegado en AWS con infraestructura como código (CDK y CloudFormation).',
      ],
      en: [
        'Built, together with the Tech Lead, an n8n system that settles commissions for 200+ agents under Colombian tax and social-security rules (income-tax withholding, ICA and VAT withholding, social-security contributions).',
        'Documented the business rules in a versioned master document, with test matrices, user stories and BPMN diagrams.',
        'Supported and adjusted an existing Python RPA automation and SQL Server databases for other clients.',
        'Full-stack development with Next.js, TypeScript, Prisma and GraphQL, deployed on AWS with infrastructure as code (CDK and CloudFormation).',
      ],
    },
    achievements: {
      es: [
        'Módulos de créditos y seguros llevados a producción y validados a lo largo de 7 cortes quincenales reales, con más de 60 reglas de negocio versionadas.',
        'Solución a los límites de estado de n8n con una estrategia SQL previa al loop y estado compartido entre ejecuciones del mismo mes.',
        'Evaluación técnica interna aprobada: infraestructura AWS aislada, 2 PRs mergeados con la suite de pruebas en verde y tres defectos del boilerplate corregidos (migraciones, cookies cross-domain y caché de permisos).',
      ],
      en: [
        'Took the loans and insurance modules to production, validated across 7 real biweekly settlement cycles with 60+ versioned business rules.',
        'Worked around n8n\'s state limits with a pre-loop SQL strategy and state shared across executions within the same month.',
        'Passed an internal technical evaluation: isolated AWS infrastructure, 2 merged PRs with a green test suite and three boilerplate defects fixed (migrations, cross-domain cookies and permission caching).',
      ],
    },
  },
  {
    company: 'Esinergia S.A.S',
    companyUrl: 'https://esinergia.co',
    title: 'Frontend Developer',
    dateISO: { start: '2024-09', end: '2025-10' },
    technologies: [
      'React.js',
      'Drupal',
      'Site Studio',
      'Storybook',
      'Twig',
      'SCSS',
      'JavaScript',
      'CSS3',
      'npm',
      'Gulp',
      'Docker',
      'ddev',
      'Gitflow',
    ],
    location: {
      es: 'Bogotá, Colombia · Remoto',
      en: 'Bogotá, Colombia · Remote',
    },
    summary: {
      es:
        'Desarrollo de interfaces web personalizadas para proyectos de gran escala en el sector educativo, optimizando rendimiento y experiencia de usuario.',
      en:
        'Development of custom web interfaces for large-scale projects in the education sector, optimizing performance and user experience.',
    },
    responsibilities: {
      es: [
        'Implementación de interfaces interactivas utilizando React.js, Drupal y Site Studio.',
        'Creación de componentes modulares y escalables en Storybook, con integraciones de Twig y SCSS.',
        'Optimización de rendimiento y tiempos de carga de aplicaciones web complejas.',
        'Colaboración con stakeholders para alinear soluciones técnicas con objetivos de negocio.',
      ],
      en: [
        'Implementation of interactive user interfaces using React.js, Drupal and Site Studio.',
        'Creation of modular and scalable components in Storybook, with Twig and SCSS integrations.',
        'Performance and load-time optimization for complex web applications.',
        'Collaboration with stakeholders to align technical solutions with business goals.',
      ],
    },
    achievements: {
      es: [
        'Reducción del 30% en tiempos de desarrollo mediante componentes reutilizables en Storybook con soporte multi-proyecto.',
        'Aumento del 20% en velocidad de carga optimizando estilos CSS/SCSS y aplicando mejores prácticas de carga de recursos.',
        'Desarrollo del ecosistema digital de la Universidad de los Andes con Drupal, Site Studio, Twig y SCSS.',
      ],
      en: [
        '30% reduction in development time through reusable, multi-project Storybook components.',
        '20% increase in load speed by optimizing CSS/SCSS and applying resource-loading best practices.',
        'Development of the Universidad de los Andes digital ecosystem with Drupal, Site Studio, Twig and SCSS.',
      ],
    },
  },
  {
    company: 'Coordinadora de Tanques S.A.S',
    companyUrl: 'https://coorditanques.com',
    title: 'Software Developer',
    dateISO: { start: '2022-09', end: '2024-09' },
    technologies: [
      'Node.js',
      'MongoDB',
      'Express.js',
      'React.js',
      'Next.js',
      'Angular',
      'TypeScript',
      'SQL Server',
      'TailwindCSS',
      'SCSS',
      'Power BI',
      'GSAP',
      'Framer Motion',
    ],
    location: {
      es: 'Medellín, Colombia · Presencial',
      en: 'Medellín, Colombia · On-site',
    },
    summary: {
      es:
        'Implementación de soluciones integrales y automatización de procesos críticos del negocio en el sector de logística y transporte de combustibles.',
      en:
        'Delivery of integral solutions and automation of business-critical processes in the fuel logistics and transportation sector.',
    },
    responsibilities: {
      es: [
        'Implementación de automatizaciones para procesos críticos mediante integraciones con Node.js, MongoDB y APIs RESTful.',
        'Desarrollo de soluciones para integración de sistemas heredados con nuevas aplicaciones usando Express.js, Next.js y SQL Server.',
        'Desarrollo de sistemas de integración con APIs externas para extracción automatizada de datos hacia SQL Server, alimentando dashboards en Power BI.',
        'Implementación de nuevas funcionalidades en plataformas internas con Angular y TypeScript.',
      ],
      en: [
        'Implementation of automations for critical processes through Node.js, MongoDB and RESTful APIs.',
        'Development of integrations between legacy systems and new applications using Express.js, Next.js and SQL Server.',
        'Building integration systems with external APIs to automate data extraction into SQL Server, powering Power BI dashboards.',
        'Implementation of new features in internal platforms with Angular and TypeScript.',
      ],
    },
    achievements: {
      es: [
        'Automatización del 50% de procesos manuales mediante Node.js, Express.js y APIs RESTful.',
        'Reducción del 40% en tiempo de inactividad del sistema con mantenimiento preventivo.',
        'Desarrollo de CloudFleetExtract: sistema de extracción automatizada de datos de flota (51,000+ órdenes de trabajo) desde la API CloudFleet hacia SQL Server para reporting en Power BI.',
        'Optimización de consultas SQL Server para extracción de datos y generación de informes dinámicos.',
      ],
      en: [
        '50% automation of manual processes using Node.js, Express.js and RESTful APIs.',
        '40% reduction in system downtime through preventive maintenance.',
        'Built CloudFleetExtract: automated fleet-data extraction system (51,000+ work orders) from the CloudFleet API into SQL Server for Power BI reporting.',
        'SQL Server query optimization for data extraction and dynamic report generation.',
      ],
    },
  },
];
