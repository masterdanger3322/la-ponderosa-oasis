import { Trees, Waves, Home, Sparkles } from "lucide-react";
import greenImg from "@/assets/green.jpg";

const stats = [
  { value: "6", label: "hectáreas de parque" },
  { value: "5 min", label: "de la playa" },
  { value: "3", label: "formas de alojarte" },
  { value: "+40", label: "años recibiendo familias" },
];

const pillars = [
  { icon: Trees, title: "Espacios verdes enormes", text: "Parque arbolado con sombra natural, lugar para jugar, descansar y respirar." },
  { icon: Home, title: "Hotel + cabañas + camping", text: "Una combinación poco común: cada grupo elige cómo quiere vivir sus vacaciones." },
  { icon: Waves, title: "Piscina al aire libre", text: "Piscina rodeada de verde y reposeras, el punto de encuentro del verano." },
  { icon: Sparkles, title: "A pasos del mar", text: "Playa Fortín de Santa Rosa a pocos minutos, en plena Costa de Oro." },
];

export function About() {
  return (
    <section id="nosotros" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Nosotros</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
              Un refugio familiar entre árboles, desde hace generaciones
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              La Ponderosa nació como un campo de descanso en Fortín de Santa Rosa y con los años
              se transformó en un complejo turístico donde conviven el hotel, las cabañas y el
              camping, siempre con el mismo espíritu: tranquilidad, naturaleza y trato cercano.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nuestra filosofía es simple. Cuidamos el parque, mantenemos el silencio y dejamos
              que cada familia arme sus vacaciones a su ritmo: una tarde de piscina, un asado
              bajo los pinos y una caminata hasta el mar.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="reveal">
                  <dt className="font-display text-3xl text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal relative">
            <img
              src={greenImg}
              alt="Amplios espacios verdes con árboles y juegos para niños en La Ponderosa"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-sand px-6 py-4 shadow-soft sm:block">
              <p className="font-display text-xl text-primary">Paz, verde y mar</p>
              <p className="text-xs text-secondary-foreground">Costa de Oro, Canelones</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="reveal rounded-2xl border border-border bg-sand-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}