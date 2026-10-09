export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  specialties: string[];
  image?: string;
};

export const teamMembers = [
  {
    slug: "camilla",
    name: "Camilla",
    role: "Lead Deep Tissue & Hot Stone",
    experience: "8 years",
    description: "Camilla focuses on deep-tissue techniques and hot-stone work for guests seeking focused care for shoulder and lower-back tension.",
    specialties: ["Deep Tissue", "Hot Stone", "Sports"],
    image: "https://images.unsplash.com/photo-1637457252556-cab872e5af6b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "yoki",
    name: "Yoki",
    role: "Aromatherapy & Swedish",
    experience: "6 years",
    description: "Yoki combines aromatherapy with a flowing Swedish massage approach to help guests unwind and settle into a slower pace.",
    specialties: ["Swedish", "Aromatherapy", "Couples"],
    image: "https://images.unsplash.com/photo-1645799279716-00068f7c9764?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "jasmine-mwangi",
    name: "Jasmine Mwangi",
    role: "Tantra & Full Body",
    experience: "7 years",
    description: "Jasmine takes an intuitive approach to full-body sessions, tailoring pressure and pace around each guest's relaxation preferences.",
    specialties: ["Tantra", "Full Body", "Relaxation"],
    image: "https://images.unsplash.com/photo-1664629153316-15c342bc2773?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "nia",
    name: "Nia",
    role: "Couples & Four Hands",
    experience: "5 years",
    description: "Nia coordinates couples and four-hands sessions with a considered rhythm for guests sharing a treatment suite.",
    specialties: ["Couples", "Four Hands", "Swedish"],
  },
  {
    slug: "aaliyah",
    name: "Aaliyah",
    role: "Hot Stone & Back Care",
    experience: "6 years",
    description: "Aaliyah focuses on back and neck treatments alongside heated-stone techniques for guests seeking targeted relaxation.",
    specialties: ["Hot Stone", "Back & Neck", "Deep Tissue"],
  },
  {
    slug: "jenny-meri",
    name: "Jenny Meri",
    role: "Body to Body & Relaxation",
    experience: "5 years",
    description: "Jenny focuses on warm-oil body treatments and full-body relaxation, with an unhurried approach to each session.",
    specialties: ["Body to Body", "Full Body", "Relaxation"],
    image: "https://images.unsplash.com/photo-1543698557-2028583eb451?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "alexandra",
    name: "Alexandra",
    role: "Full Body & Relaxation",
    experience: "5 years",
    description: "Alexandra offers full-body sessions with an attentive pace designed around relaxation and restoration.",
    specialties: ["Full Body", "Relaxation", "Wellness"],
    image: "https://images.unsplash.com/photo-1610892075063-00e6c0dc44c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "kendra",
    name: "Kendra",
    role: "Swedish & Couples",
    experience: "7 years",
    description: "Kendra focuses on classic Swedish massage and couples sessions, creating a calm flow throughout the treatment.",
    specialties: ["Swedish", "Couples", "Aromatherapy"],
  },
  {
    slug: "lia-lia",
    name: "Lia Lia",
    role: "Deep Tissue & Recovery",
    experience: "6 years",
    description: "Lia Lia focuses on firm deep-tissue techniques and post-travel recovery for guests who prefer a more targeted massage.",
    specialties: ["Deep Tissue", "Sports", "Back & Neck"],
    image: "https://images.unsplash.com/photo-1684598273898-e831ed1b9119?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "tasha",
    name: "Tasha",
    role: "Aromatherapy & Full Body",
    experience: "5 years",
    description: "Tasha pairs aromatic blends with flowing full-body techniques and gentle stretching.",
    specialties: ["Aromatherapy", "Full Body", "Relaxation"],
  },
  {
    slug: "lulu",
    name: "Lulu",
    role: "Hot Stone & Couples",
    experience: "7 years",
    description: "Lulu focuses on hot-stone treatments and couples sessions, combining heated-stone techniques with an attentive pace.",
    specialties: ["Hot Stone", "Couples", "Swedish"],
  },
  {
    slug: "sahara",
    name: "Sahara",
    role: "Aromatherapy & Wellness",
    experience: "6 years",
    description: "Sahara takes a wellness-focused approach, pairing aromatic rituals with flowing treatments and restorative relaxation.",
    specialties: ["Aromatherapy", "Wellness", "Relaxation"],
  },
] satisfies TeamMember[];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}


