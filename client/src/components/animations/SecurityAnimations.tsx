import { useEffect, useState } from "react";

interface AnimationProps {
  className?: string;
}

export function LockAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary animate-draw"
      >
        {/* Lock body */}
        <path
          d="M40,50 h40 v-20 a20,20 0 0,0 -40,0 v20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Lock shackle */}
        <rect
          x="35"
          y="50"
          width="50"
          height="40"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Keyhole */}
        <circle
          cx="60"
          cy="70"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}

export function HouseAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary animate-draw"
      >
        {/* House roof */}
        <path
          d="M60,30 L30,60 L90,60 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* House body */}
        <path
          d="M35,60 v30 h50 v-30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Door */}
        <path
          d="M50,90 v-20 h20 v20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Windows */}
        <rect
          x="40"
          y="45"
          width="10"
          height="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        <rect
          x="70"
          y="45"
          width="10"
          height="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}

export function BuildingAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary animate-draw"
      >
        {/* Building structure */}
        <path
          d="M30,100 v-70 h60 v70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Windows */}
        <path
          d="M40,40 h10 v10 h-10 v-10 M60,40 h10 v10 h-10 v-10 M40,60 h10 v10 h-10 v-10 M60,60 h10 v10 h-10 v-10 M40,80 h10 v10 h-10 v-10 M60,80 h10 v10 h-10 v-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}

export function BalloonAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary"
      >
        {/* Balloon String */}
        <path
          d="M60,90 C60,90 65,75 60,70 C55,75 60,90 60,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />

        {/* Balloon Body */}
        <g className="animate-balloon">
          <path
            d="M40,45 C40,25 80,25 80,45 C80,65 60,70 60,70 C60,70 40,65 40,45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />

          {/* Decorative lines */}
          <path
            d="M50,35 C50,35 60,45 70,35"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-draw"
            opacity="0.5"
          />
          <path
            d="M45,45 C45,45 60,55 75,45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-draw"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}

export function LockerAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary"
      >
        {/* Locker Body */}
        <g className="animate-locker">
          {/* Main body */}
          <rect
            x="30"
            y="20"
            width="60"
            height="80"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />

          {/* Door */}
          <rect
            x="35"
            y="25"
            width="50"
            height="70"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />

          {/* Lock mechanism */}
          <circle
            cx="75"
            cy="60"
            r="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />

          {/* Handle */}
          <path
            d="M70,55 L80,55 L80,65 L70,65"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />

          {/* Vents */}
          <path
            d="M40,35 L60,35 M40,45 L60,45 M40,55 L60,55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
            className="animate-draw"
          />
        </g>
      </svg>
    </div>
  );
}

export function BriefcaseAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary animate-draw"
      >
        {/* Briefcase body */}
        <rect
          x="20"
          y="45"
          width="80"
          height="55"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Handle */}
        <path
          d="M45,45 V35 H75 V45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Middle line */}
        <path
          d="M20,65 H100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}

export function InfoAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary animate-draw"
      >
        {/* Circle */}
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* 'i' dot */}
        <circle
          cx="60"
          cy="40"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* 'i' body */}
        <path
          d="M60,50 V80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}

export function ContactAnimation({ className = "" }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="text-primary animate-draw"
      >
        {/* Message bubble */}
        <path
          d="M20,40 h80 v50 h-60 l-20,20 v-20 z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
        {/* Lines inside */}
        <path
          d="M35,55 h50 M35,65 h50 M35,75 h30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}