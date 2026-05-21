import playIcon from "../assets/hero/play-icon.svg";
import pedroPhoto from "../assets/results/pedro.webp";
import pedroHover from "../assets/results/pedro_hover.webp";
import leandroPhoto from "../assets/results/leandro.webp";
import leandroHover from "../assets/results/leandro_hover.webp";
import robsonPhoto from "../assets/results/robson.webp";
import robsonHover from "../assets/results/robson_hover.webp";
import gilbertoPhoto from "../assets/results/gilberto.webp";
import gilbertoHover from "../assets/results/gilberto_hover.webp";
import haylaPhoto from "../assets/results/hayla.webp";
import haylaHover from "../assets/results/hayla_hover.webp";

const experts = [
  {
    id: "pedro",
    name: "Pedro Lotz",
    revenue: "+R$ XX/mês",
    body: "Card de depoimento - texto curto sobre o resultado específico da migração + 60 dias done-with-you. Foco em fato auditável, não em adjetivo.",
    tags: ["Infoprodutor", "Nicho fitness", "+ 800K SEGUIDORES"],
    photo: pedroPhoto,
    photoHover: pedroHover,
  },
  {
    id: "leandro",
    name: "Leandro Rezende",
    revenue: "+R$ XX/mês",
    body: "Card de depoimento - texto curto sobre o resultado específico da migração + 60 dias done-with-you. Foco em fato auditável, não em adjetivo.",
    tags: ["Infoprodutor", "Nicho fitness", "+ 800K SEGUIDORES"],
    photo: leandroPhoto,
    photoHover: leandroHover,
  },
  {
    id: "robson",
    name: "Robson Souza",
    revenue: "+R$ XX/mês",
    body: "Card de depoimento - texto curto sobre o resultado específico da migração + 60 dias done-with-you. Foco em fato auditável, não em adjetivo.",
    tags: ["Infoprodutor", "Nicho fitness", "+ 800K SEGUIDORES"],
    photo: robsonPhoto,
    photoHover: robsonHover,
  },
  {
    id: "gilberto",
    name: "Gilberto Prado",
    revenue: "+R$ XX/mês",
    body: "Card de depoimento - texto curto sobre o resultado específico da migração + 60 dias done-with-you. Foco em fato auditável, não em adjetivo.",
    tags: ["Infoprodutor", "Nicho fitness", "+ 800K SEGUIDORES"],
    photo: gilbertoPhoto,
    photoHover: gilbertoHover,
  },
  {
    id: "hayla",
    name: "Hayla Rodrigues",
    revenue: "+R$ XX/mês",
    body: "Card de depoimento - texto curto sobre o resultado específico da migração + 60 dias done-with-you. Foco em fato auditável, não em adjetivo.",
    tags: ["Infoprodutor", "Nicho fitness", "+ 800K SEGUIDORES"],
    photo: haylaPhoto,
    photoHover: haylaHover,
  },
];

