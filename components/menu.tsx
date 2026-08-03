"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

type Category =
  | "All"
  | "Signature Meals"
  | "Student Meals"
  | "Snacks"
  | "Drinks"

type MenuItem = {
  name: string
  price: number
  description: string
  image: string
  category: Exclude<Category, "All">
  badge?: string
}

const categories: Category[] = [
  "All",
  "Signature Meals",
  "Student Meals",
  "Snacks",
  "Drinks",
]

const menuItems: MenuItem[] = [
  {
    name: "Chao Pan w/ Japanese Siomai",
    price: 100,
    description:
      "Signature Chaopan fried rice served with three Japanese-style siomai.",
    image: "/images/siomai.png",
    category: "Signature Meals",
  },
  {
    name: "Chao Pan w/ Chicken Fillet",
    price: 109,
    description:
      "Tender sliced chicken fillet served with our flavorful Chaopan fried rice.",
    image: "/images/chicken-fillet.png",
    category: "Signature Meals",
  },
  {
    name: "Chao Pan w/ Shanghai",
    price: 100,
    description:
      "Crispy Shanghai rolls served with a generous portion of Chaopan fried rice.",
    image: "/images/shanghai.png",
    category: "Signature Meals",
  },
  {
    name: "Chao Pan w/ Pork Chop",
    price: 129,
    description:
      "Crispy pork chop served with our signature Chaopan fried rice.",
    image: "/images/pork-chop.png",
    category: "Signature Meals",
  },
  {
    name: "Chaopan Hungarian Sausage",
    price: 129,
    description:
      "Signature Chaopan fried rice paired with a juicy Hungarian sausage.",
    image: "/images/chaopan-hungarian.png",
    category: "Signature Meals",
    badge: "New",
  },
  {
    name: "Chaopan Liempo",
    price: 129,
    description:
      "Crispy grilled pork belly served with Chaopan fried rice and dipping sauce.",
    image: "/images/chaopan-liempo.png",
    category: "Signature Meals",
    badge: "New",
  },
  {
    name: "Chicken Pastil",
    price: 109,
    description:
      "Savory shredded chicken pastil in banana leaf served with steamed rice.",
    image: "/images/chicken-pastil.png",
    category: "Signature Meals",
    badge: "New",
  },
  {
    name: "Student Meal Chao Pan w/ Pork Siomai",
    price: 60,
    description:
      "Student-size Chaopan rice served with two pieces of pork siomai.",
    image: "/images/student-siomai.png",
    category: "Student Meals",
  },
  {
    name: "Student Meal Chao Pan w/ Pork Shanghai",
    price: 60,
    description:
      "Student-size Chaopan rice served with two pieces of pork Shanghai.",
    image: "/images/student-shanghai.png",
    category: "Student Meals",
  },
  {
    name: "Pansit Canton",
    price: 30,
    description:
      "Classic Filipino stir-fried noodles with vegetables and savory seasoning.",
    image: "/images/pansit-canton.png",
    category: "Snacks",
    badge: "New",
  },
  {
    name: "Coffee",
    price: 15,
    description:
      "A warm and comforting cup of coffee.",
    image: "/images/coffee.png",
    category: "Drinks",
  },
  {
    name: "Blueberry Milk Tea",
    price: 89,
    description:
      "Creamy blueberry milk tea served cold with chewy pearls.",
    image: "/images/blueberry-milk-tea.png",
    category: "Drinks",
    badge: "New",
  },
  {
    name: "Mango Milk Tea",
    price: 89,
    description:
      "Refreshing creamy mango milk tea served with chewy pearls.",
    image: "/images/mango-milk-tea.png",
    category: "Drinks",
    badge: "New",
  },
  {
    name: "Strawberry Milk Tea",
    price: 89,
    description:
      "Sweet and creamy strawberry milk tea served with chewy pearls.",
    image: "/images/strawberry-milk-tea.png",
    category: "Drinks",
    badge: "New",
  },
  {
    name: "Green Apple Milk Tea",
    price: 89,
    description:
      "Refreshing green apple milk tea served cold with chewy pearls.",
    image: "/images/green-apple-milk-tea.png",
    category: "Drinks",
    badge: "New",
  },
]

export function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All")

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    )
  }, [activeCategory])

  return (
    <section
      id="menu"
      className="relative bg-background py-24"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Our Specialties
          </span>

          <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            The Menu
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 bg-primary" />

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Explore our signature rice meals, affordable student
            combos, snacks, coffee, and refreshing milk tea.
          </p>
        </div>

        {/* Category buttons */}
        <div className="mx-auto mb-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Menu cards */}
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Product image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Price */}
                <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-2 font-bold text-primary-foreground shadow-lg">
                  ₱{item.price}
                </div>

                {/* Badge */}
                {item.badge && (
                  <div className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Product details */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  {item.category}
                </p>

                <h3 className="mt-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <a
                  href="tel:09289623913"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}