import Image from "next/image"
const menuItems = [
  {
    name: "Chao Pan w/ Japanese Siomai",
    price: 100,
    description:
      "Crispy golden fried rice topped with premium Japanese-style siomai wrapped in nori. A perfect combination of textures and flavors.",
    image: "/images/siomai.png",
  },
  {
    name: "Chao Pan w/ Chicken Fillet",
    price: 109,
    description:
      "Our signature chao pan served with tender, juicy sliced chicken fillet. Perfectly seasoned and cooked to perfection.",
    image: "/images/chicken-fillet.png",
  },
  {
    name: "Chao Pan w/ Shanghai",
    price: 100,
    description:
      "Classic chao pan paired with crispy golden Shanghai rolls. A crowd favorite that never disappoints.",
    image: "/images/shanghai.png",
  },
  {
    name: "Chao Pan w/ Pork Chop",
    price: 109,
    description:
      "Hearty chao pan topped with succulent crispy breaded pork chop. Big sa busog guaranteed!",
    image: "/images/pork-chop.png",
  },
  {
    name: "Student Meal Chao Pan w/ Pork Siomai (2PCS)",
    price: 60,
    description:
      "Chao pan rice served with 2 pieces of pork siomai.",
    image: "/images/student-siomai.png",
  },
  {
    name: "Student Meal Chao Pan w/ Pork Shanghai (2PCS)",
    price: 60,
    description:
      "Chao pan rice served with 2 pieces of pork shanghai.",
    image: "/images/student-shanghai.png",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-background relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">
            Our Specialties
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            The Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            All our meals are prepared fresh daily with premium ingredients.
            Each combo comes with a generous serving that will truly make you busog!
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                  ₱{item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
