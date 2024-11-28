"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Flash = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33648 12.5501L9.03976 3.51392C9.12288 3.28734 9.33857 3.13672 9.57991 3.13672H14.5445C14.9415 3.13672 15.2192 3.52943 15.0869 3.90381L12.8914 9.05654C12.7591 9.43092 13.0368 9.82363 13.4339 9.82363H18.1217C18.6162 9.82363 18.8803 10.4062 18.5544 10.7781L9.65365 20.9376C9.25258 21.3954 8.50815 20.9983 8.66496 20.4102L10.3617 14.0472C10.4591 13.6819 10.1838 13.3236 9.80578 13.3236H5.87664C5.47667 13.3236 5.19874 12.9256 5.33648 12.5501Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Flash;
