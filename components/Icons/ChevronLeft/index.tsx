"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const ChevronLeft = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Iconly/Light/Arrow - Left 2</title>
      <g
        id="Iconly/Light/Arrow---Left-2"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Arrow---Left-2"
          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)"
          strokeWidth="1.5"
        >
          <polyline id="Stroke-1" points="14 0 7 7 0 0"></polyline>
        </g>
      </g>
    </svg>
  );
};

export default ChevronLeft;
