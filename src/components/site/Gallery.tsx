import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import roomsImg from "@/assets/rooms.jpg";
import cabinsImg from "@/assets/cabins.jpg";
import campingImg from "@/assets/camping.jpg";
import poolImg from "@/assets/pool.jpg";
import greenImg from "@/assets/green.jpg";

const CATEGORIES = [
  { id: "all", label: "Todo" },
  { id: "rooms", label: "Habitaciones" },
  { id: "cabins", label: "Cabañas" },
  { id: "camping", label: "Camping" },
  { id: "pool", label: "Piscina" },
  { id: "green", label: "Espacios verdes" },
] as const;

type Cat = (typeof CATEGORIES)[number]["id"];

const photos: { src: string; alt: string; cat: Exclude<Cat, "all">; tall?: boolean }[] = [
  { src: heroImg, alt: "Vista aérea del complejo hacia la playa", cat: "green", tall: true },
  { src: poolImg, alt: "Piscina al aire libre rodeada de árboles", cat: "pool" },
  { src: cabinsImg, alt: "Cabaña de madera con galería", cat: "cabins", tall: true },
  { src: roomsImg, alt: "Habitación de hotel con vista al parque", cat: "rooms" },
  { src: campingImg, alt: "Carpas en la zona de camping bajo los pinos", cat: "camping", tall: true },
  { src: greenImg, alt: "Parque verde con juegos para niños", cat: "green" },
  { src: poolImg, alt: "Reposeras junto a la piscina", cat: "pool", tall: true },
  { src: cabinsImg, alt: "Entorno arbolado de las cabañas", cat: "cabins" },
  { src: campingImg, alt: "Parrillero y mesas en el camping", cat: "camping" },
];

export function Gallery() {
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = photos.filter((p) => cat === "all" || p.cat === cat);
  const move = (d: number) =>
    setOpen((v) => (v === null ? v : (v + d + visible.length) % visible.length));

  return (
    <section id="galeria" className="bg-sand-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Galería</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
            Así se vive La Ponderosa
          </h2>
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setCat(c.id);
                setOpen(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                cat === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/70 hover:border-accent hover:text-accent-deep"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {visible.map((p, idx) => (
            <button
              key={`${p.src}-${idx}`}
              onClick={() => setOpen(idx)}
              className="reveal group block w-full overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </button>
          ))}
        </div>
      </div>

      {open !== null && visible[open] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 animate-fade-in"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Anterior"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86svh] max-w-5xl">
            <img
              src={visible[open].src}
              alt={visible[open].alt}
              className="max-h-[78svh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-background/80">
              {visible[open].alt}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Siguiente"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}