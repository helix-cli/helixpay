"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Plugin = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.80664 18.3312C4.30794 16.8325 4.30794 14.4026 5.80664 12.9039L6.65962 12.0509C6.95668 11.7539 7.4383 11.7539 7.73536 12.0509L12.0869 16.4024C12.3839 16.6995 12.3839 17.1811 12.0869 17.4782L11.2339 18.3312C9.73521 19.8299 7.30534 19.8299 5.80664 18.3312Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5.8029 18.332L3 21.1349"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.1935 5.94434C16.6948 4.44564 14.2649 4.44564 12.7662 5.94434L11.9132 6.79731C11.6162 7.09437 11.6162 7.576 11.9132 7.87306L16.2648 12.2246C16.5618 12.5216 17.0434 12.5216 17.3405 12.2246L18.1935 11.3716C19.6922 9.87291 19.6922 7.44304 18.1935 5.94434Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.1973 5.93962L21.0002 3.13672"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.49609 12.8101L10.1774 11.1288M11.327 15.641L13.0083 13.9597"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Plugin;
