export type ArticleTheme = {
  id: string;
  label: string;
  /** Slug of the guide covering the theme, if any. */
  guide?: string;
  /** Service page the theme belongs to. */
  service: "etre-choisi" | "gagner-du-temps";
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type ArticleSection = { id: string; title: string; blocks: ArticleBlock[] };

export type Article = {
  slug: string;
  title: string;
  theme: string;
  minutes: number;
  featured?: boolean;
  /** Text under the title. Also the meta description. */
  lead?: string;
  /** Slug of the trade the article speaks to most, if any. */
  metier?: string;
  /** Key points shown before the body. */
  summary?: string[];
  /** Body. Articles without one show a placeholder outline. */
  sections?: ArticleSection[];
};

/** Themes of the blog filters, in display order. */
export const ARTICLE_THEMES: ArticleTheme[] = [
  { id: "google", label: "Fiche Google", guide: "fiche-google", service: "etre-choisi" },
  { id: "local", label: "Référencement local", guide: "referencement-local", service: "etre-choisi" },
  { id: "ia", label: "IA", guide: "ia", service: "etre-choisi" },
  { id: "avis", label: "Avis", guide: "avis-clients", service: "gagner-du-temps" },
  { id: "site", label: "Site", guide: "site-internet", service: "etre-choisi" },
  { id: "temps", label: "Gagner du temps", service: "gagner-du-temps" },
];

/** Blog articles. Detail pages live at `/blog/<slug>`. */
export const ARTICLES: Article[] = [
  {
    slug: "apparaitre-dans-chatgpt-artisan",
    title: "Comment apparaître dans les réponses de ChatGPT quand on est artisan",
    theme: "ia",
    minutes: 8,
    featured: true,
    lead: "Les IA recommandent les artisans qu’elles comprennent et qu’elles retrouvent partout. Voici quoi faire, dans l’ordre.",
    metier: "plombier",
    summary: [
      "Une IA recommande un artisan quand ses informations sont claires et identiques partout.",
      "Votre fiche Google et votre site sont ses premières sources.",
      "Les avis et les mentions sur d’autres sites font la différence.",
    ],
    sections: [
      {
        id: "lit",
        title: "Ce que lit une IA",
        blocks: [
          {
            type: "p",
            text: "Quand quelqu’un demande « un bon plombier à [Ville] », l’IA cherche des sources fiables qui disent la même chose : votre nom, votre métier, votre zone, vos avis. Si ces informations se contredisent, elle passe à quelqu’un d’autre.",
          },
        ],
      },
      {
        id: "fiche",
        title: "Votre fiche Google d’abord",
        blocks: [
          {
            type: "p",
            text: "C’est la source la plus consultée pour une entreprise locale. Trois réglages comptent plus que les autres :",
          },
          {
            type: "ul",
            items: [
              "la bonne catégorie principale, celle de votre vrai métier ;",
              "vos services et vos villes, écrits en toutes lettres ;",
              "des photos de chantiers récentes, publiées régulièrement.",
            ],
          },
        ],
      },
      {
        id: "questions",
        title: "Répondre aux vraies questions",
        blocks: [
          {
            type: "p",
            text: "Les IA reprennent volontiers une réponse courte et nette. Ajoutez sur votre site une page de questions : prix, délais, zone, urgences. Une question par titre, une réponse en deux phrases.",
          },
          {
            type: "quote",
            text: "Écrivez comme vous répondez au téléphone. C’est exactement ce que l’IA cherche.",
          },
        ],
      },
      {
        id: "ailleurs",
        title: "Être cité ailleurs",
        blocks: [
          {
            type: "p",
            text: "Annuaires professionnels, presse locale, fournisseurs, associations : chaque mention cohérente renforce la confiance de l’IA. Vérifiez que votre nom, votre adresse et votre téléphone y sont identiques.",
          },
        ],
      },
    ],
  },
  {
    slug: "fiche-google-10-reglages",
    title: "Fiche Google : les 10 réglages que la plupart des artisans oublient",
    theme: "google",
    minutes: 6,
  },
  {
    slug: "obtenir-plus-avis-google",
    title: "Obtenir plus d’avis Google, sans jamais les acheter",
    theme: "avis",
    minutes: 5,
  },
  {
    slug: "une-page-par-ville",
    title: "Faut-il une page par ville sur son site ?",
    theme: "local",
    minutes: 4,
  },
  {
    slug: "site-artisan-donner-envie-appeler",
    title: "Ce qu’un site d’artisan doit montrer pour donner envie d’appeler",
    theme: "site",
    minutes: 5,
  },
  {
    slug: "cout-appels-manques",
    title: "Appels manqués : combien ils vous coûtent vraiment",
    theme: "temps",
    minutes: 4,
  },
  {
    slug: "comment-ia-choisissent-artisan",
    title: "Comment les IA choisissent l’artisan qu’elles recommandent",
    theme: "ia",
    minutes: 6,
  },
  {
    slug: "repondre-avis-negatif",
    title: "Répondre à un avis négatif : ce qu’il faut écrire, et ce qu’il faut éviter",
    theme: "avis",
    minutes: 5,
  },
  {
    slug: "photos-chantier-fiche-google",
    title: "Photos de chantier : lesquelles publier sur votre fiche Google",
    theme: "google",
    minutes: 3,
  },
];

/** Link to an article's detail page. */
export const articleHref = (slug: string) => `/blog/${slug}`;

/** Label of a theme id. */
export const themeLabel = (id: string) =>
  ARTICLE_THEMES.find((theme) => theme.id === id)?.label ?? id;

/** Theme with the given id. */
export const getTheme = (id: string) => ARTICLE_THEMES.find((theme) => theme.id === id);

/** Outline shown while an article's body is not written yet. */
export const PLACEHOLDER_SECTIONS: ArticleSection[] = [
  {
    id: "constat",
    title: "Le constat",
    blocks: [{ type: "p", text: "[À rédiger : le problème, vu du côté de l’artisan.]" }],
  },
  {
    id: "methode",
    title: "Ce qu’il faut faire",
    blocks: [{ type: "p", text: "[À rédiger : les étapes, dans l’ordre.]" }],
  },
  {
    id: "erreurs",
    title: "Les erreurs à éviter",
    blocks: [{ type: "p", text: "[À rédiger : les deux ou trois pièges les plus courants.]" }],
  },
];

/** Other articles to read next: same theme first, then the rest. */
export const relatedArticles = (article: Article, limit = 3) =>
  [
    ...ARTICLES.filter((other) => other.slug !== article.slug && other.theme === article.theme),
    ...ARTICLES.filter((other) => other.slug !== article.slug && other.theme !== article.theme),
  ].slice(0, limit);
