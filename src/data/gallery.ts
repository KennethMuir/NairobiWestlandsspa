export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  secondaryImage: string;
  featured?: boolean;
};

export const galleryItems = [
  {
    id: "gallery-01",
    title: "A moment to exhale",
    category: "The Space",
    description: "A welcoming portrait of rest, comfort and considered care.",
    image: "https://images.pexels.com/photos/19641835/pexels-photo-19641835.jpeg",
    secondaryImage: "https://images.unsplash.com/photo-1609535904959-aaa9d01fb5a4?auto=format&fit=crop&w=1800&q=85",
    featured: true,
  },
  {
    id: "gallery-02",
    title: "The bathing ritual",
    category: "Rituals",
    description: "A bathing ritual inspired by warmth, softness and stillness.",
    image: "https://images.unsplash.com/photo-1643543142710-35a0fc8056e6?auto=format&fit=crop&w=1800&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1643543162426-c3d8d948fe43?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-03",
    title: "Restorative touch",
    category: "Treatments",
    description: "A closer look at the hands and skill behind restorative treatments.",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?auto=format&fit=crop&w=1800&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1752071368979-e26605337768?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-04",
    title: "Skin in focus",
    category: "Beauty",
    description: "A gentle approach to skincare, facial rituals and renewal.",
    image: "https://images.unsplash.com/photo-1775642548902-2f60a0aa1405?auto=format&fit=crop&w=1800&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1659533984606-0aa0dc68bad0?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-05",
    title: "The massage ritual",
    category: "Treatments",
    description: "Thoughtful touch and unhurried techniques invite the body to relax.",
    image: "https://images.pexels.com/photos/6188118/pexels-photo-6188118.jpeg",
    secondaryImage: "https://images.unsplash.com/photo-1757689373248-a6cd07328ba5?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-06",
    title: "A softer pace",
    category: "Wellness",
    description: "A quiet invitation to slow down and return to yourself.",
    image: "https://images.pexels.com/photos/9718373/pexels-photo-9718373.jpeg",
    secondaryImage: "https://images.pexels.com/photos/19185962/pexels-photo-19185962.jpeg",
  },
  {
    id: "gallery-07",
    title: "A moment of calm",
    category: "The Space",
    description: "Simple details help make room for a more peaceful experience.",
    image: "https://images.unsplash.com/photo-1700996386804-e3c24222c8ff?auto=format&fit=crop&w=1800&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1759216852861-b42c58f20766?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-08",
    title: "Come back to yourself",
    category: "Wellness",
    description: "A restorative pause for the body, mind and senses.",
    image: "https://images.pexels.com/photos/19641806/pexels-photo-19641806.jpeg",
    secondaryImage: "https://images.pexels.com/photos/33340473/pexels-photo-33340473.jpeg",
    featured: true,
  },
  {
    id: "gallery-09",
    title: "Warmth and stillness",
    category: "Rituals",
    description: "Sauna-inspired warmth and quiet moments of personal care.",
    image: "https://images.unsplash.com/photo-1702312721607-6749725ac0be?auto=format&fit=crop&w=1800&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1582295525215-cacf275639d8?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-10",
    title: "A considered touch",
    category: "Treatments",
    description: "A restorative treatment shaped by skilled, attentive hands.",
    image: "https://images.pexels.com/photos/19641837/pexels-photo-19641837.jpeg",
    secondaryImage: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-11",
    title: "The art of unwinding",
    category: "Wellness",
    description: "An unhurried experience built around comfort and restoration.",
    image: "https://images.pexels.com/photos/3881089/pexels-photo-3881089.jpeg",
    secondaryImage: "https://images.unsplash.com/photo-1677682692998-7db8c3245bc9?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-12",
    title: "Small sensory details",
    category: "Beauty",
    description: "The finishing details that make a self-care ritual feel special.",
    image: "https://images.pexels.com/photos/19695951/pexels-photo-19695951.jpeg",
    secondaryImage: "https://images.unsplash.com/photo-1659534010108-9ec8607e9819?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "gallery-13",
    title: "A final moment of peace",
    category: "The Space",
    description: "An invitation to leave the rush behind and settle into the moment.",
    image: "https://images.pexels.com/photos/37719629/pexels-photo-37719629.jpeg",
    secondaryImage: "https://images.unsplash.com/photo-1790244331027-6e66ac2fa953?auto=format&fit=crop&w=1800&q=85",
  },
] satisfies GalleryItem[];

export const galleryCategories = [
  "All",
  "The Space",
  "Treatments",
  "Wellness",
  "Beauty",
  "Rituals",
] as const;

