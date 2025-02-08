import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Card className="group relative bg-black/90 border-gray-800 hover:border-primary/50  transition-all duration-300">
      <CardContent className="p-8 sm:p-10 md:p-12">
        {/* Icon container */}
        <div className="mb-8 sm:mb-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
          {description}
        </p>

        {/* Button */}
        <Button
          asChild
          variant="outline"
          className="w-full text-white border-white/20 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
        >
          <Link href={href}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}