export function About() {
  return (
    <section id="about" className="py-24 bg-card relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section title */}
          <div className="mb-12">
            <span className="text-primary text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Welcome to <span className="text-primary font-semibold">Chaopan Corner</span>,
              your home for authentic Filipino comfort food. We believe that great food
              brings people together, and every dish we serve is crafted with passion
              and the freshest ingredients.
            </p>

            <p>
              Our signature Chao Pan is the perfect combination of crispy, golden-fried
              rice and delicious toppings — from our premium Japanese siomai to our
              juicy chicken fillet and savory pork chop. Each bite is a celebration
              of Filipino flavors that will keep you coming back for more.
            </p>

            <p className="text-primary font-serif text-xl italic">
              &quot;Simple sarap, big sa busog!&quot;
            </p>

            <p>
              Located in Jaen, Nueva Ecija near Palawan, we&apos;re proud to serve our
              community with meals that satisfy both the heart and the appetite.
              Whether you&apos;re grabbing a quick bite or sharing a meal with loved
              ones, Chaopan Corner is here to make every moment delicious.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "100%", label: "Fresh Ingredients" },
              { number: "4", label: "Signature Combos" },
              { number: "5", label: "Sauce Choices" },
              { number: "❤️", label: "Made with Love" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
