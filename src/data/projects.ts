import type { Locale } from '@/i18n';
import { TAGS } from './tags';

interface ProjectEntry {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags: (typeof TAGS)[keyof typeof TAGS][];
  highlights: string[];
}

export const PROJECTS: Record<Locale, ProjectEntry[]> = {
  es: [
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
  ],
  en: [
    {
      title: 'Universidad de los Andes - Ecosistema',
      description:
        'Full development of the Ecosistema Uniandes institutional website, implementing a modular design system with reusable components documented in Storybook.',
      link: 'https://ecosistema.uniandes.edu.co/',
      tags: [TAGS.TWIG, TAGS.SCSS, TAGS.STORYBOOK, TAGS.DRUPAL, TAGS.JAVASCRIPT, TAGS.FIGMA],
      highlights: [
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
    {
      title: 'Admin Dashboard',
      description:
        'Complete admin panel built with Next.js that provides an intuitive interface for data management and real-time statistics visualization.',
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
  ],
};