function ExpertCard({
  name,
  revenue,
  body,
  tags,
  photo,
  photoHover,
}: {
  name: string;
  revenue: string;
  body: string;
  tags: string[];
  photo: string | null;
  photoHover: string | null;
}) {
  return (
    <div className="group flex flex-col gap-6 rounded-[12px] border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] px-7 py-6 lg:h-[270px] lg:flex-row lg:items-center">
      {/* Photo */}
      <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-[12px] lg:h-[222px] lg:w-[179px]">
        {photo ? (
          <>
            <img
              src={photo}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
            />
            {photoHover && (
              <img
                src={photoHover}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            )}
          </>
        ) : (
          <div className="h-full w-full bg-[rgba(255,255,255,0.06)]" />
        )}
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <div className="flex flex-col gap-3">
          {/* Name + Revenue */}
          <div className="flex items-center gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <svg
                width="6.117"
                height="9.175"
                viewBox="0 0 6.11696 9.17477"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M1.65443 9.17477H0V0H1.65443V1.09022H3.30885V2.72554H4.96326V3.81576H6.11696V5.359H4.96326V6.44922H3.30885V8.08457H1.65443V9.17477Z" fill="white" />
              </svg>
              <span
                className="text-[18px] font-semibold leading-[1.4]"
                style={{
                  background: "linear-gradient(180deg, #fff 24.438%, #878789 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {name}
              </span>
            </div>
            <span
              className="shrink-0 whitespace-nowrap text-[16px] font-medium tracking-[0.24px] text-[#84dddb]"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {revenue}
            </span>
          </div>

          {/* Body */}
          <p className="text-[14px] font-normal leading-[1.4] text-[#b8b8b8]">{body}</p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[rgba(255,255,255,0.08)]" />

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag, i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span
                  className="text-[10px] text-[rgba(255,255,255,0.45)]"
                  style={{ fontFamily: "'Menlo', 'Courier New', monospace" }}
                >
                  ·
                </span>
              )}
              <span
                className="text-[10px] uppercase tracking-[1.8px] text-[rgba(255,255,255,0.45)]"
                style={{ fontFamily: "'Menlo', 'Courier New', monospace" }}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResultsSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        <div className="flex w-full max-w-[1210px] flex-col items-center gap-[46px] border-x border-[rgba(255,255,255,0.02)] pb-14 pt-24">

          {/* Header */}
          <div className="flex w-full max-w-[630px] flex-col items-center gap-3 px-6 lg:px-0">

            {/* Badge */}
            <div className="relative inline-flex shrink-0 overflow-hidden rounded-[99px] p-[2px]">
              <div
                className="absolute inset-[-200%] origin-center"
                style={{
                  background: "linear-gradient(114deg, #82FFFC 0%, #CDF8CE 100%)",
                  animation: "spin-border 3s linear infinite",
                }}
              />
              <div className="relative flex items-center gap-[5px] rounded-[99px] bg-[#111] px-4 py-2.5">
                <img src={playIcon} alt="" className="size-4 shrink-0" />
                <span className="font-['Geist'] text-[14px] font-light tracking-[0.42px] text-white whitespace-nowrap">
                  Resultados auditáveis
                </span>
              </div>
            </div>

            {/* Title */}
            <h2
              className="text-center text-[32px] lg:text-[52px] leading-[1.1] tracking-[-1.114px]"
              style={{
                fontFamily: "'Aspekta', sans-serif",
                fontWeight: 500,
                background: "linear-gradient(180deg, #fff 24.438%, #878789 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Quem já migrou — com números, não só elogios
            </h2>

            {/* Subtitle */}
            <p className="max-w-[572px] text-center font-['Inter'] text-[14px] lg:text-[16px] font-normal leading-[1.4] text-[#b8b8b8]">
              Cases auditados pelo time Bilhon. Cada número é verificável. Mostramos também o que NÃO bate o esperado, pra você ter expectativa real.
            </p>
          </div>

          {/* Cards column */}
          <div className="flex w-full flex-col gap-3 px-6 lg:max-w-[710px] lg:px-0">
            {experts.map((e) => (
              <ExpertCard key={e.id} {...e} />
            ))}

            {/* Transparency card */}
            <div className="flex flex-col gap-6 rounded-[12px] border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] px-7 py-6 lg:flex-row lg:items-center lg:px-[34px]">
              <p className="text-center text-[14px] font-normal leading-[1.4] text-[#b8b8b8] lg:min-w-0 lg:flex-1 lg:text-left lg:text-[16px]">
                Transparência total: de cada 100 operações que iniciam, ~6 pedem reembolso parcial nos 90 dias. 2 dessas 6 são por desalinhamento de ICP que conseguimos sinalizar na call. Por isso a call é gratuita: o ajuste tem que ser mútuo.
              </p>
              {/* Mobile: full-width CTA */}
              <button className="flex w-full items-center justify-center gap-3 rounded-[5px] border-2 border-[rgba(255,255,255,0.12)] bg-white px-3 py-[15px] lg:hidden">
                <span className="font-['Inter'] text-[13px] font-semibold uppercase text-black">
                  Começar Gratuitamente
                </span>
                <div className="relative size-[20px] overflow-hidden shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="absolute inset-0 m-auto">
                    <path d="M10.7087 7.73706H13.5867V10.5962H10.7087V7.73706Z" fill="#1f2123" />
                    <path d="M7.84976 10.5959H10.7089V13.4739H7.84976V10.5959Z" fill="#1f2123" />
                    <path d="M7.84976 4.85938H10.7089V7.73736H7.84976V4.85938Z" fill="#1f2123" />
                    <path d="M4.99026 13.4741H7.84944V16.3333H4.99026V13.4741Z" fill="#1f2123" />
                    <path d="M4.99026 2H7.84944V4.85918H4.99026V2Z" fill="#1f2123" />
                  </svg>
                </div>
              </button>
              {/* Desktop: icon-only button */}
              <button
                className="hidden h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[5px] border-2 border-[rgba(255,255,255,0.12)] bg-white p-[15px] lg:flex"
                aria-label="Saiba mais"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M10.7087 7.73706H13.5867V10.5962H10.7087V7.73706Z" fill="#1f2123" />
                  <path d="M7.84976 10.5959H10.7089V13.4739H7.84976V10.5959Z" fill="#1f2123" />
                  <path d="M7.84976 4.85938H10.7089V7.73736H7.84976V4.85938Z" fill="#1f2123" />
                  <path d="M4.99026 13.4741H7.84944V16.3333H4.99026V13.4741Z" fill="#1f2123" />
                  <path d="M4.99026 2H7.84944V4.85918H4.99026V2Z" fill="#1f2123" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
