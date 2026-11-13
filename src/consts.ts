/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Optevia";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Optevia rend les artisans de l’habitat visibles sur Google, Google Maps et ChatGPT : site internet dès 597 €, visibilité dès 60 €/mois, automatisations dès 150 €/mois. Audit gratuit.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://optevia.fr";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "fr-FR";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/style-guide",
  "/example-components",
  "/mentions-legales",
  "/cgv",
  "/confidentialite",
  "/cookies",
  "/accessibilite",
];

/** Contact links. Replace the placeholders with the real numbers. */
export const CONTACT = {
  whatsapp: "https://wa.me/33000000000",
  phone: "[+33 0 00 00 00 00]",
  address: "[Adresse]",
  siret: "[SIRET]",
};

/** Main navigation, shared by the nav bar and the mobile menu. */
export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Métiers", href: "/metiers" },
  { label: "Ressources", href: "/guides" },
  { label: "FAQ", href: "/faq" },
];
