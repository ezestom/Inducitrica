export const languages: Record<string, { code: string; name: string }> = {
  es: {
    code: "es",
    name: "Es",
  },
  en: {
    code: "en",
    name: "En",
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.contact": "Contact",
  },
} as const;

export const routes = {
  es: {
    inicio: "",
    nosotros: "about",
    contacto: "contact",
  },
  en: {
    home: "",
    about: "about",
    contact: "contact",
  },
};
