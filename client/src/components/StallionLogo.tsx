import { useEffect, useState } from "react";

interface StallionLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function StallionLogo({ className = "", width = 120, height = 120 }: StallionLogoProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crown */}
        <path
          d="M40,10 L60,5 L80,10 L85,15 L35,15 L40,10"
          fill="black"
        />

        {/* Background Oval */}
        <path
          d="M30,25 C30,70 30,100 60,110 C90,100 90,70 90,25 C90,15 75,10 60,10 C45,10 30,15 30,25Z"
          fill="#FFD700"
        />

        {/* Stallion Head */}
        <path
          d="M45,35 C45,35 40,45 42,60 C44,75 50,85 60,90
             C70,85 76,75 78,60 C80,45 75,35 75,35
             C75,35 70,30 60,30 C50,30 45,35 45,35Z"
          fill="black"
        />

        {/* Mane Detail */}
        <path
          d="M48,40 C48,40 55,35 60,35 C65,35 72,40 72,40
             M45,45 C45,45 55,40 60,40 C65,40 75,45 75,45"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}