export const PHONE_DISPLAY = "+598 98 884 160";
export const PHONE_TEL = "+59898884160";
export const WHATSAPP_NUMBER = "59898884160";

/**
 * Central booking-intent helper.
 * Today every CTA resolves to WhatsApp. When an online reservation engine is
 * added later, only this function needs to change — every CTA in the site
 * goes through `bookingLink()` / the <BookingCTA /> component.
 */
export type BookingIntent = {
  /** Accommodation slug, if the CTA is tied to one */
  stay?: "hotel" | "cabins" | "camping";
  /** Free-form message override */
  message?: string;
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const STAY_LABEL: Record<NonNullable<BookingIntent["stay"]>, string> = {
  hotel: "una habitación de hotel",
  cabins: "una cabaña",
  camping: "un lugar en el camping",
};

export function bookingLink(intent: BookingIntent = {}) {
  if (intent.message) return whatsappLink(intent.message);
  const what = intent.stay ? STAY_LABEL[intent.stay] : "alojamiento";
  return whatsappLink(
    `¡Hola La Ponderosa! Quisiera consultar disponibilidad para ${what}. ¿Me pueden ayudar?`,
  );
}

export const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#alojamientos", label: "Alojamientos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export const ADDRESS = "66H3+F8R, Fortín de Santa Rosa, Canelones, Uruguay";