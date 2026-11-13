export type ArticleTheme = { id: string; label: string };

export type Article = {
  slug: string;
  title: string;
  theme: string;
  minutes: number;
  featured?: boolean;
};

/** Themes of the blog filters, in display order. */
export const ARTICLE_THEMES: ArticleTheme[] = [
  { id: "google", label: "Fiche Google" },
  { id: "local", label: "Référencement local" },
  { id: "ia", label: "IA" },
  { id: "avis", label: "Avis" },
  { id: "site", label: "Site" },
  { id: "temps", label: "Gagner du temps" },
];

/** Blog articles. Detail pages live at `/blog/<slug>`. */
export const ARTICLES: Article[] = [
  {
    slug: "apparaitre-dans-chatgpt-artisan",
    title: "Comment apparaître dans les réponses de ChatGPT quand on est artisan",
    theme: "ia",
    minutes: 8,
    featured: true,
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
