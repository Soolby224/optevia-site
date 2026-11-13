export type ServiceSlug = "etre-choisi" | "gagner-du-temps";

export type Service = {
  slug: ServiceSlug;
  name: string;
  text: string;
  price: string;
};

/** The two services, as summarised on trade and zone pages. */
export const SERVICES: Service[] = [
  {
    slug: "etre-choisi",
    name: "Être choisi",
    text: "Un site qui donne confiance, votre fiche Google au top, sortir en premier dans votre ville, être conseillé par les IA.",
    price: "Site dès 597 € · visibilité dès 60 €/mois",
  },
  {
    slug: "gagner-du-temps",
    name: "Gagner du temps",
    text: "Un SMS quand vous ratez un appel, vos devis relancés, un avis demandé à chaque client satisfait.",
    price: "Dès 150 €/mois",
  },
];

/** Name of the service with the given slug. */
export const serviceName = (slug: ServiceSlug) =>
  SERVICES.find((service) => service.slug === slug)?.name ?? slug;
