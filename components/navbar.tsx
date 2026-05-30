"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Official-Logo.jpeg"
                  alt="Chaopan Corner"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="font-serif text-xl font-bold text-primary hidden sm:block">
                Chaopan Corner
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="tel:09289623913">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-primary/20">
            <div className="relative w-14 h-14">
              <Image
                src="/images/Official-Logo.jpeg"
                alt="Chaopan Corner"
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-3xl uppercase tracking-widest hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className="bg-primary text-black hover:bg-primary/90 px-8 py-6 text-lg mt-4"
            >
              <a href="tel:09289623913">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}