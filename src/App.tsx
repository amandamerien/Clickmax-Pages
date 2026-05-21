import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer";
import { SectionCap } from "./components/layout/SectionCap";
import noiseTexture from "./assets/hero/noise-texture.png";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#111113] font-sans text-white antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url('${noiseTexture}')`,
          backgroundSize: "116px 76px",
          backgroundRepeat: "repeat",
        }}
      />
      <SectionCap />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
