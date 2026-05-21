import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111113] font-sans text-white antialiased">
      <Navbar />
      <Home />
    </div>
  );
}
