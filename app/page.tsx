import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-200">
      <Navbar />
      <SearchSection />
      <ServicesCarousel />
    </main>
  );
}
