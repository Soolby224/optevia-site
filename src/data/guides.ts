export type GuideChapter = {
  id: string;
  title: string;
  text: string;
  /** Checklist under the text. */
  checks?: string[];
  /** Action called out at the end of the chapter. */
  action?: string;
};

export type Guide = {
  slug: string;
  /** Short name, used in lists. */
  title: string;
  /** Shortest name, used in the breadcrumb. */
  label: string;
  /** Full page heading. */
  heading: string;
  /** One-line summary, used in lists. */
  text: string;
  /** Text under the page heading. */
  lead: string;
  minutes: number;
  /** Article theme the guide covers. */
  theme: string;
  /** Service page the guide belongs to. */
  service: "etre-choisi" | "gagner-du-temps";
  chapters: GuideChapter[];
};

const todo = (id: string, title: string): GuideChapter => ({
  id,
  title,
  text: "[À rédiger.]",
});

/** Guides. Detail pages live at `/guides/<slug>`. */
export const GUIDES: Guide[] = [
  {
    slug: "fiche-google",
    title: "La fiche Google des artisans",
    label: "Fiche Google",
    heading: "La fiche Google des artisans : le guide complet",
    text: "Tout régler, de la catégorie aux photos, pour sortir en premier sur Maps.",
    lead: "Cinq réglages, dans l’ordre, pour sortir en premier sur Google Maps dans votre ville.",
    minutes: 20,
    theme: "google",
    service: "etre-choisi",
    chapters: [
      {
        id: "categorie",
        title: "La bonne catégorie",
        text: "Google classe d’abord votre fiche selon sa catégorie principale. Si elle ne correspond pas à votre métier, rien d’autre ne compensera.",
        checks: [
          "Catégorie principale = votre vrai métier",
          "Deux ou trois catégories secondaires, pas plus",
          "Nom de l’entreprise sans mots-clés ajoutés",
        ],
      },
      {
        id: "infos",
        title: "Services, zones, horaires",
        text: "Plus votre fiche est précise, plus elle apparaît sur des recherches précises. Écrivez vos services comme vos clients les cherchent.",
        checks: [
          "Chaque service listé avec une phrase",
          "Toutes les villes où vous intervenez",
          "Horaires à jour, y compris jours fériés",
        ],
        action: "Comparez votre fiche à celle des trois premiers de votre ville.",
      },
      todo("photos", "Les photos"),
      todo("avis", "Les avis"),
      todo("suivi", "Le suivi"),
    ],
  },
  {
    slug: "referencement-local",
    title: "Être trouvé dans sa ville",
    label: "Référencement local",
    heading: "Être trouvé dans sa ville : le guide du référencement local",
    text: "Le référencement local, étape par étape : pages, mots, annuaires.",
    lead: "Le référencement local, étape par étape : les pages, les mots et les annuaires qui comptent.",
    minutes: 25,
    theme: "local",
    service: "etre-choisi",
    chapters: [
      todo("pages", "Une page par métier et par ville"),
      todo("mots", "Les mots que tapent vos clients"),
      todo("annuaires", "Les annuaires"),
      todo("suivi", "Le suivi"),
    ],
  },
  {
    slug: "ia",
    title: "Être recommandé par les IA",
    label: "IA",
    heading: "Être recommandé par les IA : le guide pour les artisans",
    text: "Ce que regardent ChatGPT, Gemini et Perplexity, et comment y apparaître.",
    lead: "Ce que regardent ChatGPT, Gemini et Perplexity pour recommander un artisan, et comment y apparaître.",
    minutes: 18,
    theme: "ia",
    service: "etre-choisi",
    chapters: [
      todo("sources", "Ce que lisent les IA"),
      todo("coherence", "Des informations identiques partout"),
      todo("questions", "Répondre aux vraies questions"),
      todo("mentions", "Être cité ailleurs"),
    ],
  },
  {
    slug: "avis-clients",
    title: "Les avis clients",
    label: "Avis clients",
    heading: "Les avis clients : en obtenir plus et bien y répondre",
    text: "En obtenir plus, y répondre, gérer les mauvais sans s’énerver.",
    lead: "En obtenir plus, y répondre, et gérer les mauvais sans s’énerver.",
    minutes: 15,
    theme: "avis",
    service: "gagner-du-temps",
    chapters: [
      todo("demander", "Demander au bon moment"),
      todo("repondre", "Répondre à chaque avis"),
      todo("negatifs", "Gérer un avis négatif"),
    ],
  },
  {
    slug: "site-internet",
    title: "Le site qui fait appeler",
    label: "Site internet",
    heading: "Le site qui fait appeler : le guide du site d’artisan",
    text: "Les pages, les photos et les boutons qui transforment une visite en appel.",
    lead: "Les pages, les photos et les boutons qui transforment une visite en appel.",
    minutes: 22,
    theme: "site",
    service: "etre-choisi",
    chapters: [
      todo("pages", "Les pages indispensables"),
      todo("photos", "Les photos"),
      todo("boutons", "Les boutons d’appel"),
      todo("confiance", "Les preuves de confiance"),
    ],
  },
];

/** Link to a guide's detail page. */
export const guideHref = (slug: string) => `/guides/${slug}`;

/** Guide with the given slug. */
export const getGuide = (slug: string) => GUIDES.find((guide) => guide.slug === slug);
