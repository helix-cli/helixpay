"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Tools = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.198 14H7.802C9.016 14 10 14.984 10 16.198V18.802C10 20.016 9.016 21 7.802 21H5.198C3.984 21 3 20.016 3 18.802V16.198C3 14.984 3.984 14 5.198 14Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.198 14H18.802C20.016 14 21 14.984 21 16.198V18.802C21 20.016 20.016 21 18.802 21H16.198C14.984 21 14 20.016 14 18.802V16.198C14 14.984 14.984 14 16.198 14Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.198 3H7.802C9.016 3 10 3.984 10 5.198V7.802C10 9.016 9.016 10 7.802 10H5.198C3.984 10 3 9.016 3 7.802V5.198C3 3.984 3.984 3 5.198 3Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.5051 10L17.3691 9.63193C16.8562 8.24404 15.7636 7.14977 14.3777 6.63621L14.0102 6.50001L14.3777 6.36381C15.7636 5.85025 16.8562 4.75599 17.3691 3.3681L17.5051 2.99999L17.6411 3.3681C18.1539 4.75599 19.2465 5.85025 20.6324 6.36381L21 6.50001L20.6324 6.63621C19.2465 7.14977 18.1539 8.24404 17.6411 9.63193L17.5051 10Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Tools;
