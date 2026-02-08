import { ui } from './ui';

export const defaultLocale = 'es' as const;
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)['es']): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}
