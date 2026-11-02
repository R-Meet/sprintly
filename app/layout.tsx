import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets:['latin'],
  variable:'--font-sans'
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sprintly — Project Management Made Simple",
    template: "%s | Sprintly",
  },
  description:
    "Plan projects, manage tasks, organize sprints, and collaborate with your team. Keep your work organized and move projects forward with Sprintly.",
  applicationName: "Sprintly",
  keywords: [
    "Sprintly",
    "project management",
    "task management",
    "team collaboration",
    "sprint planning",
    "project tracking",
    "Agile project management",
  ],
  openGraph: {
    title: "Sprintly — Project Management Made Simple",
    description:
      "Organize your projects, manage tasks, plan sprints, and keep your team moving forward with Sprintly.",
    siteName: "Sprintly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprintly — Project Management Made Simple",
    description:
      "Plan projects, manage tasks, and collaborate with your team — all in one place.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", outfit.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
