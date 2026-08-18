import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "missjuneteenthusa.org";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Miss Juneteenth USA | Where History Meets Her Future";
  const description = "A national scholarship pageant celebrating the brilliance, purpose, leadership, and cultural pride of young African American women.";

  return {
    metadataBase,
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1536, height: 910, alt: "Miss Juneteenth USA - Where History Meets Her Future" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
