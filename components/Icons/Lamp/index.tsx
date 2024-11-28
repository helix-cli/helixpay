"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Lamp = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1136 14.654C20.1136 10.1726 16.4801 6.53906 11.9987 6.53906C7.5173 6.53906 3.88477 10.1726 3.88477 14.654H20.1136Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 6.53817L12.0005 3.13672"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.001 20.5668V21.1357M16.3026 19.2344L16.7051 19.6369M7.72282 19.2344L7.32031 19.6369"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.4451 14.7266C15.4451 16.6295 13.9029 18.1718 11.9999 18.1718C10.097 18.1718 8.55469 16.6295 8.55469 14.7266"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Lamp;
