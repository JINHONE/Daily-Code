import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@repo/ui/utils";
import { Providers, ThemeProvider } from "../components/Providers";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dailycode",
  description: "Code daily",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
