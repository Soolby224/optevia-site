import type { ServiceSlug } from "./services.ts";

export type Cas = {
  slug: string;
  /** Sector and city shown above the title. */
  tag: string;
  /** Slug of the client's trade. */
  metier: string;
  /** Services used. */
  services: ServiceSlug[];
  before: string;
  client: string;
  after: string;
  from: string;
  to: string;
  metric: string;
  photo: string;
  description: string;
  kpis: { label: string; from: string; to: string }[];
  story: { title: string; text: string }[];
  quote: string;
};

const story = (done: string) => [
  {
    title: "Au départ",
    text: "[À remplacer : un site daté, une fiche Google avec deux photos, des appels surtout par le bouche-à-oreille.]",
  },
  { title: "Ce qu’on a fait", text: done },
  {
    title: "Ce qui a changé",
    text: "[À remplacer : ce que le client constate au quotidien, en une ou deux phrases.]",
  },
];

/** Case studies. Detail pages live at `/realisations/<slug>`. */
export const CAS: Cas[] = [
  {
    slug: "renovation-energetique-top-3-google-maps",
    tag: "Rénovation énergétique · [Ville]",
    metier: "renovation-energetique",
    services: ["etre-choisi"],
    before: "Comment",
    client: "[Nom du client]",
    after: "est passé de la page 3 au top 3 de Google Maps",
    from: "[XX]/100",
    to: "[XX]/100",
    metric: "Score de visibilité",
    photo: "Pose de pompe à chaleur",
    description:
      "Comment une entreprise de rénovation énergétique est passée de la page 3 au top 3 de Google Maps avec Optevia : point de départ, actions, résultats.",
    kpis: [
      { label: "Score de visibilité", from: "[XX]", to: "[XX]/100" },
      { label: "Google Maps", from: "[page 3]", to: "[top 3]" },
      { label: "Appels depuis la fiche", from: "[XX]", to: "[XX]/mois" },
    ],
    story: story(
      "Nouveau site avec son logo, fiche Google complète, une page par ville couverte, informations identiques partout.",
    ),
    quote: "[Exemple à remplacer : Avant, on nous trouvait par hasard. Aujourd’hui, le téléphone sonne depuis Google.]",
  },
  {
    slug: "plomberie-devis-fiche-google",
    tag: "Plomberie · [Ville]",
    metier: "plombier",
    services: ["etre-choisi", "gagner-du-temps"],
    before: "Comment",
    client: "[Nom du client]",
    after: "reçoit ses demandes de devis depuis sa fiche Google",
    from: "[XX] appels/mois",
    to: "[XX] appels/mois",
    metric: "Appels depuis la fiche",
    photo: "Plombier en intervention chez un client",
    description:
      "Comment un plombier reçoit ses demandes de devis depuis sa fiche Google avec Optevia : point de départ, actions, résultats.",
    kpis: [
      { label: "Appels depuis la fiche", from: "[XX]", to: "[XX]/mois" },
      { label: "Demandes de devis", from: "[XX]", to: "[XX]/mois" },
      { label: "Avis Google", from: "[XX]", to: "[XX]" },
    ],
    story: story("[À rédiger : les actions menées pour ce client.]"),
    quote: "[À rédiger : le témoignage du client.]",
  },
  {
    slug: "electricite-recommande-par-les-ia",
    tag: "Électricité · [Ville]",
    metier: "electricien",
    services: ["etre-choisi"],
    before: "Comment",
    client: "[Nom du client]",
    after: "est devenu recommandé par les IA dans sa ville",
    from: "[XX]/100",
    to: "[XX]/100",
    metric: "Score de visibilité",
    photo: "Électricien devant son camion",
    description:
      "Comment un électricien est devenu recommandé par les IA dans sa ville avec Optevia : point de départ, actions, résultats.",
    kpis: [
      { label: "Score de visibilité", from: "[XX]", to: "[XX]/100" },
      { label: "Mentions dans les IA", from: "[XX]", to: "[XX]/mois" },
      { label: "Appels depuis la fiche", from: "[XX]", to: "[XX]/mois" },
    ],
    story: story("[À rédiger : les actions menées pour ce client.]"),
    quote: "[À rédiger : le témoignage du client.]",
  },
];

/** Link to a case study's detail page. */
export const casHref = (slug: string) => `/realisations/${slug}`;

/** Full title of a case study, as plain text. */
export const casTitle = (cas: Cas) => `${cas.before} ${cas.client} ${cas.after}`;
