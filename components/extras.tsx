const extras = [
  { name: "Chao Pan Rice", price: 40, description: "Extra serving of our signature crispy fried rice" },
  { name: "Plain Rice", price: 20, description: "Steaming hot plain rice" },
  { name: "Egg", price: 20, description: "Perfectly fried egg" },
]

const sauces = [
  { name: "Gravy", description: "Rich and savory gravy sauce" },
  { name: "Cheese Sauce", description: "Creamy cheese sauce" },
  { name: "Ketchup", description: "Classic sweet ketchup" },
  { name: "Toyomansi", description: "Tangy soy sauce with calamansi" },
]

export function Extras() {
  return (
    <section className="py-24 bg-card relative">
      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-primary/30" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm uppercase tracking-widest">
              Make It Complete
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Extras & Sauces
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Extras */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">
                Add-Ons
              </h3>
              <div className="space-y-4">
                {extras.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <div className="text-primary font-bold text-lg">
                      ₱{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sauces */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">
                Sauce Choices
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {sauces.map((sauce, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">
                        {index === 0 && "🥣"}
                        {index === 1 && "🧀"}
                        {index === 2 && "🍅"}
                        {index === 3 && "🍋"}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">{sauce.name}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{sauce.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4 italic">
                All sauces included with every meal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
