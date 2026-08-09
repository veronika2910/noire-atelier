export type ProjectImage = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square";
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  location: string;
  year: string;
  category: string;
  cover: string;
  coverAlt: string;
  size: "lg" | "md" | "sm";
  excerpt: string;
  concept: string;
  challenge: string;
  approach: string;
  materials: string[];
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "casa-nero",
    index: "01",
    name: "Casa Nero",
    location: "Prague",
    year: "2026",
    category: "Private Residence",
    cover:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1800&auto=format&fit=crop",
    coverAlt: "Living room with wide glazing and soft natural light, Casa Nero",
    size: "lg",
    excerpt:
      "A riverside apartment reduced to its essentials — stone, oak and light moving through the day.",
    concept:
      "Casa Nero began with a single instruction from the clients: remove everything that isn't necessary, and make what remains feel inevitable. The apartment sits above the river, and the brief asked us to let that presence lead every decision — walls fell away, sightlines opened, and the plan was redrawn around the movement of daylight rather than around furniture.",
    challenge:
      "The existing layout fragmented the river view into three small windows. Structural constraints meant we could not simply remove the dividing walls, so the challenge became architectural: how to unify a sense of openness without unifying the structure itself.",
    approach:
      "We introduced a single storage volume in blackened oak that runs the length of the apartment, absorbing every functional need — media, wardrobe, pantry — behind one continuous plane. Everything else was left open. Furniture was chosen for its silhouette against the window rather than for how it filled a room.",
    materials: [
      "Blackened European oak",
      "Honed Bianco Carrara stone",
      "Hand-troweled lime plaster",
      "Bronze-finished brass hardware",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2200&auto=format&fit=crop",
        alt: "Living room with panoramic river-facing glazing",
        aspect: "landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1600&auto=format&fit=crop",
        alt: "Chaise seating positioned beside the window",
        aspect: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1800&auto=format&fit=crop",
        alt: "Low oak coffee table beside a linen sofa",
        aspect: "landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1400&auto=format&fit=crop",
        alt: "Detail of textile and cushion material study",
        aspect: "square",
      },
    ],
  },
  {
    slug: "villa-serra",
    index: "02",
    name: "Villa Serra",
    location: "Brno",
    year: "2025",
    category: "Family Residence",
    cover:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop",
    coverAlt: "Warm, minimal living space with textured plaster walls, Villa Serra",
    size: "md",
    excerpt:
      "A family home organised around a single courtyard, built for three generations to share.",
    concept:
      "Villa Serra houses three generations of one family under a single roof. Rather than dividing the plan by household, we organised it by rhythm of use — quiet rooms, shared rooms, threshold rooms — so that privacy and togetherness could coexist without a single locked door.",
    challenge:
      "Reconciling very different daily rhythms within one footprint, without the house feeling subdivided or compromised for any generation.",
    approach:
      "A central courtyard became the house's spine, with every principal room addressing it directly. Materials warm and cool in sequence from the public rooms to the private wing, giving each generation a distinct register within one coherent palette.",
    materials: [
      "Travertine flooring",
      "White oiled oak joinery",
      "Limewashed brick",
      "Cast bronze fixtures",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2200&auto=format&fit=crop",
        alt: "Living space with textured plaster and warm materials",
        aspect: "landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop",
        alt: "Seating arrangement facing the courtyard",
        aspect: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1800&auto=format&fit=crop",
        alt: "Shared living room with natural material palette",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "apartment-no-17",
    index: "03",
    name: "Apartment No. 17",
    location: "Vienna",
    year: "2025",
    category: "Pied-à-terre",
    cover:
      "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1800&auto=format&fit=crop",
    coverAlt: "Compact, elegant living room with warm wood tones, Apartment No. 17",
    size: "sm",
    excerpt:
      "A compact pied-à-terre proving that scale has little to do with presence.",
    concept:
      "At 54 square metres, Apartment No. 17 asked a different question of us: how much can be left out before a room stops feeling complete? The result treats every object as load-bearing — nothing is present without a reason.",
    challenge:
      "A low ceiling and a single source of daylight risked making the apartment feel compressed rather than intimate.",
    approach:
      "We raised the sightline with tall, narrow joinery and a pale, reflective plaster ceiling, then let one deep bronze accent — a single armchair — anchor the room so the eye has somewhere to rest.",
    materials: [
      "Pale Venetian plaster",
      "Smoked oak flooring",
      "Boucle upholstery",
      "Patinated brass detailing",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=2200&auto=format&fit=crop",
        alt: "Compact living room with warm wood tones",
        aspect: "landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=1600&auto=format&fit=crop",
        alt: "Sofa and wooden side table detail",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "house-mare",
    index: "04",
    name: "House Mare",
    location: "Prague",
    year: "2024",
    category: "Private Residence",
    cover:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1800&auto=format&fit=crop",
    coverAlt: "Sunlit living room with quiet, neutral tones, House Mare",
    size: "md",
    excerpt:
      "A quiet house for a family that wanted their home to feel like an exhale.",
    concept:
      "House Mare's clients asked for very little beyond one word: calm. We interpreted that as a discipline rather than a mood board — a consistent restraint applied to colour, material and form throughout, so no single room competes for attention.",
    challenge:
      "Avoiding a home that reads as sparse rather than calm — the two are easily confused, and only one was the brief.",
    approach:
      "Warmth was introduced through texture rather than colour: raw plaster, unlacquered wood, undyed linen. The palette stays within a five-tone range across the entire house, so the architecture — not the decoration — carries the character.",
    materials: [
      "Raw lime plaster",
      "Unlacquered white oak",
      "Undyed Belgian linen",
      "Honed limestone",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2200&auto=format&fit=crop",
        alt: "Sunlit living room in neutral tones",
        aspect: "landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1600&auto=format&fit=crop",
        alt: "Bedroom with soft, muted textiles",
        aspect: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?q=80&w=1800&auto=format&fit=crop",
        alt: "Living room with large window and quiet material palette",
        aspect: "landscape",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
