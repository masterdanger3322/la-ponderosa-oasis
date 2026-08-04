import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Familia Rodríguez", text: "Espacios verdes hermosos y muy bien cuidados. Los chiquilines jugaron todo el día y nosotros descansamos como hacía años.", stars: 5 },
  { name: "Martín P.", text: "Lugar ideal para relajarse. Silencio, árboles enormes y la playa a pocos minutos en auto.", stars: 5 },
  { name: "Carolina S.", text: "La piscina está muy linda y limpia. Perfecto para venir en familia un fin de semana largo.", stars: 4 },
  { name: "Grupo de amigos, Montevideo", text: "Acampamos tres noches y la pasamos bárbaro. Buenos parrilleros, baños limpios y mucho lugar.", stars: 5 },
  { name: "Verónica y Diego", text: "Ambiente tranquilo y gente muy amable. Se nota que atienden con cariño el lugar.", stars: 4 },
  { name: "Fernando A.", text: "Excelente experiencia de camping en la Costa Serena. Volvemos seguro el próximo verano.", stars: 5 },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? "fill-sand text-sand" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="opiniones" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal grid items-center gap-8 md:grid-cols-[auto_minmax(0,1fr)]">
          <div className="rounded-3xl bg-background/10 px-8 py-7 text-center">
            <p className="font-display text-5xl">4.0</p>
            <div className="mt-2 flex justify-center">
              <Stars n={4} />
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/75">
              799 reseñas en Google
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.28em] text-sand">Opiniones</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Lo que dicen quienes ya vinieron
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Espacios verdes, tranquilidad, la piscina y el trato familiar son lo que más
              repiten nuestros huéspedes.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="reveal flex h-full flex-col rounded-2xl bg-background/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <Stars n={r.stars} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-wide text-sand">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}