import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface GrantBadgeProps {
  label: string;
  type?: "grant" | "certification" | "award";
  className?: string;
}

export const GrantBadge = ({ label, type = "grant", className }: GrantBadgeProps) => {
  const styles = {
    grant: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
    certification: "bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20",
    award: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
  };

  return (
    <Badge variant="outline" className={cn("px-3 py-1 font-medium tracking-wide transition-colors", styles[type], className)}>
      {label}
    </Badge>
  );
};
