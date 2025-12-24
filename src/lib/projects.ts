import yaml from 'js-yaml';

export interface Project {
    slug: string;
    title: string;
    description: string;
    category: string;
    image: string;
    content: string;
    date?: string;
    technologies?: string[];
    link?: string;
}

// Import all markdown files from the content directory
const projectsDirectory = import.meta.glob('../content/projetos/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

export function getAllProjects(): Project[] {
    const projects = Object.entries(projectsDirectory).map(([path, rawContent]) => {
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        // Ensure rawContent is a string
        const contentString = typeof rawContent === 'string' ? rawContent : String(rawContent);

        // Manual frontmatter parsing
        const match = /^\s*---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/.exec(contentString);

        let data: any = {};
        let content = contentString;

        if (match) {
            try {
                data = yaml.load(match[1]) as any;
                content = match[2];
            } catch (e) {
                console.error(`Error parsing frontmatter for ${slug}`, e);
            }
        }

        return {
            slug,
            title: data.title || 'Sem Título',
            description: data.description || '',
            category: data.category || 'Misto',
            image: data.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
            date: data.date ? String(data.date) : undefined,
            technologies: data.technologies || [],
            content,
            link: data.link || ''
        };
    });

    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    const projects = getAllProjects();
    return projects.find((p) => p.slug === slug);
}
