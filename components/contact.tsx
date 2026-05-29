import { MapPin, Phone, Facebook, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Jaen, Nueva Ecija
                  <br />
                  Near Palawan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Phone
                </h3>
                <a
                  href="tel:09289623913"
                  className="text-primary hover:underline text-lg"
                >
                  0928 962 3913
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="tel:09289623913">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href="https://m.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-lg overflow-hidden border border-border bg-muted">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold">Jaen, Nueva Ecija</p>
                  <p className="text-muted-foreground text-sm">Near Palawan</p>
                  <Button
                    asChild
                    variant="link"
                    className="text-primary mt-2"
                  >
                    <a
                      href="https://maps.google.com/?q=Jaen,Nueva+Ecija"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps →
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
