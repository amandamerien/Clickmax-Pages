import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer";
import { SectionCap } from "./components/layout/SectionCap";
import noiseFigma from "./assets/hero/noise-figma.png";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#111113] font-sans text-white antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          backgroundImage: `url('${noiseFigma}')`,
          backgroundSize: "1216px 376px",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />
      <SectionCap />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
