"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Bulb = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1418 16.1912C7.70948 15.1657 6.00391 12.7567 6.00391 9.94394C6.00391 5.71357 9.86553 2.39388 14.2457 3.28121C16.8386 3.81147 18.9363 5.89746 19.4782 8.49134C20.1817 11.8801 18.337 15.0042 15.5018 16.2029V18.4563C15.5018 19.9303 14.2954 21.1367 12.8223 21.1367C11.3483 21.1367 10.1418 19.9303 10.1418 18.4563V16.1912Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.0684 16.207H15.5066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.96875 9.22955C9.96875 7.98709 11.1022 7.0122 12.3885 7.27295"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Bulb;
