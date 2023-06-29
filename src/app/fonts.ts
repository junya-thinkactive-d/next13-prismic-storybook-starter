import { Courgette, Noto_Sans_JP } from "next/font/google";

export const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-notojp",
});

export const courgette = Courgette({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-courgette",
});
