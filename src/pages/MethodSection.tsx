import playIcon from "../assets/hero/play-icon.svg";
import noiseTexture from "../assets/hero/noise-texture.png";

export function MethodSection() {
  return (
    <div id="como-funciona" className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        <div className="flex w-full max-w-[1210px] flex-col items-center border-x border-[rgba(255,255,255,0.02)] pb-[56px] pt-24">

          <div className="flex w-full flex-col items-center gap-8 px-6 lg:gap-[28px] lg:px-[55px]">

            {/* Header */}
            <div className="flex w-full max-w-[630px] flex-col items-center gap-3">

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
                    Como funciona
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
                O método validado e destrinchado em 4 fases
              </h2>

              {/* Subtitle */}
              <p className="max-w-[486px] text-center font-['Inter'] text-[14px] lg:text-[16px] font-normal leading-[1.4] text-[#b8b8b8]">
                Cronograma cravado. Você sabe exatamente o que tá acontecendo, quando, e por quem — semana a semana.
              </p>
            </div>

            {/* Video card */}
            <div className="w-full lg:px-0">
              {/* Animated border wrapper */}
              <div className="relative mx-auto h-[222px] w-full overflow-hidden rounded-[18.422px] p-[1px] lg:h-[536px] lg:w-[910px] lg:max-w-full">

                {/* Rotating comet light */}
                <div
                  className="pointer-events-none absolute inset-[-100%] origin-center"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 350deg, rgba(132,221,219,0.25) 355deg, rgba(255,255,255,0.95) 358deg, rgba(132,221,219,0.15) 359.5deg, transparent 360deg)",
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

          </div>
        </div>
      </div>
    </div>
  );
}
