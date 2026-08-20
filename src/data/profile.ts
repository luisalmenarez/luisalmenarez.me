import { CREDENTIALS } from './credentials';
import type { Locale } from '@/i18n';

/** Kept apart so the number stays the datum and the URL stays a detail. */
const PHONE = '573013897707';

/**
 * Identity data for the person behind the site.
 *
 * Consumed by the structured-data block in Layout.astro and by Footer.astro.
 * The same values are still hardcoded in Aside.astro and AboutMe.astro (social
 * URLs, avatar); those components can import from here whenever their owner
 * decides to, which would leave a single source of truth.
 */
export const PROFILE = {
  name: 'Luis Almenarez',
  alternateName: 'Lucho',
  jobTitle: 'Full Stack Developer',
  url: 'https://luisalmenarez.me',
  avatar: 'https://avatars.githubusercontent.com/u/125621759?v=4&s=512',
  email: 'luisalmenarez0428@gmail.com',
  phone: PHONE,
  social: {
    linkedin: 'https://linkedin.com/in/luisalmenarez',
    github: 'https://github.com/luisalmenarez',
    whatsapp: `https://api.whatsapp.com/send?phone=${PHONE}`,
  },
  address: {
    locality: 'Rionegro',
    region: 'Antioquia',
    country: 'CO',
  },
  worksFor: {
    name: 'PrevalentWare S.A.S',
    url: 'https://prevalentware.com',
  },
  knowsLanguage: ['es', 'en'],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Astro',
    'n8n',
    'AWS',
    'PostgreSQL',
    'SQL Server',
    'TailwindCSS',
  ],
} as const;

interface PersonSchemaInput {
  lang: Locale;
  description: string;
}

/**
 * schema.org Person, emitted as JSON-LD so search engines can tie the site to
 * a single entity instead of inferring one from the copy.
 *
 * `alumniOf` is derived from CREDENTIALS rather than restated here, so adding a
 * degree updates both the rendered section and the structured data at once.
 */
export function buildPersonSchema({ lang, description }: PersonSchemaInput) {
  const alumniOf = CREDENTIALS[lang].education.map((entry) => ({
    '@type': 'EducationalOrganization',
    name: entry.institution,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    alternateName: PROFILE.alternateName,
    jobTitle: PROFILE.jobTitle,
    description,
    url: PROFILE.url,
    image: PROFILE.avatar,
    email: `mailto:${PROFILE.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PROFILE.address.locality,
      addressRegion: PROFILE.address.region,
      addressCountry: PROFILE.address.country,
    },
    worksFor: {
      '@type': 'Organization',
      name: PROFILE.worksFor.name,
      url: PROFILE.worksFor.url,
    },
    alumniOf,
    knowsLanguage: [...PROFILE.knowsLanguage],
    knowsAbout: [...PROFILE.knowsAbout],
    sameAs: [PROFILE.social.linkedin, PROFILE.social.github],
  };
}
