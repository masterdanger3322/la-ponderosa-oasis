import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { ADDRESS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary-deep py-14 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">El Refugio Verde</p>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/75">
              Hotel, cabañas y camping entre grandes espacios verdes en Villa Los Robles,
              Costa Serena, a minutos de la playa.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/elrefugioverde"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-background/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/elrefugioverde"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-background/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-sand">Secciones</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-sand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-sand">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                {ADDRESS}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-sand" />
                <a href={`tel:${PHONE_TEL}`} className="transition hover:text-sand">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-background/15 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} El Refugio Verde · Villa Los Robles, Costa Serena, Uruguay.
        </p>
      </div>
    </footer>
  );
}