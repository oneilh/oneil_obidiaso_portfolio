import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DoodleBackground } from "@/components/doodle-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O'Neil Obidiaso | Product Builder",
  description: "Portfolio of O'Neil Obidiaso, a developer building products, not just websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DoodleBackground />
          <div className="relative z-10 flex flex-col flex-grow">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
