import { useState } from "react";
import { Users, Check, ChevronLeft, ChevronRight } from "lucide-react";
import roomsImg from "@/assets/rooms.jpg";
import cabinsImg from "@/assets/cabins.jpg";
import campingImg from "@/assets/camping.jpg";
import poolImg from "@/assets/pool.jpg";
import greenImg from "@/assets/green.jpg";
import heroImg from "@/assets/hero.jpg";
import { BookingCTA } from "./BookingCTA";
import type { BookingIntent } from "@/lib/site";

type Stay = {
  slug: NonNullable<BookingIntent["stay"]>;
  title: string;
  capacity: string;
  description: string;
  features: string[];
  gallery: { src: string; alt: string }[];
};

const stays: Stay[] = [
  {
    slug: "hotel",
    title: "Habitaciones de hotel",
    capacity: "2 a 4 personas",
    description:
      "Habitaciones cálidas con vista al parque, ideales para escapadas de pareja o fin de semana en familia sin preocuparse por nada.",
    features: ["Baño privado", "Ropa de cama y toallas", "Wi-Fi", "Desayuno disponible", "Acceso a piscina"],
    gallery: [
      { src: roomsImg, alt: "Habitación de hotel con vista al parque" },
      { src: poolImg, alt: "Piscina al aire libre del complejo" },
      { src: greenImg, alt: "Parque arbolado del complejo" },
    ],
  },
  {
    slug: "cabins",
    title: "Cabañas",
    capacity: "2 a 6 personas",
    description:
      "Cabañas de madera con galería propia, distribuidas entre los árboles. Independencia total, con cocina equipada y parrillero.",
    features: ["Cocina equipada", "Parrillero propio", "Galería y jardín", "Wi-Fi", "Estacionamiento junto a la cabaña"],
    gallery: [
      { src: cabinsImg, alt: "Cabaña de madera entre los árboles" },
      { src: heroImg, alt: "Vista aérea de las cabañas y el parque" },
      { src: poolImg, alt: "Piscina rodeada de verde" },
    ],
  },
  {
    slug: "camping",
    title: "Camping",
    capacity: "Carpas y motorhome",
    description:
      "Parcelas amplias bajo los pinos, con sombra todo el día y el ambiente tranquilo de siempre. La forma más libre de vivir la Costa de Oro.",
    features: ["Parrilleros", "Baños y duchas con agua caliente", "Piletas de lavar", "Tomas de luz", "Acceso a piscina y áreas recreativas"],
    gallery: [
      { src: campingImg, alt: "Zona de camping con carpas bajo los pinos" },
      { src: greenImg, alt: "Espacios verdes del camping" },
      { src: heroImg, alt: "Vista general del complejo hacia la playa" },
    ],
  },
];

function StayCard({ stay }: { stay: Stay }) {
  const [i, setI] = useState(0);
  const total = stay.gallery.length;
  const go = (d: number) => setI((v) => (v + d + total) % total);

  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        {stay.gallery.map((g, idx) => (
          <img
            key={g.src}
            src={g.src}
            alt={g.alt}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
          <button
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="grid h-9 w-9 place-items-center rounded-full bg-background/85 text-primary transition hover:bg-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {stay.gallery.map((g, idx) => (
              <span
                key={g.src}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-5 bg-background" : "w-1.5 bg-background/60"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="grid h-9 w-9 place-items-center rounded-full bg-background/85 text-primary transition hover:bg-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-primary">{stay.title}</h3>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-accent-deep">
          <Users className="h-3.5 w-3.5" /> {stay.capacity}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stay.description}</p>
        <ul className="mt-5 space-y-2">
          {stay.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
              {f}
            </li>
          ))}
        </ul>
        <BookingCTA stay={stay.slug} variant="outline" className="mt-7 w-full">
          Consultar disponibilidad
        </BookingCTA>
      </div>
    </article>
  );
}

export function Accommodations() {
  return (
    <section id="alojamientos" className="bg-sand-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Alojamientos</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
            Tres maneras de quedarte
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Elegí la comodidad del hotel, la independencia de una cabaña o la libertad del camping.
            Todos comparten el mismo parque, la piscina y la cercanía al mar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {stays.map((s) => (
            <StayCard key={s.slug} stay={s} />
          ))}
        </div>
      </div>
    </section>
  );
}