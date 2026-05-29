import Image from "next/image"

const galleryImages = [
  { src: "/public/Place/Outside.jpg", alt: "Outside Area" },
  { src: "/Place/Counter.jpg", alt: "Counter Area" },
  { src: "/Place/inside.jpg", alt: "Restaurant Interior" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">
            Our Kitchen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Take a peek at our kitchen, our food, and the love we put into every dish we serve.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg bg-card border border-border group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? "aspect-square md:aspect-auto md:h-full min-h-[300px]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}