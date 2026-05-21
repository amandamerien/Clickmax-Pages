import playIcon from "../assets/hero/play-icon.svg";

const faqs = [
  {
    n: "01",
    title: "Migração e instalação dos agentes",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
  {
    n: "02",
    title: "Quanto tempo eu preciso dedicar do meu lado?",
    body: "O mínimo possível. Em poucas respostas rápidas, entendemos sua operação e cuidamos do resto. O objetivo é tirar trabalho da sua rotina, não criar mais uma tarefa.",
  },
  {
    n: "03",
    title: "O que acontece com a operação atual durante a migração?",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
  {
    n: "04",
    title: "E se meu modelo de negócio for diferente do convencional?",
    body: "O mínimo possível. Em poucas respostas rápidas, entendemos sua operação e cuidamos do resto. O objetivo é tirar trabalho da sua rotina, não criar mais uma tarefa.",
  },
  {
    n: "05",
    title: "Em quanto tempo eu vejo resultado?",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
  {
    n: "06",
    title: "O que vai estar 100% pronto no dia 30?",
    body: "O mínimo possível. Em poucas respostas rápidas, entendemos sua operação e cuidamos do resto. O objetivo é tirar trabalho da sua rotina, não criar mais uma tarefa.",
  },
  {
    n: "07",
    title: "Vocês ensinam o time interno a operar depois?",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
  {
    n: "08",
    title: "Quantas pessoas do time trabalham no meu caso?",
    body: "O mínimo possível. Em poucas respostas rápidas, entendemos sua operação e cuidamos do resto. O objetivo é tirar trabalho da sua rotina, não criar mais uma tarefa.",
  },
  {
    n: "09",
    title: "Estou com pouco tempo agora, posso começar mês que vem?",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
  {
    n: "10",
    title: "E se eu não gostar do trabalho durante os 30 dias?",
    body: "O mínimo possível. Em poucas respostas rápidas, entendemos sua operação e cuidamos do resto. O objetivo é tirar trabalho da sua rotina, não criar mais uma tarefa.",
  },
  {
    n: "11",
    title: "Já tenho time técnico — vocês integram ou substituem?",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
  {
    n: "12",
    title: "Meu nicho é regulado (saúde, finanças, advocacia) — funciona?",
    body: "O mínimo possível. Em poucas respostas rápidas, entendemos sua operação e cuidamos do resto. O objetivo é tirar trabalho da sua rotina, não criar mais uma tarefa.",
  },
  {
    n: "13",
    title: "Por que o range de R$10k a R$30k?",
    body: "Você não precisa parar sua operação nem aprender tudo sozinho. Nosso time acompanha a migração, organiza os dados e deixa a plataforma pronta pra você começar com clareza.",
  },
];

function FaqCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-[12px] border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] p-8 min-w-0">
      {/* Número + Título */}
      <div className="flex items-center gap-3">
        <span
          className="shrink-0 text-[#84dddb] text-[20.473px] font-medium leading-none tracking-[0.24px]"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {n}
        </span>
        <span
          className="text-[16px] font-semibold leading-[1.4]"
          style={{
            background: "linear-gradient(180deg, #fff 24.438%, #878789 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </span>
      </div>
      {/* Corpo */}
      <p className="text-[16px] font-normal leading-[1.4] text-[#b8b8b8]">
        {body}
      </p>
    </div>
  );
}

export function FaqSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        <div className="flex w-full max-w-[1210px] flex-col items-center gap-[46px] border-x border-[rgba(255,255,255,0.02)] pt-24 pb-14">

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
                  Perguntas comuns
                </span>
              </div>
            </div>

            {/* Título */}
            <h2
              className="text-center text-[clamp(28px,4vw,52px)] leading-[1.1] tracking-[-1.114px]"
              style={{
                fontFamily: "'Aspekta', sans-serif",
                fontWeight: 450,
                background: "linear-gradient(180deg, #fff 24.438%, #878789 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tudo que você quer<br />saber antes da call
            </h2>
          </div>

          {/* Grid de cards */}
          <div className="flex w-full flex-col gap-3 px-6 lg:px-[55px]">
            {/* Pares de cards */}
            {Array.from({ length: Math.ceil(faqs.length / 2) }, (_, i) => {
              const left = faqs[i * 2];
              const right = faqs[i * 2 + 1];
              return (
                <div key={i} className="flex flex-col gap-3 lg:flex-row">
                  <FaqCard {...left} />
                  {right && <FaqCard {...right} />}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
