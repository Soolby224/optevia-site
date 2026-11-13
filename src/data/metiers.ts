export type Metier = {
  slug: string;
  name: string;
  photo: string;
  /** Plural audience, as in « pour les plombiers ». */
  audience: string;
  /** Singular with its article, as in « un plombier ». */
  singular: string;
  /** Opening of the tagline, as in « Plombiers, ». */
  hook: string;
  /** Searches future clients type. */
  searches: string[];
  /** Slugs of the closest trades. */
  related: string[];
  /** Slug of the guide that matters most for this trade. */
  guide: string;
  /** Article themes that matter most for this trade. */
  themes: string[];
};

export type Profile = {
  id: "artisan" | "entreprise";
  label: string;
  hint: string;
  eyebrow: string;
  title: string;
  text: string;
  needs: string[];
  metiers: string[];
};

/** Every trade Optevia works with. Detail pages live at `/metiers/<slug>`. */
export const METIERS: Metier[] = [
  {
    slug: "renovation-energetique",
    name: "Rénovation énergétique",
    photo: "Une équipe sur un chantier d’isolation",
    audience: "entreprises de rénovation énergétique",
    singular: "une entreprise de rénovation énergétique",
    hook: "Entreprises de rénovation,",
    searches: ["rénovation énergétique [Ville]", "artisan RGE près de chez moi", "isolation maison [Ville]", "aides rénovation énergétique"],
    related: ["isolation", "pompe-a-chaleur", "chauffagiste", "menuisier"],
    guide: "ia",
    themes: ["ia", "local"],
  },
  {
    slug: "pompe-a-chaleur",
    name: "Pompe à chaleur",
    photo: "Un installateur devant une unité extérieure",
    audience: "installateurs de pompes à chaleur",
    singular: "un installateur de pompe à chaleur",
    hook: "Installateurs de pompes à chaleur,",
    searches: ["installateur pompe à chaleur [Ville]", "prix pompe à chaleur air-eau", "entretien pompe à chaleur", "installateur PAC RGE"],
    related: ["chauffagiste", "renovation-energetique", "isolation", "electricien"],
    guide: "ia",
    themes: ["ia", "local"],
  },
  {
    slug: "isolation",
    name: "Isolation",
    photo: "Des combles en cours d’isolation",
    audience: "entreprises d’isolation",
    singular: "une entreprise d’isolation",
    hook: "Entreprises d’isolation,",
    searches: ["isolation combles [Ville]", "isolation extérieure prix", "isolation des murs par l’intérieur", "artisan RGE isolation"],
    related: ["renovation-energetique", "pompe-a-chaleur", "couvreur", "menuisier"],
    guide: "ia",
    themes: ["ia", "local"],
  },
  {
    slug: "plombier",
    name: "Plombier",
    photo: "Un plombier sous un évier",
    audience: "plombiers",
    singular: "un plombier",
    hook: "Plombiers,",
    searches: ["plombier [Ville]", "fuite d’eau urgence", "remplacement ballon d’eau chaude", "plombier ouvert le dimanche"],
    related: ["chauffagiste", "serrurier", "electricien", "carreleur"],
    guide: "fiche-google",
    themes: ["google", "avis"],
  },
  {
    slug: "chauffagiste",
    name: "Chauffagiste",
    photo: "Un chauffagiste devant une chaudière",
    audience: "chauffagistes",
    singular: "un chauffagiste",
    hook: "Chauffagistes,",
    searches: ["chauffagiste [Ville]", "entretien chaudière gaz", "panne de chaudière", "remplacement chaudière"],
    related: ["plombier", "pompe-a-chaleur", "electricien", "renovation-energetique"],
    guide: "fiche-google",
    themes: ["google", "avis"],
  },
  {
    slug: "electricien",
    name: "Électricien",
    photo: "Un électricien devant un tableau électrique",
    audience: "électriciens",
    singular: "un électricien",
    hook: "Électriciens,",
    searches: ["électricien [Ville]", "mise aux normes électrique", "panne de courant urgence", "installation borne de recharge"],
    related: ["plombier", "chauffagiste", "serrurier", "pompe-a-chaleur"],
    guide: "fiche-google",
    themes: ["google", "avis"],
  },
  {
    slug: "menuisier",
    name: "Menuisier",
    photo: "Un menuisier dans son atelier",
    audience: "menuisiers",
    singular: "un menuisier",
    hook: "Menuisiers,",
    searches: ["menuisier [Ville]", "changer ses fenêtres prix", "porte d’entrée sur mesure", "dressing sur mesure"],
    related: ["serrurier", "isolation", "peintre", "macon"],
    guide: "site-internet",
    themes: ["site", "local"],
  },
  {
    slug: "couvreur",
    name: "Couvreur",
    photo: "Un couvreur sur un toit",
    audience: "couvreurs",
    singular: "un couvreur",
    hook: "Couvreurs,",
    searches: ["couvreur [Ville]", "fuite de toiture", "réfection de toiture prix", "démoussage toiture"],
    related: ["macon", "isolation", "peintre", "menuisier"],
    guide: "fiche-google",
    themes: ["google", "avis"],
  },
  {
    slug: "macon",
    name: "Maçon",
    photo: "Un maçon montant un mur",
    audience: "maçons",
    singular: "un maçon",
    hook: "Maçons,",
    searches: ["maçon [Ville]", "extension de maison", "mur de clôture", "terrasse béton"],
    related: ["couvreur", "carreleur", "peintre", "menuisier"],
    guide: "site-internet",
    themes: ["site", "local"],
  },
  {
    slug: "peintre",
    name: "Peintre",
    photo: "Un peintre au rouleau dans une pièce",
    audience: "peintres en bâtiment",
    singular: "un peintre en bâtiment",
    hook: "Peintres en bâtiment,",
    searches: ["peintre en bâtiment [Ville]", "ravalement de façade", "peinture appartement prix", "peintre intérieur"],
    related: ["carreleur", "macon", "menuisier", "couvreur"],
    guide: "site-internet",
    themes: ["site", "local"],
  },
  {
    slug: "carreleur",
    name: "Carreleur",
    photo: "Un carreleur posant du carrelage",
    audience: "carreleurs",
    singular: "un carreleur",
    hook: "Carreleurs,",
    searches: ["carreleur [Ville]", "pose carrelage prix au m²", "salle de bain clé en main", "carrelage terrasse"],
    related: ["peintre", "plombier", "macon", "menuisier"],
    guide: "site-internet",
    themes: ["site", "local"],
  },
  {
    slug: "serrurier",
    name: "Serrurier",
    photo: "Un serrurier devant une porte",
    audience: "serruriers",
    singular: "un serrurier",
    hook: "Serruriers,",
    searches: ["serrurier [Ville]", "porte claquée", "changer une serrure", "serrurier urgence nuit"],
    related: ["plombier", "menuisier", "electricien", "chauffagiste"],
    guide: "fiche-google",
    themes: ["google", "avis"],
  },
];

