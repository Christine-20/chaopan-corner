const extras = [
  {
    name: "Chao Pan Rice",
    price: 40,
    description:
      "Extra serving of our signature Chaopan fried rice.",
  },
  {
    name: "Plain Rice",
    price: 20,
    description:
      "A hot serving of steamed white rice.",
  },
  {
    name: "Egg",
    price: 20,
    description:
      "A freshly cooked egg that pairs perfectly with any meal.",
  },
]

const sauces = [
  {
    name: "Gravy",
    description: "Rich and savory gravy sauce.",
    emoji: "🥣",
  },
  {
    name: "Cheese Sauce",
    description: "Smooth and creamy cheese sauce.",
    emoji: "🧀",
  },
  {
    name: "Ketchup",
    description: "Classic sweet tomato ketchup.",
    emoji: "🍅",
  },
  {
    name: "Toyomansi",
    description: "Tangy soy sauce blended with calamansi.",
    emoji: "🍋",
  },
]

export function Extras() {
  return (
    <section
      id="extras"
      className="relative bg-card py-24"
    >
      <div className="absolute left-8 top-8 h-16 w-16 border-l border-t border-primary/30" />

      <div className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-primary/30" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Make It Complete
            </span>

            <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Extras & Sauces
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 bg-primary" />

            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Add extra rice or egg to your meal and choose your
              preferred sauce.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-center font-serif text-2xl font-bold text-primary">
                Extras
              </h3>

              <div className="space-y-4">
                {extras.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="whitespace-nowrap text-lg font-bold text-primary">
                      ₱{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-center font-serif text-2xl font-bold text-primary">
                Sauce Choices
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {sauces.map((sauce) => (
                  <div
                    key={sauce.name}
                    className="rounded-xl border border-border bg-background p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                      {sauce.emoji}
                    </div>

                    <h4 className="font-semibold text-foreground">
                      {sauce.name}
                    </h4>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {sauce.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-sm italic text-muted-foreground">
                Choose your preferred sauce with your meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}