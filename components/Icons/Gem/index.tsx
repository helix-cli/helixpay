"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Gem = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.51047 11.5274L10.8163 19.5542C11.4507 20.2518 12.5482 20.2518 13.1825 19.5542L20.4894 11.5264C21.1004 10.8561 21.1704 9.85395 20.6596 9.10381L17.7174 4.78197C17.3526 4.24685 16.7455 3.92578 16.0975 3.92578H7.91111C7.26312 3.92578 6.65698 4.24588 6.29212 4.781L3.34117 9.10381C2.8294 9.85298 2.89946 10.8561 3.51047 11.5274Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.9989 3.92578L15.3659 9.10381C15.5643 9.85395 15.5371 10.8561 15.2997 11.5264L12.4597 19.5542C12.2135 20.2518 11.7864 20.2518 11.5402 19.5542L8.7002 11.5274C8.4628 10.8561 8.43556 9.85298 8.63501 9.10381L10.0059 3.92578"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.00781 10.2031H20.9908"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Gem;
