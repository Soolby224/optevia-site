export type Metier = { slug: string; name: string; photo: string };

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
  { slug: "renovation-energetique", name: "Rénovation énergétique", photo: "Une équipe sur un chantier d’isolation" },
  { slug: "pompe-a-chaleur", name: "Pompe à chaleur", photo: "Un installateur devant une unité extérieure" },
  { slug: "isolation", name: "Isolation", photo: "Des combles en cours d’isolation" },
  { slug: "plombier", name: "Plombier", photo: "Un plombier sous un évier" },
  { slug: "chauffagiste", name: "Chauffagiste", photo: "Un chauffagiste devant une chaudière" },
  { slug: "electricien", name: "Électricien", photo: "Un électricien devant un tableau électrique" },
  { slug: "menuisier", name: "Menuisier", photo: "Un menuisier dans son atelier" },
  { slug: "couvreur", name: "Couvreur", photo: "Un couvreur sur un toit" },
  { slug: "macon", name: "Maçon", photo: "Un maçon montant un mur" },
  { slug: "peintre", name: "Peintre", photo: "Un peintre au rouleau dans une pièce" },
  { slug: "carreleur", name: "Carreleur", photo: "Un carreleur posant du carrelage" },
  { slug: "serrurier", name: "Serrurier", photo: "Un serrurier devant une porte" },
];

/** Link to a trade's detail page. */
export const metierHref = (slug: string) => `/metiers/${slug}`;

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
