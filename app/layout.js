import {Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LoaderProvider } from "@/context/Loader";
import Loader from "@/components/load";
import ContentWrapper from "@/components/ContentWrapper";

const MontserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
export const metadata = {
  title: "Assurance Décès & Assistance Obsèques en Belgique | Assurance Décès Plus",
  description:
    "Un accompagnement humain et financier pour protéger vos proches lors des moments difficiles. Vérifiez votre éligibilité gratuitement.",
  openGraph: {
    title: "Protection Décès & Maladies Graves – Assurance Décès Plus",
    description:
      "Des solutions simples pour soulager vos proches : assistance, accompagnement administratif et soutien financier en Belgique.",
    url: "https://assurancedecesplus.be",
    siteName: "Assurance Décès Plus",
    locale: "fr_BE",
    type: "website",
    icons: {
    icon: "/favicon.ico",       
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",     
  },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${MontserratFont.variable} antialiased`}
      >
        <LoaderProvider>
        <Loader />
        <ContentWrapper>
           <Header />
        {children}
        <Footer />
        </ContentWrapper>
        </LoaderProvider>
       
      </body>
    </html>
  );
}
