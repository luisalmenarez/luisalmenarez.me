import { TAGS } from './tags';

export const PROJECTS = [
    {
      title: 'Universidad de los Andes - Secretaría General',
      description:
        'Sistema de gestión académica desarrollado con Next.js y Prisma, que permite a los estudiantes gestionar su información académica de manera eficiente.',
      link: 'https://www.uniandes.edu.co/es/la-universidad/gobierno-universitario',
      tags: [TAGS.TWIG, TAGS.SCSS, TAGS.STORYBOOK, TAGS.FIGMA, TAGS.JAVASCRIPT],
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