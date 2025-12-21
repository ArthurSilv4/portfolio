import { Link } from "lucide-react"
import { Button } from "../ui/button"

export function Hero() {
  return (
    <section className="container mx-auto px-4 lg:px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Text content */}
        <div>
          <h1 className="text-xl font-semibold mb-6 sm:w-3/4 lg:w-2/4">
            Desenvolvedor .NET focado em criar soluções escaláveis, bem
            arquitetadas e orientadas a qualidade e manutenção.
          </h1>
          <Button size="lg" className="w-full sm:w-auto rounded-3xl">
            <span className="text-sm sm:text-base font-semibold">
              Contate-me
            </span>
            <Link className="h-5 w-5" />
          </Button>
        </div>

        {/* Profile image */}
        <div className="bg-red-100 h-200 items-center justify-center flex rounded-md mt-16">
          <img src="" alt="portfolio" className="bg-cover"/>
        </div>
    </section>
  )
}
