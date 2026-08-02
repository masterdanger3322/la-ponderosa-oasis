import { MapPin } from "lucide-react";
import { ADDRESS } from "@/lib/site";

const nearby = [
  { name: "Playa Fortín de Santa Rosa", detail: "A pocos minutos, arena y médanos" },
  { name: "Atlántida", detail: "Balneario histórico con servicios y gastronomía" },
  { name: "Parque del Plata", detail: "Playas tranquilas y paseos entre pinos" },
  { name: "Costa de Oro", detail: "Todo el corredor costero de Canelones" },
  { name: "El Águila", detail: "El ícono de la costa, a un paseo en auto" },
];

export function Location() {
  return (
    <section id="ubicacion" className="bg-sand-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Ubicación</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
              En Fortín de Santa Rosa, corazón de la Costa de Oro
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
              title="Mapa de La Ponderosa en Fortín de Santa Rosa, Canelones"
              src="https://www.google.com/maps?q=66H3%2BF8R%20Fort%C3%ADn%20de%20Santa%20Rosa%20Canelones%20Uruguay&output=embed"
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