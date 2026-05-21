import playIcon from "../assets/hero/play-icon.svg";
import noiseTexture from "../assets/hero/noise-texture.png";

export function HeroSection() {
  return (
    /* Outer: px-3 mobile / px-20 desktop */
    <div className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      {/* Inner: px-3 mobile / px-[37px] desktop */}
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        {/* Content: py-14 gap-6 mobile / pt-24 pb-14 gap-[46px] desktop */}
        <div className="flex w-full max-w-[1210px] flex-col items-center gap-6 border-x border-[rgba(255,255,255,0.02)] py-14 lg:gap-[46px] lg:pb-14 lg:pt-24">

          {/* Text group: px-[18px] mobile / no padding desktop, max-w-[630px] desktop */}
          <div className="flex w-full flex-col items-center gap-3 px-[18px] lg:max-w-[630px] lg:px-0">

            {/* Badge pill — borda com gradient girando */}
            <div className="relative inline-flex shrink-0 overflow-hidden rounded-[99px] p-[2px]">
              {/* Gradient layer que gira */}
              <div
                className="absolute inset-[-200%] origin-center"
                style={{
                  background: "linear-gradient(114deg, #82FFFC 0%, #CDF8CE 100%)",
                  animation: "spin-border 3s linear infinite",
                }}
              />
              {/* Conteúdo com fundo escuro sobre o gradient */}
              <div className="relative flex items-center gap-[5px] rounded-[99px] bg-[#111] px-4 py-2.5">
                <img src={playIcon} alt="" className="size-4 shrink-0" />
                <span className="font-['Geist'] text-[14px] font-light tracking-[0.42px] text-white">
                  Próximo passo · Pré-call
                </span>
              </div>
            </div>

            {/* Título: fluid mobile / 52px desktop */}
            <h1
              className="w-full text-center leading-[1.1] tracking-[-1.114px] text-[32px] lg:text-[52px]"
              style={{
                fontFamily: "'Aspekta', sans-serif",
                fontWeight: 500,
                background: "linear-gradient(180deg, #fff 24.438%, #878789 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <span className="block whitespace-nowrap">Aplicação recebida. Antes</span>
              <span className="block whitespace-nowrap">da call, assista 12 minutos.</span>
            </h1>

            {/* Subtítulo: 12px mobile / 16px desktop, max-w-[549px] desktop */}
            <p className="w-full text-center font-['Inter'] font-normal leading-[1.4] text-[#b8b8b8] text-[12px] lg:max-w-[549px] lg:text-[16px]">
              Gravei essa apresentação completa pra você ver exatamente como eu
              desenho a estratégia, quais agentes você recebe, qual o cronograma
              real, e como funciona a garantia. Vale 70% do trabalho da call comigo.
            </p>
          </div>

          {/* Video card wrapper: px-[18px] mobile / no padding desktop */}
          <div className="w-full px-[18px] lg:px-0">
            {/* Animated border wrapper */}
            <div className="relative mx-auto h-[222px] w-full overflow-hidden rounded-[18.422px] p-[1px] lg:h-[536px] lg:w-[910px] lg:max-w-full">

              {/* Rotating comet light */}
              <div
                className="pointer-events-none absolute inset-[-100%] origin-center"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, transparent 310deg, rgba(132,221,219,0.15) 330deg, rgba(132,221,219,0.6) 342deg, rgba(255,255,255,0.9) 350deg, rgba(132,221,219,0.4) 356deg, transparent 360deg)",
                  animation: "spin-border 6s linear infinite",
                }}
              />

              {/* Inner card */}
              <div className="absolute inset-[1px] flex flex-col items-center justify-center overflow-hidden rounded-[17.5px] px-3 py-2">

                {/* Background layers */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[17.5px]">
                  <div className="absolute inset-0 rounded-[17.5px] bg-[rgba(255,255,255,0.05)]" />
                  <div
                    className="absolute inset-0 rounded-[17.5px] mix-blend-plus-lighter"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 910 536' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(71.312 57.766 -97.218 141.23 258.12 30.403)'><stop stop-color='rgba(132,221,219,0)' offset='0.34371'/><stop stop-color='rgba(132,221,219,0.13547)' offset='0.74455'/><stop stop-color='rgba(132,221,219,1)' offset='1'/></radialGradient></defs></svg>\")",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-[17.5px] mix-blend-plus-lighter"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 910 536' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-83.768 -61.632 34.522 -55.216 910 616.32)'><stop stop-color='rgba(132,221,219,1)' offset='0'/><stop stop-color='rgba(132,221,219,0.64)' offset='0.17308'/><stop stop-color='rgba(132,221,219,0.13547)' offset='0.48077'/><stop stop-color='rgba(132,221,219,0)' offset='0.74038'/></radialGradient></defs></svg>\")",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-[17.5px] mix-blend-plus-lighter"
                    style={{
                      backgroundImage: "linear-gradient(157.636deg, rgba(132,221,219,0) 64.987%, rgba(132,221,219,0.117) 84.667%, rgba(132,221,219,0.387) 93.328%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-[17.5px] mix-blend-overlay"
                    style={{
                      backgroundImage: `url('${noiseTexture}')`,
                      backgroundSize: "116px 76px",
                      backgroundPosition: "top left",
                    }}
                  />
                </div>

                {/* Inner content */}
                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[13px] w-full bg-[#131316]">
                  <span className="font-['Inter'] font-semibold tracking-[-0.99px] text-white/[0.18] text-[12px] lg:text-[21px]">
                    EMBED DO PANDA
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-[18px]">
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

            <p className="text-center font-['Inter'] text-[12px] font-normal leading-[1.4] text-[#b2b2b3]">
              30 min · Zoom · agenda no horário de Brasília
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
