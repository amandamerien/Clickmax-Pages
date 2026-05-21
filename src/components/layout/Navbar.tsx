import logoClickmax from "../../assets/navbar/logoclickmax.webp";
import aceleradorBadge from "../../assets/navbar/acelerador.webp";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const duration = 1400;
  const startTime = performance.now();
  function easeInOutQuart(t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }
  function step(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + (end - start) * easeInOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const navLinks = [
  { label: "Perguntas frequentes", href: "#faq" },
  { label: "Resultados", href: "#resultados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Operação", href: "#operacao" },
];

function LogoBadge() {
  return (
    <div className="flex items-end gap-2">
      <img
        src={logoClickmax}
        alt="ClickMax"
        className="h-[19px] w-[104px] object-contain"
      />
      <img
        src={aceleradorBadge}
        alt="Acelerador IA"
        className="h-[18px] w-auto object-contain"
      />
    </div>
  );
}

export function Navbar() {
  return (
    <>
      {/* Mobile: só logo centralizado, px-3 */}
      <div className="flex w-full flex-col items-center justify-center px-3 lg:hidden">
        <div className="flex w-full max-w-[1280px] flex-col items-start px-3 border-x border-[rgba(255,255,255,0.02)]">
          <div className="flex w-full items-center justify-center gap-[46px] border border-[rgba(255,255,255,0.02)] p-6">
            <LogoBadge />
          </div>
        </div>
      </div>

      {/* Desktop: logo + nav + CTA, px-20 */}
      <div className="hidden w-full flex-col items-center justify-center px-20 lg:flex">
        <div className="flex w-full max-w-[1280px] flex-col items-start px-[37px] border-x border-[rgba(255,255,255,0.02)]">
          <div className="flex w-full max-w-[1210px] items-center justify-between border border-[rgba(255,255,255,0.02)] p-6">

            <LogoBadge />

            <nav className="flex items-center gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="px-3 py-2.5 text-[12px] font-normal leading-[1.4] text-[#b2b2b3] transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button className="relative flex h-[33px] items-center justify-center gap-2 overflow-hidden rounded-full bg-white pl-[19.76px] pr-[19.25px] py-2">
              <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.57)]" />
              <span className="relative text-[12px] font-medium leading-[1.4] text-[#131313]">
                Agendar minha call de 30 min
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.175"
                height="13.175"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="relative shrink-0"
              >
                <path
                  d="M9.30471 3.8701L3.87012 9.3047M5.48952 3.84265L9.30471 3.86955L9.33216 7.6853"
                  stroke="#1F2123"
                  strokeWidth="1.02928"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
