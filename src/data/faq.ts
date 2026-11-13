export type FaqItem = { question: string; answer: string };

export type FaqTheme = { id: string; title: string; items: FaqItem[] };

/** Questions of the FAQ page, grouped by theme. */
export const FAQ_THEMES: FaqTheme[] = [
  {
    id: "audit",
    title: "L’audit gratuit",
    items: [
      {
        question: "Comment se passe l’audit gratuit ?",
        answer:
          "Vous nous donnez votre métier et votre ville. On regarde votre présence sur Google, sur Maps, dans les IA et sur votre site. Vous recevez votre score de visibilité sur 100 et les trois choses à corriger en premier.",
      },
      {
        question: "L’audit est-il vraiment gratuit ?",
        answer:
          "Oui. Il ne vous engage à rien, et vous gardez le rapport même si vous ne travaillez pas avec nous.",
      },
      {
        question: "Combien de temps faut-il pour recevoir mon audit ?",
        answer: "[À valider : délai de réponse, par exemple sous 48 h.]",
      },
      {
        question: "Qu’est-ce que le score de visibilité sur 100 ?",
        answer:
          "Une note qui mesure à quel point on vous trouve et on vous choisit en ligne, calculée sur 6 critères : [noms des 6 piliers à définir]. Elle sert de point de départ, puis de repère chaque mois.",
      },
    ],
  },
  {
    id: "choisi",
    title: "Être choisi : site, Google et IA",
    items: [
      {
        question: "Que comprend le service Être choisi ?",
        answer:
          "La création de votre site internet avec votre identité visuelle (logo, couleurs), l’optimisation de votre fiche Google, le référencement dans votre ville et votre visibilité dans les réponses des IA comme ChatGPT.",
      },
      {
        question: "Combien coûte le site internet ?",
        answer:
          "À partir de 597 €, payé une seule fois. Le logo et les couleurs sont compris. Il n’y a aucun abonnement pour le site.",
      },
      {
        question: "Le site m’appartient-il ?",
        answer: "Oui, à 100 %. Vous le gardez même si vous arrêtez de travailler avec nous.",
      },
      {
        question: "J’ai déjà un site, faut-il le refaire ?",
        answer:
          "Pas forcément. L’audit dit si votre site actuel peut faire l’affaire. Si oui, vous pouvez prendre uniquement la visibilité.",
      },
      {
        question: "Combien coûte la visibilité sur Google et dans les IA ?",
        answer:
          "À partir de 60 € par mois. Ça comprend votre fiche Google suivie et animée, le référencement dans votre ville, votre visibilité dans les IA et un compte rendu chaque mois.",
      },
      {
        question: "C’est quoi, être conseillé par ChatGPT ?",
        answer:
          "De plus en plus de gens demandent à ChatGPT, Gemini ou Perplexity quel artisan appeler. On présente vos informations et vos contenus pour que ces outils vous trouvent et vous recommandent.",
      },
      {
        question: "En combien de temps le site est-il en ligne ?",
        answer: "[À valider : délai moyen, par exemple environ trois semaines après l’audit.]",
      },
      {
        question: "Combien de temps avant d’avoir plus d’appels ?",
        answer:
          "Ça dépend de votre ville, de votre métier et de la concurrence. Votre audit donne le point de départ, et le compte rendu mensuel montre ce qui bouge.",
      },
    ],
  },
  {
    id: "temps",
    title: "Gagner du temps et e‑réputation",
    items: [
      {
        question: "Que fait l’outil Gagner du temps ?",
        answer:
          "Il envoie un SMS quand vous ratez un appel, répond tout de suite aux demandes de devis, relance vos devis sans réponse, demande un avis Google à vos clients satisfaits, vous alerte en cas d’avis négatif et regroupe tous vos messages au même endroit.",
      },
      {
        question: "Combien ça coûte ?",
        answer: "150 € par mois, sans frais de mise en service et sans engagement.",
      },
      {
        question: "C’est fait pour moi ?",
        answer:
          "Oui si vous recevez déjà des demandes chaque semaine. Si vous démarrez, commencez par Être choisi : on ajoutera l’outil quand le téléphone sonnera plus souvent.",
      },
      {
        question: "Qui gère l’outil au quotidien ?",
        answer:
          "On l’installe, on écrit les messages avec vos mots et on le fait évoluer. Vous, vous l’utilisez sur votre téléphone : lire les messages, rappeler, suivre vos devis.",
      },
      {
        question: "Mes clients verront-ils que c’est automatique ?",
        answer:
          "Les messages sont écrits avec vos mots, signés de votre nom et envoyés au bon moment. Ils ressemblent à ce que vous auriez écrit si vous aviez eu le temps.",
      },
      {
        question: "Dois-je changer de numéro de téléphone ?",
        answer:
          "[À valider : fonctionnement de la détection des appels manqués et numéro utilisé.]",
      },
    ],
  },
  {
    id: "prix",
    title: "Prix et engagement",
    items: [
      {
        question: "Qu’est-ce que le pack ?",
        answer:
          "La visibilité et Gagner du temps ensemble, pour 197 € par mois au lieu de 210 €, sans engagement. Le site reste facturé à part, une seule fois.",
      },
      {
        question: "Suis-je engagé sur une longue durée ?",
        answer:
          "Non. Vous restez parce que les résultats sont là, pas parce qu’un contrat vous y oblige. [À valider : durée minimale ou préavis éventuel.]",
      },
      {
        question: "Les prix sont-ils HT ou TTC ?",
        answer: "[À valider : prix affichés HT ou TTC.]",
      },
      {
        question: "Comment se passe le paiement ?",
        answer: "[À valider : moyens de paiement et fréquence de facturation.]",
      },
    ],
  },
  {
    id: "optevia",
    title: "Optevia",
    items: [
      {
        question: "Qui est derrière Optevia ?",
        answer: "[À compléter : présentation du fondateur et de l’équipe.]",
      },
      {
        question: "Avec quels métiers travaillez-vous ?",
        answer:
          "Les artisans et entreprises de l’habitat : rénovation énergétique, pompes à chaleur, plomberie, électricité, chauffage, menuiserie, couverture.",
      },
      {
        question: "Où intervenez-vous ?",
        answer: "[À valider : zone couverte, par exemple partout en France, à distance.]",
      },
      {
        question: "Comment vous contacter ?",
        answer:
          "Par téléphone au [00 00 00 00 00], ou en demandant votre audit gratuit en ligne. On vous rappelle.",
      },
    ],
  },
];
