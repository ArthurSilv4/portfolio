import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

interface ProjectCardProps {
    title: string;
    category?: string;
    image: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export function ProjectCard({
    title,
    category,
    image,
    href,
    onClick,
    className,
}: ProjectCardProps) {
    const Component = href ? "a" : "div";

    return (
        <Component
            href={href}
            onClick={onClick}
            className={cn(
                "group relative block overflow-hidden rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                className
            )}
        >
            {/* Image Container with Hover Scale */}
            <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content Overlay (Appears on Hover/Focus) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    {category && (
                        <span className="mb-2 block text-xs font-medium tracking-wider text-white/80 uppercase">
                            {category}
                        </span>
                    )}
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        {title}
                        <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                </div>
            </div>
        </Component>
    );
}
