export default function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true" style={{ marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,55 480,5 720,30 C960,55 1200,10 1440,28 L1440,60 L0,60 Z"
          fill="#E8DFD0"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}

export function SectionDividerTop() {
  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true" style={{ marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block rotate-180"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,55 480,5 720,30 C960,55 1200,10 1440,28 L1440,60 L0,60 Z"
          fill="#E8DFD0"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}
