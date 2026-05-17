interface SectionLabelProps {
  number: string
  label: string
  align?: "left" | "center"
  className?: string
}

export function SectionLabel({
  number,
  label,
  align = "center",
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`font-mono uppercase tracking-[0.2em] text-xs text-accent ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <span>{number}</span>
      <span className="mx-2 text-[hsl(var(--color-text-tertiary))]">—</span>
      <span>{label}</span>
    </div>
  )
}
