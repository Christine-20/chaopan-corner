import Image from "next/image"

const galleryImages = [
  {
    src: "/Place/Outside.jpg",
    alt: "Chaopan Corner outside area",
  },
  {
    src: "/Place/Counter.jpg",
    alt: "Chaopan Corner counter area",
  },
  {
    src: "/Place/inside.jpg",
    alt: "Chaopan Corner restaurant interior",
  },
  {
    src: "/images/chaopan-liempo.png",
    alt: "Chaopan Liempo",
  },
  {
    src: "/images/chaopan-hungarian.png",
    alt: "Chaopan Hungarian Sausage",
  },
  {
    src: "/images/mango-soda.png",
    alt: "Mango Fruit Soda",
  },
  {
    src: "/images/strawberry-soda.png",
    alt: "Strawberry Fruit Soda",
  },
  {
    src: "/images/blueberry-soda.png",
    alt: "Blueberry Fruit Soda",
  },
  {
    src: "/images/green-apple-soda.png",
    alt: "Green Apple Fruit Soda",
  },
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-background py-24"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Chaopan Corner
          </span>

          <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Gallery
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 bg-primary" />

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Take a look at our place, signature meals, snacks,
            coffee, and refreshing milk tea.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <div
                className={
                  index === 0
                    ? "relative aspect-square min-h-[300px] md:h-full md:aspect-auto"
                    : "relative aspect-square"
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 50vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="absolute bottom-4 left-4 right-4 translate-y-2 font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}