const iconPaths = {
  education: (
    <>
      <path d="m2 8 10-5 10 5-10 5L2 8Z" />
      <path d="M6 10v5c3 2 9 2 12 0v-5M22 8v6" />
    </>
  ),
  economy: (
    <>
      <path d="M4 19V5M4 19h17" />
      <path d="m7 15 4-4 3 2 6-7M15 6h5v5" />
    </>
  ),
  society: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 14c3 0 6 1.5 6 4" />
    </>
  ),
  technology: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="1" />
      <path d="M4 6h3m10 0h3M4 10h3m10 0h3M4 14h3m10 0h3M4 18h3m10 0h3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18m-12 4 6 5m0-5-6 5" />
    </>
  ),
  paper: (
    <>
      <path d="M6 3h9l4 4v14H6zM15 3v5h5M9 12h7m-7 4h7m-7 3h5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <path d="M2.5 20c0-3.5 2.5-6 6.5-6m12.5 6c0-3.5-2.5-6-6.5-6m-7 6c0-3.5 2.5-6 6-6s6 2.5 6 6" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4m-5 5 5-5 5 5M4 15v5h16v-5" />
    </>
  ),
  cohost: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="m10 10 5 2.5-5 2.5zM7 3v3m10-3v3" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-6-5.333-6-10a6 6 0 0 1 12 0c0 4.667-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  checkBadge: (
    <>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </>
  ),
};

export default function Icon({ name, className = "", width = 24, height = 24, style = {} }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      style={{ width: `${width}px`, height: `${height}px`, display: "block", flexShrink: 0, ...style }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
