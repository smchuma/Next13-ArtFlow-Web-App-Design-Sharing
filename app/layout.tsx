import { Footer, Navbar } from "@/components";
import "./global.css";

export const metadata = {
  title: "ArtFlow",
  description: "Showcase and Discover amazing projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
