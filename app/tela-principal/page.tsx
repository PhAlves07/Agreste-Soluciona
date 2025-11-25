import Navbar2 from "@/components/Navbar2";
import SearchSection from "@/components/SearchSection";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-200">
      <Navbar2 />
      <SearchSection />
      <ServicesCarousel />
    </main>
  );
}
