import { bookingLink, type BookingIntent } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = BookingIntent & {
  children: React.ReactNode;
  variant?: "solid" | "water" | "outline" | "ghostLight";
  className?: string;
};

const styles = {
  solid:
    "bg-primary text-primary-foreground hover:bg-primary-deep shadow-soft hover:shadow-lift",
  water:
    "bg-accent text-accent-foreground hover:bg-accent-deep shadow-soft hover:shadow-lift",
  outline:
    "border border-primary/30 text-primary hover:border-primary hover:bg-primary/5",
  ghostLight:
    "border border-background/50 text-background backdrop-blur-sm hover:bg-background/15",
};

/**
 * Single entry point for every booking / availability CTA in the site.
 * Swap `bookingLink()` for a reservation-engine route later and every
 * CTA updates at once — no redesign needed.
 */
export function BookingCTA({ children, variant = "solid", className, ...intent }: Props) {
  return (
    <a
      href={bookingLink(intent)}
      target="_blank"
      rel="noopener noreferrer"
      data-booking-intent={intent.stay ?? "general"}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5",
        styles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}