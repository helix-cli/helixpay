"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const PC = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.056 6.70275C18.7087 4.98351 17.1899 3.68848 15.3684 3.68848H6.76249C4.68422 3.68848 3 5.3727 3 7.45097V12.5455C3 14.6237 4.68422 16.308 6.76249 16.308H10.6048"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.41602 19.9609H11.2692"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.05835 16.3037L8.46289 19.9611"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.8255 9.49902C20.0251 9.49902 20.9981 10.472 20.9991 11.6726V14.9058V18.139C20.9991 19.3397 20.0261 20.3127 18.8255 20.3127H15.5125C14.3118 20.3127 13.3389 19.3397 13.3389 18.139L13.3379 11.6726C13.3379 10.473 14.3118 9.49902 15.5115 9.49902H18.8255Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.1699 17.6729V17.6829"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default PC;
