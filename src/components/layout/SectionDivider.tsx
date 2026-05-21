import lista2 from "../../assets/lista2.webp";

export function SectionDivider() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="relative h-[27px] w-full max-w-[1280px] overflow-hidden border-x border-[rgba(255,255,255,0.02)]">
        {/* inner column guide lines */}
        <div className="pointer-events-none absolute inset-0 mx-3 lg:mx-[37px] border-x border-[rgba(255,255,255,0.02)]" />
        <img
          src={lista2}
          alt=""
          width={1208}
          height={27}
          className="absolute left-1/2 top-0 h-[27px] w-[1208px] max-w-none -translate-x-1/2"
        />
      </div>
    </div>
  );
}
