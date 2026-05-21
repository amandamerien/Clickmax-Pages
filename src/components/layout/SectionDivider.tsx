import lista2 from "../../assets/lista2.webp";

export function SectionDivider() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        <div className="relative h-[27px] w-full max-w-[1210px] overflow-hidden border-x border-[rgba(255,255,255,0.02)]">
          <img
            src={lista2}
            alt=""
            width={1216}
            height={27}
            className="absolute left-0 top-0 h-[27px] w-[1216px] max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