/** Link to a trade's detail page. */
export const metierHref = (slug: string) => `/metiers/${slug}`;

/** Trade with the given slug. */
export const getMetier = (slug: string) => METIERS.find((metier) => metier.slug === slug);

/** The two audiences of the trades page, each with its own list of trades. */
export const PROFILES: Profile[] = [
  {
    id: "artisan",
    label: "Artisan",
    hint: "Seul ou en petite équipe",
    eyebrow: "Seul ou en petite équipe",
    title: "Artisan de l’habitat",
    text: "Vous intervenez chez les particuliers de votre secteur. On fait sonner votre téléphone avec des clients proches de chez vous.",
    needs: [
      "Une fiche Google qui sort en tête dans votre zone",
      "Des avis clients qui donnent envie d’appeler",
      "Plus un appel raté pendant les chantiers",
    ],
    metiers: [
      "plombier",
      "chauffagiste",
      "electricien",
      "menuisier",
      "couvreur",
      "macon",
      "peintre",
      "carreleur",
      "serrurier",
      "pompe-a-chaleur",
    ],
  },
  {
    id: "entreprise",
    label: "Entreprise",
    hint: "Plusieurs équipes ou zones",
    eyebrow: "Plusieurs équipes ou plusieurs zones",
    title: "Entreprise du bâtiment",
    text: "Vous gérez des équipes et des chantiers sur plusieurs villes. On structure votre visibilité zone par zone et on suit vos demandes de devis.",
    needs: [
      "Une page et une fiche par ville ou par agence",
      "Être cité par ChatGPT et les IA",
      "Un suivi clair de toutes vos demandes",
    ],
    metiers: [
      "renovation-energetique",
      "pompe-a-chaleur",
      "isolation",
      "couvreur",
      "macon",
      "menuisier",
      "electricien",
      "chauffagiste",
    ],
  },
];
