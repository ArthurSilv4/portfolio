import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 py-12">
            <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-sm font-semibold text-white tracking-tight uppercase">Arthur.dev</span>
                    <span className="text-xs text-zinc-500">
                        Desenvolvido com React, Tailwind & Estilo Cursor.
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
