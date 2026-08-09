export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

export const articles: JournalArticle[] = [
  {
    slug: "the-art-of-quiet-luxury",
    title: "The Art of Quiet Luxury",
    category: "Philosophy",
    date: "March 2026",
    excerpt:
      "True luxury has stopped announcing itself. We look at why restraint has become the most expensive material in the room.",
    image:
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Warm, understated interior with wood panelling",
  },
  {
    slug: "why-materials-matter",
    title: "Why Materials Matter",
    category: "Craft",
    date: "January 2026",
    excerpt:
      "Every surface in a room is a decision. On choosing materials that age with a home rather than against it.",
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Close detail of natural material palette in a living space",
  },
  {
    slug: "light-as-an-architectural-element",
    title: "Light as an Architectural Element",
    category: "Design Notes",
    date: "November 2025",
    excerpt:
      "Light is the one material that changes throughout the day. Designing with it, rather than around it.",
    image:
      "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Living room lit by soft natural daylight through large windows",
  },
  {
    slug: "beyond-trends",
    title: "Beyond Trends",
    category: "Philosophy",
    date: "August 2025",
    excerpt:
      "Trends promise relevance and deliver expiry. On designing interiors that are simply left alone by time.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Timeless, neutral living room interior",
  },
];
