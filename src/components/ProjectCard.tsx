import { ArrowUpRight } from "lucide-react";
import { BentoCard } from "./ui/BentoCard";

interface ProjectCardProps {
    title: string;
    category?: string;
    image: string;
    href?: string;
    className?: string;
}

export function ProjectCard({
    title,
    category,
    image,
    href,
    className,
}: ProjectCardProps) {

    return (
        <BentoCard
            href={href}
            title={title}
            description={category}
            className={className}
        >
            <div className="relative mt-4 overflow-hidden rounded-lg aspect-video group-hover:ring-1 group-hover:ring-white/10 transition-all">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

                <div className="absolute top-4 right-4 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
