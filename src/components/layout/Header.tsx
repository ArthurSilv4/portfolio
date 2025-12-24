import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[52px] px-5 transition-all duration-200",
        scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/5" : "bg-black/0"
      )}
    >
      <div className="flex items-center gap-8">
        <a href="/" className="text-[16px] font-bold tracking-tight uppercase text-white hover:opacity-80 transition-opacity font-sans">
          ARTHUR.DEV
        </a>
      </div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-[14px] font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a href="https://drive.google.com/file/d/1Im3rAUGREScUD9KgesuQAoLhNSbfmRSz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="hidden md:inline-flex h-8 px-4 rounded-full text-[13px] font-medium text-zinc-300 hover:text-white hover:bg-white/10"
          >
            Currículo
          </Button>
        </a>

        <a href="https://www.linkedin.com/in/arthur-souza-dev/" target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="hidden md:inline-flex h-8 px-4 rounded-full bg-white text-black hover:bg-zinc-200 text-[13px] font-semibold transition-colors"
          >
            Fale Comigo
          </Button>
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="top" className="w-full bg-zinc-950 border-zinc-800 pt-20">
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 w-full max-w-xs m-4">
                <a href="https://drive.google.com/file/d/1Im3rAUGREScUD9KgesuQAoLhNSbfmRSz/view?usp=sharing" target="_blank" rel="noopener noreferrer">

                  <Button variant="outline" className="w-full rounded-full border-zinc-700 text-black">
                    Currículo
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/arthur-souza-dev/" target="_blank" rel="noopener noreferrer">

                  <Button className="w-full rounded-full bg-white text-black hover:bg-zinc-200">
                    Fale Comigo
                  </Button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
