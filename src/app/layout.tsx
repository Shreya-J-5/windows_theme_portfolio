import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Jolapara — AI/ML Student & Full-Stack Developer Portfolio",
  description:
    "Interactive Windows 11 themed portfolio of Shreya Jolapara — AI/ML Student, Full-Stack Developer, and Creative Designer based in Ahmedabad, Gujarat.",
  keywords: [
    "Shreya Jolapara",
    "AI ML Student",
    "Portfolio",
    "Full-Stack Developer",
    "Python",
    "React",
    "TypeScript",
    "Machine Learning",
    "Windows 11",
  ],
  openGraph: {
    title: "Shreya Jolapara — AI/ML Student Portfolio",
    description:
      "Explore Shreya Jolapara's interactive Windows 11 themed portfolio featuring projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#202020] text-white antialiased">{children}</body>
    </html>
  );
}
