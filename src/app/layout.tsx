import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { defaultLocale, isLocale } from "@/i18n/config";

/**
 * Typography
 * - Display: Fraunces — soft optical serif for brand & section titles
 * - Body/UI: Manrope — geometric sans with strong Latin-ext (TR) support
 */

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edanam",
  description: "ERP consulting, Excel automation, and digital products.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("NEXT_LOCALE")?.value;
  const lang = raw && isLocale(raw) ? raw : defaultLocale;

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn("h-full font-sans", manrope.variable, fraunces.variable)}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
