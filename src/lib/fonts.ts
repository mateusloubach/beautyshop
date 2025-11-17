import { Encode_Sans_Semi_Expanded, Lavishly_Yours, Syne } from "next/font/google";

export const encodeSans = Encode_Sans_Semi_Expanded({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const lavishlyYours = Lavishly_Yours({
  variable: "--font-lavishly-yours",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

