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
      title: 'Software Engineer',
      company: 'PrevalentWare S.A.S',
      companyUrl: 'https://prevalentware.com',
      location: 'Envigado, Colombia - Remoto',
      summary:
        'Desarrollo e implementación de soluciones web personalizadas utilizando React.js, Next.js, TypeScript y AWS, enfocado en crear aplicaciones escalables y de alto rendimiento para proyectos de gran envergadura en el sector retail.',
      responsibilities: [
        'Desarrollo full-stack de aplicaciones web con Next.js, React.js y TypeScript, implementando arquitecturas escalables integradas con servicios AWS.',
        'Diseño e integración de bases de datos relacionales/no relacionales, GraphQL y REST APIs para garantizar manejo eficiente de datos.',
        'Participación en el ciclo completo de desarrollo bajo metodología ágil: levantamiento de requisitos, arquitectura, desarrollo, testing y paso a producción.',
        'Colaboración con equipos multidisciplinarios y creación de documentación técnica detallada para garantizar trazabilidad y mantenimiento del código.',
      ],
      achievements: [
        'Implementación exitosa de soluciones técnicas en proyecto de alto impacto para cliente del sector retail, cumpliendo con tiempos de entrega y estándares de calidad.',
        'Adopción de mejores prácticas de desarrollo con TypeScript, mejorando la mantenibilidad y reduciendo bugs en producción.',
        'Integración eficiente de servicios AWS, optimizando la infraestructura cloud del proyecto.',
        'Participación en sprints ágiles con entregas consistentes y comunicación proactiva de avances y bloqueos al líder técnico.',
      ],
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'AWS',
        'GraphQL',
        'REST API',
        'Node.js',
        'Tailwind CSS',
        'Git',
      ],
    },
    {
      date: 'Sept 2024 - Oct 2025',
      title: 'Frontend Developer',
      company: 'Esinergia S.A.S',
      companyUrl: 'https://esinergia.co',
      location: 'Bogotá, Colombia - Remoto',
      summary:
        'Desarrollo e implementación de interfaces personalizadas utilizando React.js, Drupal y Site Studio, enfocado en crear componentes modulares y optimizar el rendimiento de aplicaciones web.',
      responsibilities: [
        'Implementación de interfaces de usuario personalizadas con React.js, Drupal y Site Studio.',
        'Desarrollo de componentes modulares y escalables en Storybook con integraciones de Twig y SASS.',
        'Optimización de aplicaciones para mejorar rendimiento y tiempos de carga.',
        'Participación en reuniones con stakeholders para alinear soluciones con objetivos del cliente.',
      ],
      achievements: [
        'Reducción del 30% en tiempo de desarrollo mediante componentes reutilizables en Storybook.',
        'Aumento del 20% en velocidad de carga de interfaces optimizando estilos y recursos.',
        'Incorporación de Twig para plantillas dinámicas, mejorando la adaptabilidad del diseño a múltiples plataformas.',
        'Implementación de un flujo de trabajo eficiente utilizando npm, Gulp, Docker y ddev para la gestión del entorno de desarrollo.',
      ],
      technologies: [
        'React',
        'SASS',
        'Storybook',
        'Twig',
        'Drupal',
        'Site Studio',
        'Docker',
      ],
    },
    {
      date: 'Sept 2022 - Sept 2024',
      title: 'Software Developer',
      company: 'Coordinadora de Tanques S.A.S',
      companyUrl: 'https://coorditanques.com',
      location: 'Medellín, Colombia - Presencial',
      summary:
        'Desarrollo de soluciones y automatización de procesos críticos mediante Node.js, Express.js y bases de datos relacionales, mejorando la eficiencia operativa y la integración de sistemas.',
      responsibilities: [
        'Implementación de automatizaciones para procesos críticos usando Node.js, MongoDB y APIs RESTful.',
        'Desarrollo de soluciones para integrar sistemas heredados con Express.js, Next.js y SQL Server.',
        'Implementación de nuevas funcionalidades en plataformas internas con Angular y TypeScript.',
        'Optimización de consultas y generación de informes dinámicos.',
      ],
      achievements: [
        'Automatización del 50% de procesos manuales, mejorando significativamente la productividad operativa y estableciendo bases para futuras implementaciones de RPA.',
        'Reducción del 40% en tiempo de inactividad mediante mantenimiento preventivo.',
        'Optimización de consultas SQL para mejorar la extracción de datos y reportes en Power BI.',
        'Desarrollo de dashboards interactivos en Power BI integrados con SQL Server, proporcionando visualizaciones para toma de decisiones.',
      ],
      technologies: [
        'Next.js',
        'Angular',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'SQL Server',
        'Express.js',
        'Power BI',
      ],
    },
  ],
  en: [
    {
      date: 'Oct 2025 - Present',
      title: 'Software Engineer',
      company: 'PrevalentWare S.A.S',
      companyUrl: 'https://prevalentware.com',
      location: 'Envigado, Colombia - Remote',
      summary:
        'Development and implementation of custom web solutions using React.js, Next.js, TypeScript, and AWS, focused on building scalable, high-performance applications for large-scale retail sector projects.',
      responsibilities: [
        'Full-stack development of web applications with Next.js, React.js, and TypeScript, implementing scalable architectures integrated with AWS services.',
        'Design and integration of relational/non-relational databases, GraphQL, and REST APIs to ensure efficient data management.',
        'Participation in the full development lifecycle under agile methodology: requirements gathering, architecture, development, testing, and production deployment.',
        'Collaboration with cross-functional teams and creation of detailed technical documentation to ensure traceability and code maintainability.',
      ],
      achievements: [
        'Successful implementation of technical solutions in a high-impact retail sector project, meeting delivery timelines and quality standards.',
        'Adoption of development best practices with TypeScript, improving maintainability and reducing production bugs.',
        'Efficient integration of AWS services, optimizing the project cloud infrastructure.',
        'Participation in agile sprints with consistent deliveries and proactive communication of progress and blockers to the tech lead.',
      ],
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'AWS',
        'GraphQL',
        'REST API',
        'Node.js',
        'Tailwind CSS',
        'Git',
      ],
    },
    {
      date: 'Sept 2024 - Oct 2025',
      title: 'Frontend Developer',
      company: 'Esinergia S.A.S',
      companyUrl: 'https://esinergia.co',
      location: 'Bogotá, Colombia - Remote',
      summary:
        'Development and implementation of custom interfaces using React.js, Drupal, and Site Studio, focused on building modular components and optimizing web application performance.',
      responsibilities: [
        'Implementation of custom user interfaces with React.js, Drupal, and Site Studio.',
        'Development of modular and scalable components in Storybook with Twig and SASS integrations.',
        'Application optimization to improve performance and load times.',
        'Participation in stakeholder meetings to align solutions with client objectives.',
      ],
      achievements: [
        '30% reduction in development time through reusable components in Storybook.',
        '20% increase in interface loading speed by optimizing styles and resources.',
        'Incorporation of Twig for dynamic templates, improving design adaptability across multiple platforms.',
        'Implementation of an efficient workflow using npm, Gulp, Docker, and ddev for development environment management.',
      ],
      technologies: [
        'React',
        'SASS',
        'Storybook',
        'Twig',
        'Drupal',
        'Site Studio',
        'Docker',
      ],
    },
    {
      date: 'Sept 2022 - Sept 2024',
      title: 'Software Developer',
      company: 'Coordinadora de Tanques S.A.S',
      companyUrl: 'https://coorditanques.com',
      location: 'Medellín, Colombia - On-site',
      summary:
        'Development of solutions and automation of critical processes using Node.js, Express.js, and relational databases, improving operational efficiency and system integration.',
      responsibilities: [
        'Implementation of automations for critical processes using Node.js, MongoDB, and RESTful APIs.',
        'Development of solutions to integrate legacy systems with Express.js, Next.js, and SQL Server.',
        'Implementation of new features in internal platforms with Angular and TypeScript.',
        'Query optimization and dynamic report generation.',
      ],
      achievements: [
        '50% automation of manual processes, significantly improving operational productivity and establishing foundations for future RPA implementations.',
        '40% reduction in downtime through preventive maintenance.',
        'SQL query optimization to improve data extraction and Power BI reporting.',
        'Development of interactive dashboards in Power BI integrated with SQL Server, providing visualizations for decision-making.',
      ],
      technologies: [
        'Next.js',
        'Angular',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'SQL Server',
        'Express.js',
        'Power BI',
      ],
    },
  ],
};
