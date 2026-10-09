import type { Metadata } from "next";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://nairobiwestlandsspa.com"),
  title: {
    default: "Nairobi Westlands Spa | Spa & Massage in Westlands, Nairobi",
    template: "%s | Nairobi Westlands Spa",
  },
  description:
    "Nairobi Westlands Spa in Westlands, Nairobi offers restorative massage, deep tissue massage, facials, body rituals, beauty treatments and personalised wellness experiences.",
  keywords: [
    "Nairobi Westlands Spa",
    "spa in Westlands",
    "spa in Nairobi",
    "spa Kenya",
    "spas in Nairobi",
    "Westlands spa",
    "massage Westlands",
    "massage Nairobi",
    "massage Kenya",
    "massage places in Nairobi",
    "massage places in Kenya",
    "deep tissue massage Nairobi",
    "restorative massage Nairobi",
    "full body massage Nairobi",
    "facial Nairobi",
    "facial treatments Nairobi",
    "body treatments Nairobi",
    "wellness spa Nairobi",
    "day spa Nairobi",
    "luxury spa Nairobi",
    "spa packages Nairobi",
    "spa for tourists in Nairobi",
    "wellness experience Nairobi",
  ],
  authors: [{ name: "Nairobi Westlands Spa" }],
  creator: "Nairobi Westlands Spa",
  publisher: "Nairobi Westlands Spa",
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: [
      {
        url: "https://images.pexels.com/photos/36482974/pexels-photo-36482974.jpeg?auto=compress&cs=tinysrgb&w=2200",
        alt: "Elegant African woman relaxing in a softly lit luxury spa environment",
      },
    ],
    type: "website",
    locale: "en_KE",
    siteName: "Nairobi Westlands Spa",
    title: "Nairobi Westlands Spa | Spa & Massage in Westlands, Nairobi",
    description:
      "A refined spa and wellness destination in Westlands, Nairobi offering restorative massage, deep tissue massage, facials, body rituals and beauty treatments.",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://images.pexels.com/photos/36482974/pexels-photo-36482974.jpeg?auto=compress&cs=tinysrgb&w=2200",
    ],
    title: "Nairobi Westlands Spa | Spa & Massage in Westlands, Nairobi",
    description:
      "Spa, massage, facials, body rituals and wellness experiences at Nairobi Westlands Spa in Westlands, Nairobi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
