import { cn } from "../../lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
import { Link } from "react-router-dom";

const isInternalLink = (href: string) => {
    return href.startsWith('/');
};

interface BentoCardProps {
    title: string;
    description?: string;
    className?: string;
    children?: React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
}

export function BentoCard({
    title,
    description,
    className,
    children,
    header,
    icon,
    href,
}: BentoCardProps) {
    const cardContent = (
        <Card className={cn(
            "relative flex flex-col justify-between overflow-hidden h-full rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-zinc-900/80 p-0 gap-0",
            "shadow-none" // Override default shadow
        )}>
            {/* Glow Effect on Hover - customized absolute positioning */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <CardHeader className="flex flex-col gap-4 p-6 pb-0">
                {header}
                <div className="space-y-2">
                    {icon && (
                        <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-800 text-foreground">
                            {icon}
                        </div>
                    )}
                    <CardTitle className="text-xl font-semibold leading-tight tracking-tight text-foreground">
                        {title}
                    </CardTitle>
                    {description && (
                        <CardDescription className="text-sm text-balance text-muted-foreground leading-relaxed">
                            {description}
                        </CardDescription>
                    )}
                </div>
            </CardHeader>

            <CardContent className="p-6 pt-4">
                {children}
            </CardContent>
        </Card>
    );

    const wrapperClassName = cn("block group h-full", href && "cursor-pointer", className);

    if (!href) {
        return <div className={wrapperClassName}>{cardContent}</div>;
    }

    if (isInternalLink(href)) {
        return <Link to={href} className={wrapperClassName}>{cardContent}</Link>;
    }

    return <a href={href} className={wrapperClassName}>{cardContent}</a>;
}
