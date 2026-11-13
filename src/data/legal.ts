export type LegalPage = { slug: string; title: string; text: string };

/** Legal pages. Their content is still to be written, so they are kept out of search. */
export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "mentions-legales",
    title: "Mentions légales",
    text: "[À compléter : éditeur du site, directeur de la publication, hébergeur, SIRET, contact.]",
  },
  {
    slug: "cgv",
    title: "Conditions générales de vente",
    text: "[À compléter : conditions générales de vente des prestations Optevia.]",
  },
  {
    slug: "confidentialite",
    title: "Politique de confidentialité",
    text: "[À compléter : données collectées, finalités, durées de conservation, droits et contact.]",
  },
  {
    slug: "cookies",
    title: "Gérer les cookies",
    text: "[À compléter : cookies utilisés, finalités et moyen de modifier son choix.]",
  },
  {
    slug: "accessibilite",
    title: "Accessibilité",
    text: "[À compléter : déclaration d’accessibilité, niveau de conformité et contact.]",
  },
];
