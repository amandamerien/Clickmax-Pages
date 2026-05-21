import logoClickmax from "../../assets/navbar/logoclickmax.webp";
import aceleradorBadge from "../../assets/navbar/acelerador.webp";

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start border-x border-[rgba(255,255,255,0.02)] px-3 lg:px-[37px]">
        <div className="flex w-full max-w-[1210px] flex-col gap-6 border border-[rgba(255,255,255,0.02)] p-6">

          {/* Top row: logo + links */}
          <div className="flex w-full items-center justify-between">
            {/* Logo + badge */}
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

            {/* Links */}
            <div className="flex items-center">
              <a
                href="#"
                className="px-3 py-2.5 text-[12px] font-normal leading-[1.4] text-[#b2b2b3] transition-colors hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Privacidade
              </a>
              <a
                href="#"
                className="px-3 py-2.5 text-[12px] font-normal leading-[1.4] text-[#b2b2b3] transition-colors hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Termos
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            className="text-[12px] font-normal leading-[1.4] text-[#343436]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Aviso de Renda: Todos os resultados mencionados nesta página (incluindo R$128 milhões em campanha, casos de clientes específicos como Pedro Lotz, R$400 mil cortados em folha, economia de taxas e demais valores citados) são casos reais e documentados, mas não representam garantia, promessa ou previsão de resultados para você. O sucesso de cada negócio depende de inúmeros fatores incluindo dedicação, experiência, mercado, capital de giro e qualidade de execução. Não há garantia de retorno financeiro específico ao contratar o Clickmax Acelerador IA. As únicas garantias contratuais estão descritas no contrato: migração completa em 30 dias com os 650 agentes ativos, e ROI auditável em 90 dias conforme condições e métricas validadas em comum acordo. Consulte um contador antes de fazer qualquer investimento. Esta página não constitui oferta pública e aplicações são analisadas individualmente por critérios próprios de fit estratégico.
          </p>

        </div>
      </div>
    </div>
  );
}
