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

/** One block of a long-form case study: a heading, then prose and/or a list. */
export interface CaseStudySection {
  heading: string;
  body?: string;
  items?: string[];
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
  /** Ordered steps drawn as a simple flow diagram on the project page. */
  flow?: Localized<string[]>;
  /** When present, the project page renders these sections instead of the plain highlight list. */
  caseStudy?: Localized<CaseStudySection[]>;
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
    // Under NDA: the client is only ever "a lease-insurance company in Colombia".
    // No client or brand names, domains, repos, PR numbers, IDs, rates, people
    // or screenshots. Every figure comes from the project write-up; do not add more.
    slug: 'migracion-arrendamiento-hubspot',
    role: 'team',
    status: 'live',
    kind: 'professional',
    period: { es: '2026 - Actualidad', en: '2026 - Present' },
    featured: true,
    company: {
      name: 'NGDS',
      description: {
        es: 'Aseguradora de arrendamientos en Colombia',
        en: 'Lease-insurance company in Colombia',
      },
    },
    tags: [
      TAGS.HUBSPOT,
      TAGS.NEXTJS,
      TAGS.TYPESCRIPT,
      TAGS.NODEJS,
      TAGS.SQLSERVER,
    ],
    title: {
      es: 'Migración del flujo de arrendamiento a HubSpot',
      en: 'Migrating a lease flow to HubSpot',
    },
    description: {
      es: 'Migración de un sistema legado a HubSpot del flujo completo de arrendamiento de una aseguradora de arrendamientos en Colombia: radicación, pago en línea, motor de decisión, contrato, firma electrónica y emisión. En producción desde el 17 de noviembre de 2026 y estabilizado después, con un desarrollo dirigido con agentes de IA.',
      en: 'Migration of the full lease flow of a lease-insurance company in Colombia from a legacy system to HubSpot: application, online payment, decision engine, contract, e-signature and policy issuance. In production since November 17, 2026 and stabilized afterwards, with development driven through AI agents.',
    },
    highlights: {
      es: [
        'Flujo nuevo en producción desde el 17-nov-2026',
        'Catálogo de asesores en HubSpot de 7 a 4.029 registros',
        'Fuga de ingresos cerrada: la clave que había regalado 32 estudios en dos días ahora cobra el estudio',
        'Emisión automática al firmar: 5 contratos detenidos salieron sin intervención manual',
        '43 contactos corregidos y 8 contratos relanzados a firma con la dirección correcta',
        '«Relanzar firma» pasó 3 de 3 pruebas de punta a punta en el sandbox, sobre una suite de 1.681 pruebas en verde',
      ],
      en: [
        'New flow in production since Nov 17, 2026',
        'Advisor catalog in HubSpot grew from 7 to 4,029 records',
        'Revenue leak closed: the code that had given away 32 screenings in two days now charges for them',
        'Automatic issuance on signature: 5 stalled contracts went out with no manual step',
        '43 contacts corrected and 8 contracts re-sent for signature with the right address',
        '"Relaunch signature" passed 3 of 3 end-to-end tests in the sandbox, on top of a 1,681-test suite in green',
      ],
    },
    flow: {
      es: [
        'Radicación',
        'Pago en línea',
        'Motor de decisión',
        'Contrato',
        'Firma electrónica',
        'Emisión',
      ],
      en: [
        'Application',
        'Online payment',
        'Decision engine',
        'Contract',
        'E-signature',
        'Issuance',
      ],
    },
    caseStudy: {
      es: [
        {
          heading: 'Contexto',
          body: 'Una aseguradora de arrendamientos en Colombia operaba su flujo de arrendamiento sobre un sistema legado: una base SQL Server en un servidor local y un formulario web aparte. El flujo va de la radicación y el pago del estudio a la decisión del motor, la orden de contrato, la firma y la emisión de la póliza.',
        },
        {
          heading: 'Problema',
          body: 'El plan de migración iba retrasado, y el negocio necesitaba operar el flujo de punta a punta sobre HubSpot como CRM central, sin apagar de golpe lo legado. Después de salir a producción aparecieron fallas que costaban dinero y operación: asesores que no llegaban, estudios que salían gratis y contratos que había que corregir y volver a firmar.',
        },
        {
          heading: 'Rol',
          body: 'Liderazgo técnico del frente de integraciones entre HubSpot y el sistema legado, con un equipo de 5 personas y pautas de prueba y revisión para QA. Diseño y dirección del desarrollo, en su mayor parte con varias sesiones de agentes de IA en paralelo; revisión y fusión de los cambios, ejecución paso a paso de los scripts y despliegues de producción y coordinación con el cliente y con los demás desarrolladores.',
        },
        {
          heading: 'Arquitectura',
          items: [
            'Cola de salida a HubSpot: las apps escriben eventos en una tabla de salida con estados (pendiente, enviado, reintentar, agotado) y un único publicador los lleva a HubSpot cada 2 minutos. El flujo no depende de las caídas ni de los límites de la API de HubSpot, y un solo punto conoce el modelo del CRM.',
            'Pagos confirmados por tres caminos idempotentes: webhook, página de retorno y barrido del servidor. El precio y la firma de integridad se calculan en el servidor y el pago ocurre en el checkout de Wompi, así que ningún dato de tarjeta pasa por los servidores propios.',
            'Interruptores por funcionalidad en los valores de Helm: cada cambio se despliega apagado y se prende aparte, con un OK explícito. Con el cliente operando en vivo, cualquier cambio se revierte sin otro despliegue.',
          ],
        },
        {
          heading: 'Trabajo realizado',
          items: [
            'Salida a producción del flujo nuevo: radicación con pago en línea, motor de decisión, solicitud y análisis en HubSpot, orden de contrato, firma electrónica y envío a emisión.',
            'Carga en HubSpot de los 4.029 asesores activos del sistema legado, con el asesor asociado a la solicitud, al análisis y al contrato.',
            'Detección de una clave de asesor que daba el estudio gratis y apagado inmediato con un interruptor de configuración.',
            'Envío automático a emisión: al firmar el último firmante, el contrato pasa solo a emisión, sin visto bueno manual.',
            'Herramienta «Relanzar firma» para el área de Contratos: anula el flujo de firma viejo, relanza con la fecha o la vigencia corregidas y crea una tarea para el dueño del contrato.',
            'Script de revisión diaria de producción, de solo lectura: validación, firmas, emisión, asesores, la cola de salida a HubSpot y pagos aprobados sin solicitud.',
            'Especificación técnica de los pagos en línea para el cliente.',
            'CI en runners propios en Docker tras agotarse los minutos de GitHub Actions.',
          ],
        },
        {
          heading: 'Resultados',
          items: [
            'Flujo nuevo en producción desde el 17-nov-2026.',
            'Catálogo de asesores en HubSpot ampliado de 7 a 4.029 registros.',
            'Fuga de ingresos cerrada: la clave que había dado 32 estudios gratis en dos días volvió a cobrar el estudio.',
            'Emisión automática: 5 contratos detenidos salieron sin intervención manual.',
            '43 contactos corregidos y 8 contratos relanzados a firma con la dirección correcta.',
            '«Relanzar firma» aprobada en 3 de 3 pruebas de punta a punta en el sandbox, sobre una suite de 1.681 pruebas en verde.',
            'Menos soporte manual: Contratos relanza firmas por su cuenta y producción tiene una revisión diaria que no escribe en ella.',
          ],
        },
        {
          heading: 'Retos',
          items: [
            'Convivencia con el legado: el formulario anterior seguía vivo con la misma cuenta de pagos y la misma URL de eventos, y los pagos nuevos no llegaban por webhook. Solución: un barrido que consulta la pasarela y registra de forma idempotente, más el reenvío al sistema viejo de los avisos que le corresponden.',
            'Producción con accesos restringidos: base de datos solo por VPN, bóveda de secretos con firewall por IP y agentes sin acceso a producción. Solución: scripts con modo «ver» y modo «aplicar», con respaldo y reversión, ejecutados a mano paso a paso.',
            'Varios agentes sobre un solo ambiente de dev: un merge mal planteado borró la rama compartida. Solución: rama restaurada y nueva regla de pases desde ramas copia.',
            'Relanzamiento de firmas sin enlaces viejos vivos: anulación del flujo anterior en cada relanzamiento y reglas explícitas de cuándo no relanzar.',
          ],
        },
      ],
      en: [
        {
          heading: 'Context',
          body: 'A lease-insurance company in Colombia ran its lease flow on a legacy system: an on-premise SQL Server database and a separate web form. The flow goes from the application and the screening payment to the engine\'s decision, the contract order, the signature and the policy issuance.',
        },
        {
          heading: 'Problem',
          body: 'The migration plan was behind schedule, and the business needed to run the flow end to end on HubSpot as its central CRM without switching off the legacy system overnight. After go-live, failures showed up that cost money and operations: advisors that never arrived, screenings that went out free, and contracts that had to be corrected and signed again.',
        },
        {
          heading: 'Role',
          body: 'Technical leadership of the integrations between HubSpot and the legacy system, with a team of 5 and testing and review guidelines for QA. Design and direction of the development, mostly through several AI agent sessions in parallel; review and merging of the changes, step-by-step execution of production scripts and deployments, and coordination with the client and the other developers.',
        },
        {
          heading: 'Architecture',
          items: [
            'Outbox to HubSpot: the apps write events to an outbox table with states (pending, sent, retry, exhausted) and a single publisher pushes them to HubSpot every 2 minutes. The flow does not depend on HubSpot API outages or rate limits, and only one place knows the CRM model.',
            'Payments confirmed through three idempotent paths: webhook, return page and a server-side sweep. The price and the integrity signature are computed on the server and payment happens on Wompi\'s checkout, so no card data ever touches the application servers.',
            'Per-feature flags in the Helm values: every change ships off and is turned on separately, with an explicit OK. With the client operating live, any change can be rolled back without another deployment.',
          ],
        },
        {
          heading: 'Work done',
          items: [
            'Production launch of the new flow: application with online payment, decision engine, request and analysis in HubSpot, contract order, e-signature and hand-off to issuance.',
            'Load of the 4,029 active advisors from the legacy system into HubSpot, with the advisor linked to the request, the analysis and the contract.',
            'Detection of an advisor code that made the screening free, switched off right away with a configuration flag.',
            'Automatic hand-off to issuance: when the last signer signs, the contract moves to issuance on its own, with no manual approval.',
            '"Relaunch signature" tool for the Contracts team: it voids the old signing flow, relaunches it with the corrected date or term and creates a task for the contract owner.',
            'Read-only daily production check: validation, signatures, issuance, advisors, the HubSpot outbox and approved payments without a request.',
            'Technical specification of the online payments for the client.',
            'CI on self-hosted Docker runners after the GitHub Actions minutes ran out.',
          ],
        },
        {
          heading: 'Results',
          items: [
            'New flow in production since Nov 17, 2026.',
            'Advisor catalog in HubSpot grown from 7 to 4,029 records.',
            'Revenue leak closed: the code that had given away 32 free screenings in two days now charges for them again.',
            'Automatic issuance: 5 stalled contracts went out with no manual step.',
            '43 contacts corrected and 8 contracts re-sent for signature with the right address.',
            '"Relaunch signature" passed 3 of 3 end-to-end tests in the sandbox, on top of a 1,681-test suite in green.',
            'Less manual support: Contracts relaunches signatures on its own, and production gets a daily check that never writes to it.',
          ],
        },
        {
          heading: 'Challenges',
          items: [
            'Coexisting with the legacy system: the old form was still live on the same payment account and the same events URL, and new payments never arrived by webhook. Fix: a sweep that queries the gateway and records payments idempotently, plus forwarding to the old system the notifications that belong to it.',
            'Production with restricted access: database only over VPN, a secrets vault behind an IP firewall and no production access for agents. Fix: scripts with a "preview" and an "apply" mode, with backup and rollback, run by hand step by step.',
            'Several agents on a single dev environment: a badly set-up merge deleted the shared branch. Fix: branch restored and a new rule to promote from copy branches.',
            'Relaunching signatures without leaving old links alive: every relaunch voids the previous flow, with explicit rules for when not to relaunch.',
          ],
        },
      ],
    },
  },
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
