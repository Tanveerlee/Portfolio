import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { MotionConfig } from "framer-motion";

export const metadata: Metadata = {
  title: "Tanveer Hussain | Senior QA Automation Engineer",
  description:
    "Senior Software Quality Assurance Engineer with 6+ years of experience in manual and automation testing. Expert in Playwright, Cypress, Postman, JMeter and Agile methodologies.",
  keywords: [
    "QA Engineer",
    "Automation Testing",
    "Playwright",
    "Cypress",
    "Software Testing",
    "Postman",
    "JMeter",
    "Agile",
  ],
  authors: [{ name: "Tanveer Hussain" }],
  openGraph: {
    title: "Tanveer Hussain | Senior QA Automation Engineer",
    description:
      "Senior Software Quality Assurance Engineer with 6+ years of experience. Playwright, Cypress, API & Performance Testing expert.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanveer Hussain",
  jobTitle: "Senior QA Automation Engineer",
  url: "https://tanveer-sqa.vercel.app",
  email: "tanveerashraf02@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  sameAs: [
    "https://linkedin.com/in/tanveer-hussain-sqa",
    "https://github.com/Tanveerlee",
  ],
  knowsAbout: ["Playwright", "Cypress", "Postman", "JMeter", "CI/CD", "API Testing", "Agile"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--section-bg-1)] text-white antialiased min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
