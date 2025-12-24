import { ArrowDown, Terminal } from "lucide-react"
import { useLocation } from 'react-router-dom'
import { Button } from "../ui/button"

export function Hero() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/projeto/')

  const handleProjectsClick = () => {
    if (isProjectPage) {
      window.location.href = '/#projects'
    } else {
      const element = document.querySelector('#projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative overflow-hidden pt-[112px] pb-24 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] glow-purple opacity-20 pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10 flex flex-col items-start text-left">
        <span className="text-[15px] font-mono text-zinc-500 mb-2 block tracking-tight">
          arthur@portfolio:~$ iniciar-apresentacao
        </span>

        <h1 className="text-[40px] leading-[1.1] font-normal text-white mb-6 max-w-3xl tracking-tight sm:text-[56px] sm:leading-[1.1]">
          Desenvolvendo Soluções <br className="hidden sm:block" />
          <span className="text-zinc-400">Modernas e Escaláveis.</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            onClick={handleProjectsClick}
            className="rounded-full h-auto py-2.5 px-6 bg-white text-black hover:bg-zinc-200 text-[14px] font-medium transition-transform active:scale-95 cursor-pointer"
          >
            Ver Projetos <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="w-full max-w-4xl self-start rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden backdrop-blur-sm group">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="ml-4 text-xs text-zinc-500 font-mono flex items-center gap-2">
              <Terminal className="w-3 h-3" />
              Developer.cs
            </div>
          </div>

          <div className="p-6 font-mono text-sm overflow-x-auto">
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-zinc-600 mr-4 select-none">1</span>
                <span className="text-purple-400">var</span>
                <span className="text-yellow-100 ml-2">developer</span>
                <span className="text-white ml-2">=</span>
                <span className="text-purple-400 ml-2">new</span>
                <span className="text-blue-300 ml-2">Developer</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 mr-4 select-none">2</span>
                <span className="text-white">{`{`}</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 mr-4 select-none">3</span>
                <span className="text-white ml-4">Nome</span>
                <span className="text-white ml-2">=</span>
                <span className="text-green-300 ml-2">"Arthur Souza"</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 mr-4 select-none">4</span>
                <span className="text-white ml-4">Cargo</span>
                <span className="text-white ml-2">=</span>
                <span className="text-green-300 ml-2">"Full Stack"</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 mr-4 select-none">6</span>
                <span className="text-white ml-4">Techs</span>
                <span className="text-white ml-2">=</span>
                <span className="text-white ml-2">[{`"C#", "React", ".NET"`}]</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 mr-4 select-none">5</span>
                <span className="text-white ml-4">Especialidade</span>
                <span className="text-white ml-2">=</span>
                <span className="text-green-300 ml-2">"Backend, Cloud e Integração com IA"</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-zinc-600 mr-4 select-none">7</span>
                <span className="text-white">{`};`}</span>
                <span className="ml-2 w-2 h-4 bg-white/50 animate-pulse block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
