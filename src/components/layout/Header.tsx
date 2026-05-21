import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <span className="text-lg font-bold text-brand-600 tracking-tight">
          ClickMax AI
        </span>
        <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
          <a href="#features" className="hover:text-brand-600 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-brand-600 transition-colors">
            Preços
          </a>
          <a href="#about" className="hover:text-brand-600 transition-colors">
            Sobre
          </a>
        </nav>
        <Button size="sm">Começar grátis</Button>
      </div>
    </header>
  );
}
