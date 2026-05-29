import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-primary">
                Chaopan Corner
              </span>
            </Link>
            <p className="text-primary font-serif italic mb-4">
              Simple sarap, big sa busog!
            </p>
            <p className="text-muted-foreground text-sm">
              Premium Filipino comfort food made with love and the freshest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#menu", label: "Menu" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jaen, Nueva Ecija (Near Palawan)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:09289623913"
                  className="text-primary hover:underline"
                >
                  0928 962 3913
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Chaopan Corner. All rights reserved.</p>
            <p className="text-center md:text-right">
              Made with ❤️ in Jaen, Nueva Ecija
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
