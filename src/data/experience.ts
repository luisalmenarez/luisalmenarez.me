import type { Locale } from '@/i18n';

interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const EXPERIENCE: Record<Locale, ExperienceEntry[]> = {
  es: [
    {
      date: 'Oct 2025 - Actualidad',
      title: 'Full Stack Developer',
      company: 'PrevalentWare S.A.S',
      companyUrl: 'https://prevalentware.com',
      location: 'Envigado, Colombia · Remoto',
      summary:
        'Desarrollo e implementación de soluciones web y de automatización para clientes en LATAM, utilizando Next.js, TypeScript y AWS como stack principal.',
      responsibilities: [
        'Desarrollo full-stack con React, Next.js y TypeScript en frontend, complementado con Node.js y REST APIs en backend, desplegado sobre infraestructura AWS.',
        'Diseño e implementación de arquitecturas escalables para aplicaciones web, con integración de bases de datos relacionales (SQL Server) y no relacionales (MongoDB).',
        'Desarrollo e implementación de flujos de automatización complejos en n8n para procesos financieros y de liquidación, integrando SharePoint, SQL Server y reglas de negocio específicas del cliente.',
        'Creación de documentación técnica exhaustiva: PDD, reglas de negocio, matrices de prueba y diagramas BPMN.',
        'Participación activa en metodologías ágiles/Scrum, cumpliendo con sprints y entregables definidos.',
      ],
      achievements: [
        'Automatización end-to-end de cálculos financieros y tributarios complejos mediante n8n, eliminando procesos manuales propensos a errores y reduciendo significativamente los tiempos de procesamiento.',
        'Validación exitosa de un sistema de automatización financiera con múltiples escenarios de prueba, identificando y resolviendo bugs críticos antes de la puesta en producción.',
      ],
      technologies: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'n8n',
        'SQL Server',
        'MongoDB',
        'GraphQL',
        'REST APIs',
        'TailwindCSS',
        'SharePoint',
        'Agile/Scrum',
      ],
    },
    {
      date: 'Sep 2024 - Oct 2025',
      title: 'Frontend Developer',
      company: 'Esinergia S.A.S',
      companyUrl: 'https://esinergia.co',
      location: 'Bogotá, Colombia · Remoto',
      summary:
        'Desarrollo de interfaces web personalizadas para proyectos de gran escala en el sector educativo, optimizando rendimiento y experiencia de usuario.',
      responsibilities: [
        'Implementación de interfaces interactivas utilizando React.js, Drupal y Site Studio.',
        'Creación de componentes modulares y escalables en Storybook, con integraciones de Twig y SCSS.',
        'Optimización de rendimiento y tiempos de carga de aplicaciones web complejas.',
        'Colaboración con stakeholders para alinear soluciones técnicas con objetivos de negocio.',
      ],
      achievements: [
        'Reducción del 30% en tiempos de desarrollo mediante componentes reutilizables en Storybook con soporte multi-proyecto.',
        'Aumento del 20% en velocidad de carga optimizando estilos CSS/SCSS y aplicando mejores prácticas de carga de recursos.',
        'Desarrollo del ecosistema digital de la Universidad de los Andes con Drupal, Site Studio, Twig y SCSS.',
      ],
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
    },
    {
      date: 'Sep 2022 - Sep 2024',
      title: 'Software Developer',
      company: 'Coordinadora de Tanques S.A.S',
      companyUrl: 'https://coorditanques.com',
      location: 'Medellín, Colombia · Presencial',
      summary:
        'Implementación de soluciones integrales y automatización de procesos críticos del negocio en el sector de logística y transporte de combustibles.',
      responsibilities: [
        'Implementación de automatizaciones para procesos críticos mediante integraciones con Node.js, MongoDB y APIs RESTful.',
        'Desarrollo de soluciones para integración de sistemas heredados con nuevas aplicaciones usando Express.js, Next.js y SQL Server.',
        'Desarrollo de sistemas de integración con APIs externas para extracción automatizada de datos hacia SQL Server, alimentando dashboards en Power BI.',
        'Implementación de nuevas funcionalidades en plataformas internas con Angular y TypeScript.',
      ],
      achievements: [
        'Automatización del 50% de procesos manuales mediante Node.js, Express.js y APIs RESTful.',
        'Reducción del 40% en tiempo de inactividad del sistema con mantenimiento preventivo.',
        'Desarrollo de CloudFleetExtract: sistema de extracción automatizada de datos de flota (51,000+ órdenes de trabajo) desde la API CloudFleet hacia SQL Server para reporting en Power BI.',
        'Optimización de consultas SQL Server para extracción de datos y generación de informes dinámicos.',
      ],
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
    },
  ],
  en: [
    {
      date: 'Oct 2025 - Present',
      title: 'Full Stack Developer',
      company: 'PrevalentWare S.A.S',
      companyUrl: 'https://prevalentware.com',
      location: 'Envigado, Colombia · Remote',
      summary:
        'Development and delivery of web and automation solutions for LATAM clients, using Next.js, TypeScript and AWS as the primary stack.',
      responsibilities: [
        'Full-stack development with React, Next.js and TypeScript on the frontend, complemented by Node.js and REST APIs on the backend, deployed on AWS infrastructure.',
        'Design and implementation of scalable architectures for web applications, integrating relational (SQL Server) and non-relational (MongoDB) databases.',
        'Development and implementation of complex automation workflows in n8n for financial and settlement processes, integrating SharePoint, SQL Server and client-specific business rules.',
        'Authoring of thorough technical documentation: PDD, business rules, test matrices and BPMN diagrams.',
        'Active participation in agile/Scrum methodologies, meeting sprint deliverables and commitments.',
      ],
      achievements: [
        'End-to-end automation of complex financial and tax calculations via n8n, eliminating error-prone manual processes and significantly cutting processing times.',
        'Successful validation of a financial automation system across multiple test scenarios, identifying and resolving critical bugs before production rollout.',
      ],
      technologies: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'n8n',
        'SQL Server',
        'MongoDB',
        'GraphQL',
        'REST APIs',
        'TailwindCSS',
        'SharePoint',
        'Agile/Scrum',
      ],
    },
    {
      date: 'Sep 2024 - Oct 2025',
      title: 'Frontend Developer',
      company: 'Esinergia S.A.S',
      companyUrl: 'https://esinergia.co',
      location: 'Bogotá, Colombia · Remote',
      summary:
        'Development of custom web interfaces for large-scale projects in the education sector, optimizing performance and user experience.',
      responsibilities: [
        'Implementation of interactive user interfaces using React.js, Drupal and Site Studio.',
        'Creation of modular and scalable components in Storybook, with Twig and SCSS integrations.',
        'Performance and load-time optimization for complex web applications.',
        'Collaboration with stakeholders to align technical solutions with business goals.',
      ],
      achievements: [
        '30% reduction in development time through reusable, multi-project Storybook components.',
        '20% increase in load speed by optimizing CSS/SCSS and applying resource-loading best practices.',
        'Development of the Universidad de los Andes digital ecosystem with Drupal, Site Studio, Twig and SCSS.',
      ],
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
    },
    {
      date: 'Sep 2022 - Sep 2024',
      title: 'Software Developer',
      company: 'Coordinadora de Tanques S.A.S',
      companyUrl: 'https://coorditanques.com',
      location: 'Medellín, Colombia · On-site',
      summary:
        'Delivery of integral solutions and automation of business-critical processes in the fuel logistics and transportation sector.',
      responsibilities: [
        'Implementation of automations for critical processes through Node.js, MongoDB and RESTful APIs.',
        'Development of integrations between legacy systems and new applications using Express.js, Next.js and SQL Server.',
        'Building integration systems with external APIs to automate data extraction into SQL Server, powering Power BI dashboards.',
        'Implementation of new features in internal platforms with Angular and TypeScript.',
      ],
      achievements: [
        '50% automation of manual processes using Node.js, Express.js and RESTful APIs.',
        '40% reduction in system downtime through preventive maintenance.',
        'Built CloudFleetExtract: automated fleet-data extraction system (51,000+ work orders) from the CloudFleet API into SQL Server for Power BI reporting.',
        'SQL Server query optimization for data extraction and dynamic report generation.',
      ],
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
    },
  ],
};
