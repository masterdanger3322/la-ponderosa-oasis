import { MapPin } from "lucide-react";
import { ADDRESS } from "@/lib/site";

const nearby = [
  { name: "La playa cercana", detail: "A pocos minutos, arena y médanos" },
  { name: "El balneario vecino", detail: "Servicios, comercios y gastronomía" },
  { name: "Bosque de pinos", detail: "Playas tranquilas y paseos entre pinos" },
  { name: "Corredor costero", detail: "Todo el litoral de la zona, en auto" },
  { name: "Mirador del faro", detail: "Un clásico paseo de la costa" },
];

export function Location() {
  return (
    <section id="ubicacion" className="bg-sand-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Ubicación</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
              En Villa Los Robles, corazón de la Costa Serena
            </h2>
            <p className="mt-4 inline-flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
              {ADDRESS}
            </p>

            <ul className="mt-8 space-y-4">
              {nearby.map((n) => (
                <li key={n.name} className="reveal border-l-2 border-accent/50 pl-4">
                  <p className="font-display text-lg text-primary">{n.name}</p>
                  <p className="text-sm text-muted-foreground">{n.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal overflow-hidden rounded-3xl shadow-lift">
            <iframe
              title="Mapa de El Refugio Verde en Villa Los Robles, Costa Serena"
              src="https://www.google.com/maps?q=Villa%20Los%20Robles%20Uruguay&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 lg:h-full lg:min-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}