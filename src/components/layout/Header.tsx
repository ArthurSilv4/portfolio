import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

export function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-white">Arthur's Portfolio</div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-white/10 hover:bg-white/20"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" color='white'/>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-background/80 backdrop-blur-sm">
            <nav className="flex flex-col items-center space-y-4 mt-8 ">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
