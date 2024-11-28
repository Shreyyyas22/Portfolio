import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page"
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://shreyashwagh.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Full Stack Developer`,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Shreyash Wagh",
    "shreyash wagh",
    "SHREYASH WAGH",
    "shreyash",
    "SHREYASH",
    "wagh",
    "WAGH",
    "web developer",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [
    {
      name: "Shreyash Wagh",
      url: "https://github.com/Shreyyyas22",
    },
  ],
  creator: "Shreyash Wagh",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@shreyyyas22",
  },
  icons: {
    icon: "/favicon.ico",
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}