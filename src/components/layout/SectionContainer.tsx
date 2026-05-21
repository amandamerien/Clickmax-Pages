import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

/**
 * Wrapper externo de seção: padding horizontal de 80px, centraliza filhos em coluna.
 * Replica: display:flex; padding:0 80px; flex-direction:column; align-items:center; align-self:stretch
 */
export const SectionOuter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full flex-col items-center justify-center gap-2.5 px-20",
      className
    )}
    {...props}
  />
));
SectionOuter.displayName = "SectionOuter";

/**
 * Container interno: max-w-[1280px], padding 0 37px, bordas verticais sutis (ColorLinha).
 * Replica: max-width:1280px; padding:0 37px; flex-direction:column; align-items:flex-start; gap:10px
 */
export const SectionInner = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full max-w-[1280px] flex-col items-start gap-2.5 px-[37px]",
      "border-x border-[rgba(255,255,255,0.02)]",
      className
    )}
    {...props}
  />
));
SectionInner.displayName = "SectionInner";

/**
 * Espaçador de 59px que abre cada seção — cria respiro visual com bordas de grid sutis.
 * Replica: width:1210px; height:59px; padding:12px 0; flex-direction:column; align-items:center; gap:46px
 */
export const SectionSpacer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-[59px] w-full max-w-[1210px] flex-col items-center gap-[46px] py-3",
      "border-x border-[rgba(255,255,255,0.02)]",
      className
    )}
    {...props}
  />
));
SectionSpacer.displayName = "SectionSpacer";

/**
 * Composição completa: SectionOuter > SectionInner > SectionSpacer + children
 * Use como wrapper padrão de cada seção do site.
 */
interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  outerClassName?: string;
  innerClassName?: string;
  withSpacer?: boolean;
}

export function Section({
  className,
  outerClassName,
  innerClassName,
  withSpacer = true,
  children,
  ...props
}: SectionProps) {
  return (
    <SectionOuter className={outerClassName} {...props}>
      <SectionInner className={innerClassName}>
        {withSpacer && <SectionSpacer />}
        <div className={cn("w-full", className)}>{children}</div>
      </SectionInner>
    </SectionOuter>
  );
}
