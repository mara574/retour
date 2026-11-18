const benefices = [
  {
    titre: "Le contact est pris au moment du paiement.",
    texte:
      "Votre client donne son numéro ou son email au comptoir. Rien à saisir après coup.",
  },
  {
    titre: "Le rappel part tout seul, au bon moment.",
    texte:
      "Vous choisissez le délai qui correspond à votre prestation, par exemple trois semaines pour un kiné. Retour attend, puis écrit au client.",
  },
  {
    titre: "Vous voyez ce que ça rapporte.",
    texte:
      "Combien de clients sont revenus, et combien d’euros ils ont dépensés grâce au rappel.",
  },
];

export default function Accueil() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-5 pb-10 pt-6 sm:px-8">
      <header>
        <p className="font-display text-2xl font-bold text-sapin">Retour</p>
      </header>

      <main className="flex-1">
        <section className="pt-12 sm:pt-20">
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] text-sapin sm:text-6xl">
            Vos clients ne vous quittent pas. Ils oublient de revenir.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed">
            Retour écrit à chaque client au bon moment, avec une offre de retour
            simple. Vous ne tenez aucun fichier et vous ne relancez personne.
          </p>

          <div className="mt-10">
            <div
              className="flex gap-3"
              role="img"
              aria-label="Une carte de fidélité avec cinq tampons et une sixième case restée vide"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="size-11 rounded-full bg-sapin" />
              ))}
              <span className="size-11 rounded-full border-2 border-dashed border-corail" />
            </div>
            <p className="mt-3 text-sm text-brume">
              Cinq séances, puis plus rien. Le sixième tampon ne vient pas tout
              seul.
            </p>
          </div>

          <a
            href="#acces"
            className="mt-10 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-corail px-8 text-lg font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sapin sm:w-auto"
          >
            Commencer, c’est gratuit
          </a>
        </section>

        <section className="mt-20 border-t border-sapin/20 pt-10">
          <h2 className="font-display text-3xl font-bold text-sapin">
            Ce que coûte l’oubli
          </h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed">
            Exemple : 20 clients qui oublient de revenir, à 50&nbsp;€ la séance,
            ce sont 1&nbsp;000&nbsp;€ qui ne rentrent pas ce mois-ci. Et vous ne
            le voyez pas, parce que personne n’est parti fâché.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-sapin">
            Ce que Retour fait pour vous
          </h2>
          <ul className="mt-6 divide-y divide-sapin/20 border-y border-sapin/20">
            {benefices.map((b) => (
              <li key={b.titre} className="py-5">
                <p className="text-lg font-bold text-sapin">{b.titre}</p>
                <p className="mt-1 max-w-prose leading-relaxed">{b.texte}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="acces" className="mt-16 scroll-mt-6 bg-sapin p-6 text-fond">
          <h2 className="font-display text-3xl font-bold">
            Retour ouvre très bientôt
          </h2>
          <p className="mt-3 max-w-prose leading-relaxed">
            Les premiers professionnels de la santé et du sport pourront bientôt
            s’inscrire ici.
          </p>
        </section>
      </main>

      <footer className="mt-16 text-sm text-brume">
        <p>Retour</p>
      </footer>
    </div>
  );
}
