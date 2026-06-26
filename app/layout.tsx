import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
