"use client";

import Link from "next/link";

export default function Erreur({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-5 sm:px-8">
      <h1 className="font-display text-4xl font-bold text-sapin">
        Un problème est survenu.
      </h1>
      <p className="mt-4 text-lg">
        La page n’a pas pu s’afficher. Essayez de la recharger, ou revenez à
        l’accueil.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-corail px-8 text-lg font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sapin sm:w-auto"
      >
        Réessayer
      </button>
      <Link href="/" className="mt-5 text-lg font-bold text-sapin underline">
        Revenir à l’accueil
      </Link>
    </main>
  );
}
