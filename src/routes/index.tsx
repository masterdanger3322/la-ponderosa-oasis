import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Accommodations } from "@/components/site/Accommodations";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Faq, FAQS } from "@/components/site/Faq";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ADDRESS, PHONE_TEL } from "@/lib/site";

const TITLE = "La Ponderosa | Hotel, cabañas y camping en Fortín de Santa Rosa";
const DESCRIPTION =
  "Hotel, cabañas y camping en Fortín de Santa Rosa, Canelones. Piscina, amplios espacios verdes y a minutos de la playa. Ideal para familias y grupos. Reservá por WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hotel en Fortín de Santa Rosa, hotel Canelones, camping Canelones, alojamiento Costa de Oro, hotel con piscina Uruguay, cabañas Canelones, vacaciones Costa de Oro, hotel cerca de Atlántida",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "es_UY" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "La Ponderosa",
          description: DESCRIPTION,
          telephone: PHONE_TEL,
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS,
            addressLocality: "Fortín de Santa Rosa",
            addressRegion: "Canelones",
            addressCountry: "UY",
          },
          amenityFeature: [
            "Piscina al aire libre",
            "Parrilleros",
            "Wi-Fi",
            "Estacionamiento",
            "Juegos para niños",
          ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.0",
            reviewCount: "799",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Amenities />
        <Gallery />
        <Reviews />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}
