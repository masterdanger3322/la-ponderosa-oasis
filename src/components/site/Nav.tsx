import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, PHONE_TEL } from "@/lib/site";
import { BookingCTA } from "./BookingCTA";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-foreground/40 to-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-lg transition-colors",
              scrolled ? "bg-primary text-primary-foreground" : "bg-background/20 text-background",
            )}
          >
            LP
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-lg leading-tight sm:text-xl",
                scrolled ? "text-primary" : "text-background",
              )}
            >
              El Refugio Verde
            </span>
            <span
              className={cn(
                "block truncate text-[10px] uppercase tracking-[0.22em]",
                scrolled ? "text-muted-foreground" : "text-background/80",
              )}
            >
              Villa Los Robles
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                scrolled ? "text-foreground/75 hover:text-primary" : "text-background/90 hover:text-background",
              )}
            >
              {l.label}
            </a>
          ))}
          <BookingCTA variant={scrolled ? "solid" : "ghostLight"} className="px-5 py-2">
            Reservar
          </BookingCTA>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Llamar"
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors",
              scrolled ? "bg-secondary text-primary" : "bg-background/20 text-background",
            )}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors",
              scrolled ? "bg-primary text-primary-foreground" : "bg-background/20 text-background",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border bg-background/97 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="divide-y divide-border">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <BookingCTA className="mt-4 w-full">Reservar ahora</BookingCTA>
        </nav>
      )}
    </header>
  );
}