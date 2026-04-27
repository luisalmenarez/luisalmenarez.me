import type { Locale } from '@/i18n';

interface EducationEntry {
  title: string;
  institution: string;
  period: string;
}

interface CertificationEntry {
  name: string;
}

interface LanguageEntry {
  name: string;
  level: string;
}

interface CredentialsEntry {
  education: EducationEntry[];
  certifications: CertificationEntry[];
  languages: LanguageEntry[];
}

export const CREDENTIALS: Record<Locale, CredentialsEntry> = {
  es: {
    education: [
      {
        title: 'Tecnólogo en Análisis y Desarrollo de Software',
        institution: 'Servicio Nacional de Aprendizaje (SENA)',
        period: '2023 – 2025',
      },
      {
        title: 'Carrera de Desarrollo Frontend React',
        institution: 'Coderhouse',
        period: 'Jun 2023 – Dic 2023',
      },
    ],
    certifications: [
      { name: 'JavaScript TOTAL' },
      { name: 'Carrera de Desarrollo Frontend (Coderhouse)' },
      { name: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap' },
      { name: 'Curso de React.js' },
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B1 Intermedio' },
    ],
  },
  en: {
    education: [
      {
        title: 'Software Analysis & Development Technologist',
        institution: 'Servicio Nacional de Aprendizaje (SENA)',
        period: '2023 – 2025',
      },
      {
        title: 'Frontend Development with React',
        institution: 'Coderhouse',
        period: 'Jun 2023 – Dec 2023',
      },
    ],
    certifications: [
      { name: 'JavaScript TOTAL' },
      { name: 'Frontend Development Career (Coderhouse)' },
      { name: 'CSS Master: Responsive, SASS, Flexbox, Grid & Bootstrap' },
      { name: 'React.js Course' },
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B1 Intermediate' },
    ],
  },
};
