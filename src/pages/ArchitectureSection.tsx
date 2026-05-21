import playIcon from "../assets/hero/play-icon.svg";
import icon01 from "../assets/architecture/icon-01.webp";
import icon01Hover from "../assets/architecture/icon-01-hover.webp";
import icon02 from "../assets/architecture/icon-02.webp";
import icon02Hover from "../assets/architecture/icon-02-hover.webp";
import icon03 from "../assets/architecture/icon-03.webp";
import icon03Hover from "../assets/architecture/icon-03-hover.webp";
import icon04 from "../assets/architecture/icon-04.webp";
import icon04Hover from "../assets/architecture/icon-04-hover.webp";

const cards = [
  {
    icon: icon01,
    iconHover: icon01Hover,
    week: "SEMANA 1",
    title: "Diagnóstico e arquitetura",
    body: "Mapeamos sua operação atual, identificamos gargalos e desenhamos a arquitetura de agentes ideal para o seu modelo de negócio.",
  },
  {
    icon: icon02,
    iconHover: icon02Hover,
    week: "SEMANAS 2–3",
    title: "Migração e instalação dos agentes",
    body: "Nosso time executa a migração completa, instala e configura cada agente — você acompanha sem precisar tocar em código.",
  },
  {
    icon: icon03,
    iconHover: icon03Hover,
    week: "SEMANA 4",
    title: "Calibração e dados",
    body: "Ajustamos os parâmetros com base nos primeiros dados reais, garantindo que os agentes respondam exatamente como sua operação precisa.",
  },
  {
    icon: icon04,
    iconHover: icon04Hover,
    week: "+ 60 DIAS",
    title: "Done-with-you contínuo",
    body: "Acompanhamento ativo por 60 dias após a entrega: reuniões semanais, ajustes sob demanda e suporte direto com o time técnico.",
  },
];

function ProductCard({
  icon,
  iconHover,
  week,
  title,
  body,
}: {
  icon: string;
  iconHover: string;
  week: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group flex flex-col gap-6 rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#18181b] px-6 py-[34px] lg:flex-row lg:items-start lg:gap-6 lg:px-[34px]">
      {/* Icon with hover swap */}
      <div className="relative size-[39px] shrink-0 lg:size-[43px]">
        <img
          src={icon}
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 lg:opacity-100 lg:group-hover:opacity-0"
        />
        <img
          src={iconHover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100"
        />
      </div>

      {/* Text */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h3
            className="text-[18px] font-semibold leading-[1.3] tracking-[-0.664px] lg:text-[24px] lg:font-medium lg:leading-[1.2]"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "linear-gradient(270deg, #878789 57.212%, #fff 76.442%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h3>
          <p
            className="text-[16px] font-normal leading-[1.4] text-[#ababab]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {body}
          </p>
        </div>
        <span
          className="text-[16px] font-medium uppercase tracking-[-1px] text-[#84dddb] lg:text-[13px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {week}
        </span>
      </div>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <div id="operacao" className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        <div className="flex w-full max-w-[1210px] flex-col items-center gap-14 border-x border-[rgba(255,255,255,0.02)] pb-[56px] pt-24 lg:gap-[56px]">

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
                  Referência adicional
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
              Como eu penso sobre<br />arquitetura de operação
            </h2>

            {/* Subtitle */}
            <p className="max-w-[486px] text-center font-['Inter'] text-[14px] lg:text-[16px] font-normal leading-[1.4] text-[#b8b8b8]">
              Se você quer ver o raciocínio por trás do método antes da call, esse vídeo do meu canal cobre os princípios em 18 minutos.
            </p>
          </div>

          {/* Cards */}
          <div className="flex w-full flex-col gap-3 px-6 lg:max-w-[996px] lg:px-[55px]">
            {cards.map((card, i) => (
              <ProductCard key={i} {...card} />
            ))}
          </div>

          {/* CTA */}
          <button
            className="relative flex h-14 items-center gap-4 overflow-hidden rounded-full border border-[#d0fa00] pl-6 pr-3 py-2"
            style={{
              background: "linear-gradient(90deg, #fff 0%, #fff 100%)",
              boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.16), 0px 0px 0px 1px #fff",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse at 100% 100%, rgba(212,255,0,0.12) 0%, rgba(212,255,0,0) 100%)",
              }}
            />
            <span className="relative font-['Inter'] text-[14px] font-medium leading-[1.2] whitespace-nowrap text-[#1f2123]">
              Começar Gratuitamente
            </span>
            <div
              className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/[0.16]"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), #1f2123",
                boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.16), 0px 0px 0px 1px rgba(0,0,0,0.72)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M9.30471 3.8701L3.87012 9.3047M5.48952 3.84265L9.30471 3.86955L9.33216 7.6853"
                  stroke="white"
                  strokeWidth="1.02928"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}
