import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High School Batch 11",
  description: "Official website for the high school batch 11 alumni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
