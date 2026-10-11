import { pagePhotography } from "@/data/photography";

export const homeImages = {
  hero: pagePhotography.home.hero.src,
  massage: pagePhotography.home.massage.src,
  facial: pagePhotography.home.facial.src,
  body: pagePhotography.home.body.src,
  package: pagePhotography.home.package.src,
  interior: pagePhotography.home.interior.src,
  detail: pagePhotography.home.detail.src,
  galleryReception: pagePhotography.home.homeGallery.reception.src,
  galleryWellness: pagePhotography.home.homeGallery.wellness.src,
  galleryPortrait: pagePhotography.home.homeGallery.portrait.src,
  galleryQuiet: pagePhotography.home.homeGallery.quiet.src,
} as const;

export const treatmentPreview = [
  {
    number: "01",
    category: "Massage",
    title: "Restorative Massage",
    description:
      "Unhurried bodywork designed to release tension, soften the senses and leave you feeling grounded.",
    duration: "60 · 90 min",
    image: homeImages.massage,
  },
  {
    number: "02",
    category: "Facial",
    title: "Glow Renewal",
    description:
      "A refined facial ritual combining cleansing, nourishment and gentle touch for beautifully refreshed skin.",
    duration: "60 min",
    image: homeImages.facial,
  },
  {
    number: "03",
    category: "Body Ritual",
    title: "Silk & Stone",
    description:
      "An indulgent full-body ritual bringing together exfoliation, massage and deeply nourishing care.",
    duration: "90 min",
    image: homeImages.body,
  },
] as const;

export const experienceCards = [
  {
    number: "01",
    title: "Restore",
    description:
      "Thoughtful treatments designed to help the body release, settle and breathe again.",
  },
  {
    number: "02",
    title: "Renew",
    description:
      "Beauty and body rituals created around how you want to feel when you leave.",
  },
  {
    number: "03",
    title: "Return",
    description:
      "A quieter mind, a softer body and a renewed connection with yourself.",
  },
] as const;

export const packagePreview = {
  eyebrow: "Signature Escape",
  title: "Make space for yourself.",
  description:
    "Take time for yourself with a thoughtful combination of treatments and restorative touches, tailored to the experience you choose.",
  image: homeImages.package,
  inclusions: [
    "Welcome ritual",
    "Full-body massage",
    "Signature facial",
    "Restorative tea",
  ],
} as const;


export const galleryItems = [
  {
    label: "A calm treatment room",
    image: homeImages.galleryReception,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Hot-stone massage",
    image: homeImages.massage,
    className: "md:row-span-2",
  },
  {
    label: "Advanced facial care",
    image: homeImages.facial,
    className: "",
  },
  {
    label: "Restorative foot massage",
    image: homeImages.body,
    className: "",
  },
  {
    label: "A soothing facial mask",
    image: homeImages.interior,
    className: "md:col-span-2",
  },
  {
    label: "Bathing and stillness",
    image: homeImages.galleryQuiet,
    className: "",
  },
  {
    label: "Candles and aromatherapy",
    image: homeImages.galleryWellness,
    className: "",
  },
  {
    label: "Personalised beauty care",
    image: homeImages.galleryPortrait,
    className: "",
  },
] as const;


