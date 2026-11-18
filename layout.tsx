import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const titre = "Retour : le rappel qui fait revenir vos clients";
const description =
  "Retour écrit à vos clients au bon moment, avec une offre de retour simple. Pour les coachs, salles de sport, kinés et tous les pros de la santé et du sport.";

export const metadata: Metadata = {
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    locale: "fr_FR",
    type: "website",
    siteName: "Retour",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="bg-fond font-sans text-encre antialiased">
        {children}
      </body>
    </html>
  );
}
