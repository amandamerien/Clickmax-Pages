import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer";
import { SectionCap } from "./components/layout/SectionCap";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111113] font-sans text-white antialiased">
      <SectionCap />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
