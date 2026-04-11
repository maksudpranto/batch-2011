import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
