import { TAGS } from './tags';

export const PROJECTS = [
    {
      title: 'Universidad de los Andes - Ecosistema',
      description:
      'Desarrollo completo del sitio web institucional Ecosistema Uniandes, implementando un sistema de diseño modular con componentes reutilizables documentados en Storybook.',
      link: 'https://ecosistema.uniandes.edu.co/',
        tags: [TAGS.TWIG, TAGS.SCSS, TAGS.STORYBOOK, TAGS.DRUPAL, TAGS.JAVASCRIPT, TAGS.FIGMA],
      highlights: [
        'Implementación completa de sistema de diseño con componentes modulares',
        'Desarrollo e implementación de componentes reutilizables y escalables en Storybook, incluyendo variantes y temas claro/oscuro',
        'Creación de menú sticky con comportamiento dinámico al scroll',
        'Implementación de componentes con alto grado de accesibilidad y sistemas de grids responsive',
        'Componentes y buscadores con filtros y estados interactivos',
        'Documentación técnica completa en Storybook',
        'Arquitectura BEM con design tokens de Site Studio',
        'Accesibilidad WCAG implementada en todos los componentes',
      ],
    },
    {
      title: 'Dashboard Administrativo',
      description:
        'Panel administrativo completo desarrollado con Next.js que ofrece una interfaz intuitiva para la gestión de datos y visualización de estadísticas en tiempo real.',
      link: 'https://crud-dataviewer.vercel.app/',
      github: 'https://github.com/luisalmenarez/Dashboard',
      tags: [
        TAGS.NEXTJS,
        TAGS.TAILWINDCSS,
        TAGS.CLERK,
        TAGS.PRISMA,
        TAGS.RECHARTS,
      ],
      highlights: [
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
    },
  ];