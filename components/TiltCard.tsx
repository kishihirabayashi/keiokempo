"use client";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
