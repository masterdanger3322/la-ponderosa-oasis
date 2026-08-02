import { useState } from "react";
import { Phone, MessageCircle, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  phone: z.string().trim().min(6, "Ingresá un teléfono válido").max(30),
  checkIn: z.date().optional(),
  checkOut: z.date().optional(),
  stay: z.string().trim().max(40),
  message: z.string().trim().max(600).optional(),
});

const STAY_OPTIONS = ["Habitación de hotel", "Cabaña", "Camping", "Evento / grupo"];

export function Contact() {
  const [form, setForm] = useState<{
    name: string;
    phone: string;
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    stay: string;
    message: string;
  }>({
    name: "",
    phone: "",
    checkIn: undefined,
    checkOut: undefined,
    stay: STAY_OPTIONS[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisá los datos del formulario");
      return;
    }
    const d = parsed.data;
    const fmt = (date: Date) => format(date, "d 'de' MMMM", { locale: es });
    const dateRange =
      d.checkIn && d.checkOut
        ? `Del ${fmt(d.checkIn)} al ${fmt(d.checkOut)}.`
        : d.checkIn
          ? `Desde el ${fmt(d.checkIn)}.`
          : null;

    const text = [
      `¡Hola La Ponderosa! Soy ${d.name}.`,
      `Me interesa: ${d.stay}.`,
      dateRange,
      `Teléfono: ${d.phone}.`,
      d.message ? `Mensaje: ${d.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast.success("Abrimos WhatsApp con tu consulta lista para enviar");
  };

  const set = (k: "name" | "phone" | "stay" | "message") => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contacto" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Contacto</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
              Escribinos y armamos tu estadía
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Respondemos por WhatsApp todos los días. Contanos cuántos son, qué fechas tenés en
              mente y te pasamos disponibilidad y precios.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("¡Hola La Ponderosa! Quisiera consultar disponibilidad.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
              >
                <Phone className="h-4 w-4" /> Llamar ahora
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-3xl border border-border bg-sand-soft p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={form.name} onChange={set("name")} maxLength={80} required className="mt-1.5 bg-background" />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={set("phone")} maxLength={30} required className="mt-1.5 bg-background" />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="checkIn">Desde</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      id="checkIn"
                      type="button"
                      className="mt-1.5 flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-left text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className={form.checkIn ? "text-foreground" : "text-muted-foreground"}>
                        {form.checkIn ? format(form.checkIn, "d MMM yyyy", { locale: es }) : "Elegir fecha"}
                      </span>
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={form.checkIn}
                      onSelect={(date) => setForm((f) => ({ ...f, checkIn: date }))}
                      disabled={{ before: new Date() }}
                      locale={es}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="checkOut">Hasta</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      id="checkOut"
                      type="button"
                      className="mt-1.5 flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-left text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className={form.checkOut ? "text-foreground" : "text-muted-foreground"}>
                        {form.checkOut ? format(form.checkOut, "d MMM yyyy", { locale: es }) : "Elegir fecha"}
                      </span>
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={form.checkOut}
                      onSelect={(date) => setForm((f) => ({ ...f, checkOut: date }))}
                      disabled={{ before: form.checkIn ?? new Date() }}
                      locale={es}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="stay">Tipo de alojamiento</Label>
                <select
                  id="stay"
                  value={form.stay}
                  onChange={set("stay")}
                  className="mt-1.5 h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {STAY_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" rows={4} value={form.message} onChange={set("message")} maxLength={600} className="mt-1.5 bg-background" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              Enviar por WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Se abre WhatsApp con tu consulta ya escrita.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
