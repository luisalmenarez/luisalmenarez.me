import type { Locale } from '@/i18n';

type Localized<T> = Record<Locale, T>;

interface ExperienceEntry {
  company: string;
  /** Optional: without it the company renders as plain text instead of a link. */
  companyUrl?: string;
  title: Localized<string>;
  /** Slug of a project page that tells this role's main work as a case study. */
  caseStudy?: string;
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
    // Under NDA: the client is only ever "a lease-insurance company in Colombia".
    // No client or brand names, domains, repos, internal IDs, rates or people.
    company: 'NGDS',
    title: {
      es: 'Desarrollador Fullstack HubSpot (Senior) · Líder técnico de integraciones',
      en: 'Senior Full Stack HubSpot Developer · Integrations Tech Lead',
    },
    caseStudy: 'migracion-arrendamiento-hubspot',
    dateISO: { start: '2026-09', end: null },
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Bun',
      'HubSpot CRM',
      'SQL Server',
      'Azure (AKS, Key Vault)',
      'Helm',
      'GitHub Actions',
      'Wompi',
      'Playwright',
      'Claude Code',
    ],
    location: {
      es: 'Bogotá, Colombia · Remoto',
      en: 'Bogotá, Colombia · Remote',
    },
    summary: {
      es:
        'Lidero las integraciones con HubSpot para una aseguradora de arrendamientos en Colombia. Coordino un equipo de 5 personas y le doy pautas de prueba y revisión a QA.',
      en:
        'I lead the HubSpot integrations for a lease-insurance company in Colombia. I coordinate a team of 5 people and set the testing and review guidelines for QA.',
    },
    responsibilities: {
      es: [
        'Coordino un equipo de 5 personas y le doy pautas de prueba y revisión a QA.',
        'Dirijo el desarrollo con varios agentes de IA en paralelo, reviso y fusiono los cambios, y corro yo los scripts y despliegues de producción.',
        'Diseñé pagos idempotentes con Wompi (webhook, retorno y barrido) y despliegues con interruptores apagados por defecto.',
        'Organicé la puesta al día del portal de asesores para una demo con el CEO, coordinando 5 agentes de IA en paralelo.',
      ],
      en: [
        'I coordinate a team of 5 people and set the testing and review guidelines for QA.',
        'I drive development with several AI agents in parallel, review and merge the changes, and run the production scripts and deployments myself.',
        'Designed idempotent payments with Wompi (webhook, return page and sweep) and deployments behind feature flags that ship off by default.',
        'Organized the catch-up of the sales-advisor portal for a demo with the CEO, coordinating 5 AI agents in parallel.',
      ],
    },
    achievements: {
      es: [
        'Llevé a producción (17-nov-2026) la migración del flujo de arrendamiento de un sistema legado a HubSpot: radicación, pago en línea, motor de decisión, contrato, firma electrónica y emisión.',
        'Cerré una fuga de ingresos: una clave de asesor había regalado 32 estudios en dos días.',
        'Pasé el catálogo de asesores en HubSpot de 7 a 4.029 registros y automaticé el envío a emisión al firmar.',
      ],
      en: [
        'Took to production (Nov 17, 2026) the migration of the lease flow from a legacy system to HubSpot: application, online payment, decision engine, contract, e-signature and policy issuance.',
        'Closed a revenue leak: one advisor code had given away 32 screenings in two days.',
        'Grew the advisor catalog in HubSpot from 7 to 4,029 records and automated the hand-off to issuance on signature.',
      ],
    },
  },
  {
    company: 'PrevalentWare S.A.S',
    companyUrl: 'https://prevalentware.com',
    title: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
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
    title: { es: 'Frontend Developer', en: 'Frontend Developer' },
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
    title: { es: 'Software Developer', en: 'Software Developer' },
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
