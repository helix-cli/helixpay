"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Graduated = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.223 14.3686L4.38087 11.0244C2.91748 10.3092 2.91748 8.22405 4.3799 7.50889L10.9156 4.31452C11.7728 3.89516 12.775 3.89516 13.6322 4.31452L20.1756 7.51181C21.639 8.22697 21.639 10.3131 20.1756 11.0282L13.6351 14.2246C12.775 14.6449 11.7699 14.6449 10.9097 14.2246L6.755 12.1939"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21.2831 9.25781L21.25 14.6716"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.75586 12.1953V17.1664C6.75586 18.0226 7.26377 18.8108 8.05482 19.1377C10.8298 20.2829 13.5932 20.2975 16.3458 19.1445C17.131 18.8156 17.634 18.0294 17.634 17.1781V12.2858"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Graduated;
