import Link from "next/link";

export default function NonTrouvee() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-5 sm:px-8">
      <h1 className="font-display text-4xl font-bold text-sapin">
        Cette page n’existe pas.
      </h1>
      <p className="mt-4 text-lg">
        Le lien est peut-être ancien ou mal recopié.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-corail px-8 text-lg font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sapin sm:w-auto"
      >
        Revenir à l’accueil
      </Link>
    </main>
  );
}
