import { ChevronDown, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { BookingCTA } from "./BookingCTA";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Vista aérea de La Ponderosa: cabañas, piscina y grandes espacios verdes junto a la playa"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/35 to-foreground/75" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-24 pt-28 text-center">
        <p className="reveal is-visible mb-5 rounded-full border border-background/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-background/90">
          Canelones · Costa de Oro · Uruguay
        </p>
        <h1 className="font-display text-4xl leading-[1.1] text-background sm:text-5xl lg:text-6xl">
          Relajate rodeado de naturaleza,
          <span className="block italic text-sand">a minutos de la playa</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-background/90 sm:text-lg">
          Hotel, cabañas y camping en Fortín de Santa Rosa, Canelones. Piscina, hectáreas de
          verde y el mar a pasos.
        </p>
        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <BookingCTA variant="water" className="w-full px-8 py-4 text-base sm:w-auto">
            Reservar ahora
          </BookingCTA>
          <BookingCTA
            variant="ghostLight"
            message="¡Hola La Ponderosa! Vi la web y quisiera consultar por disponibilidad y precios."
            className="w-full px-8 py-4 text-base sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </BookingCTA>
        </div>

        <a
          href="#nosotros"
          aria-label="Ver más"
          className="absolute bottom-8 text-background/70 transition-colors hover:text-background"
        >
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </a>
      </div>
    </section>
  );
}