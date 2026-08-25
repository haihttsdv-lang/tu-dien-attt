/** Icon thuong hieu — khien bao mat, dong bo voi favicon.svg. */
export function BrandIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Bách khoa An toàn thông tin Ngân hàng"
    >
      <rect width="64" height="64" rx="14" fill="var(--accent)" />
      <path
        d="M32 12 L48 18 V30 C48 41 41 48 32 52 C23 48 16 41 16 30 V18 Z"
        fill="none"
        stroke="var(--primary-fg)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M25 32 L30 37 L40 25"
        fill="none"
        stroke="var(--primary-fg)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
