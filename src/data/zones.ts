export type Zone = {
  slug: string;
  name: string;
  /** Department number. */
  code: string;
  /** Name with its preposition, as in « dans les Yvelines ». */
  where: string;
};

/** Areas covered: Paris and the seven other departments of Île-de-France. */
export const ZONES: Zone[] = [
  { slug: "paris", name: "Paris", code: "75", where: "à Paris" },
  { slug: "hauts-de-seine", name: "Hauts-de-Seine", code: "92", where: "dans les Hauts-de-Seine" },
  { slug: "seine-saint-denis", name: "Seine-Saint-Denis", code: "93", where: "en Seine-Saint-Denis" },
  { slug: "val-de-marne", name: "Val-de-Marne", code: "94", where: "dans le Val-de-Marne" },
  { slug: "yvelines", name: "Yvelines", code: "78", where: "dans les Yvelines" },
  { slug: "essonne", name: "Essonne", code: "91", where: "dans l’Essonne" },
  { slug: "val-d-oise", name: "Val-d’Oise", code: "95", where: "dans le Val-d’Oise" },
  { slug: "seine-et-marne", name: "Seine-et-Marne", code: "77", where: "en Seine-et-Marne" },
];

/** Link to a zone's page. */
export const zoneHref = (slug: string) => `/zones/${slug}`;

/** Zone linked from trade pages. */
export const MAIN_ZONE = ZONES[0];
