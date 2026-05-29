import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with texture overlay */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-4">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Official%20logo-PDZj0Bft2TuL9YGn0QFtSNcYN677r2.png"
                  alt="Chaopan Corner Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
              Experience the perfect blend of crispy chao pan and savory toppings.
              Premium Filipino comfort food made with love in Jaen, Nueva Ecija.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              >
                <Link href="#menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                <a href="tel:09289623913">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-125" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 bg-card">
                <Image
                  src="/images/ChaoPan.png"
                  alt="Delicious Chao Pan with Pork Chop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-primary/60 hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  )
}
