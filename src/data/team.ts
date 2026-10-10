export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  specialties: string[];
  image?: string;
  gallery?: string[];
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
    gallery: [
      "https://images.unsplash.com/photo-1637457252629-d1166eec67e3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1637457348287-cb22ff9ad461?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1642349921061-5b0c605c613f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1637457347623-03e275806594?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1637457346052-c48189e3dd35?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1637457348673-dff5542e531b?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "yoki",
    name: "Yoki",
    role: "Aromatherapy & Swedish",
    experience: "6 years",
    description: "Yoki combines aromatherapy with a flowing Swedish massage approach to help guests unwind and settle into a slower pace.",
    specialties: ["Swedish", "Aromatherapy", "Couples"],
      gallery: [
        "https://images.unsplash.com/photo-1645799281063-be3fccd4b5ec?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1616896344525-b0b2fa16d386?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1645799279651-cac3e7af84b2?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1688136729081-932f76be65c7?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1688136729503-ef81c256dd0b?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1645799018539-dfa08aa97005?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1645799018510-50af6655ba18?auto=format&fit=crop&w=1200&q=85",
      ],
    image: "https://images.unsplash.com/photo-1645799279716-00068f7c9764?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "jasmine-mwangi",
    name: "Jasmine Mwangi",
    role: "Tantra & Full Body",
    experience: "7 years",
    description: "Jasmine takes an intuitive approach to full-body sessions, tailoring pressure and pace around each guest's relaxation preferences.",
    specialties: ["Tantra", "Full Body", "Relaxation"],
    image: "https://images.unsplash.com/photo-1664629153345-3bb44e9c1cb1?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1664629153345-3bb44e9c1cb1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1664629153252-9eb12c921438?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1664629153222-a5a66e6c961f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1664629153251-ba6873479d15?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1664629153284-d178cc713317?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1636581563867-19c6594eaece?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "nia",
    name: "Nia",
    role: "Couples & Four Hands",
    experience: "5 years",
    description: "Nia coordinates couples and four-hands sessions with a considered rhythm for guests sharing a treatment suite.",
    specialties: ["Couples", "Four Hands", "Swedish"],
    image: "https://images.unsplash.com/photo-1785273925279-5c5c1b6a633e?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1785273925279-5c5c1b6a633e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273925252-e91fc690eac0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273924999-6c6f08442d1f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785088602399-ada20c21caf2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273924972-27667ebfb902?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785088601839-2f592879383c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273926065-d8e61a4c55dc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273925871-b5aed2c403e8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273925298-a6c2700803ed?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785273925378-e172f50b0836?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1785088601467-5b70946690b3?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "aaliyah",
    name: "Aaliyah",
    role: "Hot Stone & Back Care",
    experience: "6 years",
    description: "Aaliyah focuses on back and neck treatments alongside heated-stone techniques for guests seeking targeted relaxation.",
    specialties: ["Hot Stone", "Back & Neck", "Deep Tissue"],
    image: "https://images.unsplash.com/photo-1783013953094-249d033e3cf9?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1783013953094-249d033e3cf9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1783013953015-aaf234e7ac27?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1783013953144-c764339c3b27?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1783013952887-aaec97f086d6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1783013952839-cda1c697e275?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1783013953311-b694da1bf26c?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "jenny-meri",
    name: "Jenny Meri",
    role: "Full Body & Relaxation",
    experience: "5 years",
    description: "Jenny focuses on warm-oil body treatments and full-body relaxation, with an unhurried approach to each session.",
    specialties: ["Full Body", "Relaxation"],
    image: "https://images.unsplash.com/photo-1543698557-2028583eb451?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1543698557-5608887b68e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1543698522-075267da6523?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1543698523-d56bf53e0ffe?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591765015426-f27146663ee4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1543698523-2f85a21eb3d4?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "alexandra",
    name: "Alexandra",
    role: "Full Body & Relaxation",
    experience: "5 years",
    description: "Alexandra offers full-body sessions with an attentive pace designed around relaxation and restoration.",
    specialties: ["Full Body", "Relaxation", "Wellness"],
    image: "https://images.unsplash.com/photo-1610892075063-00e6c0dc44c3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1610892074968-8437c69fcc36?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1610892074937-47bf2e658625?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1610892074942-8cef2e4d638a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1610892074832-9c11008ac7da?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "kendra",
    name: "Kendra",
    role: "Swedish & Couples",
    experience: "7 years",
    description: "Kendra focuses on classic Swedish massage and couples sessions, creating a calm flow throughout the treatment.",
    specialties: ["Swedish", "Couples", "Aromatherapy"],
    image: "https://images.unsplash.com/photo-1696340868121-40127ac0a165?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1696340868121-40127ac0a165?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1696339925544-2799e6210142?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1696341036676-443c7cb92492?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1696341258777-b99e3eeb202e?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "lia-lia",
    name: "Lia Lia",
    role: "Deep Tissue & Recovery",
    experience: "6 years",
    description: "Lia Lia focuses on firm deep-tissue techniques and post-travel recovery for guests who prefer a more targeted massage.",
    specialties: ["Deep Tissue", "Sports", "Back & Neck"],
    gallery: [
      "https://images.unsplash.com/photo-1684598273456-b8de826418c9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1684598273432-8f8e882cd16f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1684598273539-b893a21517e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1684598273510-1ac580fc3bb7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1684598273412-04e8dfc9276d?auto=format&fit=crop&w=1200&q=85",
    ],
    image: "https://images.unsplash.com/photo-1684598273898-e831ed1b9119?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "natasha-g",
    name: "Natasha G",
    role: "Aromatherapy & Full Body",
    experience: "5 years",
    description: "Natasha G pairs aromatic blends with flowing full-body techniques and gentle stretching.",
    specialties: ["Aromatherapy", "Full Body", "Relaxation"],
    image: "https://images.unsplash.com/photo-1700757407653-721348f7abae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1700156481962-a561917f6677?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1699106674693-589465a2aa62?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1699107769235-902ff97e93f3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1700156246325-65bbb9e1dc0d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1700757407653-721348f7abae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
  },
  {
    slug: "lulu",
    name: "Lulu",
    role: "Hot Stone & Couples",
    experience: "7 years",
    description: "Lulu focuses on hot-stone treatments and couples sessions, combining heated-stone techniques with an attentive pace.",
    specialties: ["Hot Stone", "Couples", "Swedish"],
    image: "https://images.unsplash.com/photo-1686173555597-c6d198d6860e?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1686173555597-c6d198d6860e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1686173555071-761414855453?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1686173552869-e3933af2e949?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1686173554823-0e25d1d6e45f?auto=format&fit=crop&w=1200&q=85"
    ],
  },
  {
    slug: "sahara",
    name: "Sahara",
    role: "Aromatherapy & Wellness",
    experience: "6 years",
    description: "Sahara takes a wellness-focused approach, pairing aromatic rituals with flowing treatments and restorative relaxation.",
    specialties: ["Aromatherapy", "Wellness", "Relaxation"],
    image: "https://images.unsplash.com/photo-1789496771683-3d4020c7d12b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    gallery: [
        "https://images.unsplash.com/photo-1789496771683-3d4020c7d12b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        "https://images.unsplash.com/photo-1789812792288-e13fabce9773?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789496770611-112fd7d9a7fb?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789812792612-ff1685b9be73?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789812792250-23eecf5cf32f?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789496771606-dc1d69639a39?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789496770797-3b1b84e3698b?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789496771660-163c7635d0af?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789496770800-d729c2874992?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789812792218-8ae307e9b8c7?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789496771512-71f1b2ffbffc?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1789812792281-67c0079448f7?auto=format&fit=crop&w=1200&q=85"
      ],
  },
] satisfies TeamMember[];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}





