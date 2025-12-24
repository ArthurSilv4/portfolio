import { Github, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 py-12">
            <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-sm font-semibold text-white tracking-tight uppercase">Arthur.dev</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/ArthurSilv4" className="text-zinc-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/arthur-souza-dev/" className="text-zinc-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
