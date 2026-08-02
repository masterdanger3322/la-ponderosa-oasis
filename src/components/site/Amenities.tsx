import { Waves, Flame, Wifi, Car, UtensilsCrossed, ToyBrick, Volleyball, Trees } from "lucide-react";

const items = [
  { icon: Waves, label: "Piscina al aire libre" },
  { icon: Flame, label: "Parrilleros" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Car, label: "Estacionamiento" },
  { icon: UtensilsCrossed, label: "Comedor / restaurante" },
  { icon: ToyBrick, label: "Juegos para niños" },
  { icon: Volleyball, label: "Áreas recreativas" },
  { icon: Trees, label: "Grandes espacios verdes" },
];

export function Amenities() {
  return (
    <section id="servicios" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Servicios</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
            Todo lo que necesitás, puertas adentro
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="reveal flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent-deep">
                <it.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-foreground/85">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}