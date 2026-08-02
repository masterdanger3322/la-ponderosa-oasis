import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Editable content: change the texts below to update the FAQ.
 */
export const FAQS = [
  {
    q: "¿Cómo reservo y cuánta seña se paga?",
    a: "Las reservas se realizan por WhatsApp al +598 98 884 160. Para confirmar se solicita una seña del 30% del total por transferencia o depósito; el saldo se abona al llegar.",
  },
  {
    q: "¿Se admiten mascotas?",
    a: "Sí, recibimos mascotas en el camping y en cabañas seleccionadas, siempre con correa en las áreas comunes y bajo responsabilidad del huésped. Consultanos antes de reservar.",
  },
  {
    q: "¿Cuáles son los horarios de check-in y check-out?",
    a: "El check-in es a partir de las 14:00 y el check-out hasta las 10:00. En camping el ingreso es desde las 12:00. Si necesitás otro horario, escribinos y lo coordinamos.",
  },
  {
    q: "¿Qué incluye cada tipo de alojamiento?",
    a: "Las habitaciones incluyen baño privado, ropa de cama y toallas. Las cabañas suman cocina equipada y parrillero propio. El camping incluye parcela, acceso a baños con agua caliente, piletas de lavar y parrilleros. Todos los alojamientos tienen acceso a la piscina y a los espacios verdes.",
  },
  {
    q: "¿Cuál es la política de cancelación?",
    a: "Cancelando con más de 15 días de anticipación la seña queda como crédito para otra fecha dentro de la temporada. Con menos de 15 días, la seña no es reintegrable.",
  },
  {
    q: "¿Se proveen sábanas y toallas?",
    a: "En hotel sí, están incluidas. En cabañas se pueden solicitar con costo adicional. En camping cada huésped trae su equipo.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="reveal text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent-deep">Preguntas frecuentes</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
            Lo que solemos responder
          </h2>
        </div>

        <Accordion type="single" collapsible className="reveal mt-10 w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}