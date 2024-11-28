"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Dollar = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00007 16.7295H13.3335C14.6223 16.7295 15.6665 15.6853 15.6665 14.3965C15.6665 13.1077 14.6223 12.0626 13.3335 12.0626H10.6669C9.37807 12.0626 8.33301 11.0184 8.33301 9.72954C8.33301 8.44072 9.37807 7.39648 10.6669 7.39648H15.0003"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.002 19.0625V5.0625"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Dollar;
