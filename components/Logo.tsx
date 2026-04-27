type Props = { className?: string };

export default function Logo({ className = "" }: Props) {
  return (
    <span
      className={`display text-[22px] tracking-[-0.02em] leading-none ${className}`}
      aria-label="Happy Spa"
    >
      Happy
      <span className="text-clay"> · </span>
      <span className="smallcaps text-[14px] tracking-[0.18em] opacity-70">
        Spa
      </span>
    </span>
  );
}
