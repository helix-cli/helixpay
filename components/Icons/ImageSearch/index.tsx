"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const ImageSearch = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9956 15.5725L17.0464 12.7055C15.5837 11.6428 13.5848 11.7401 12.2301 12.9303L4.53613 19.8331"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 15.4742C3.83888 14.7035 5.1449 13.4753 6.91998 14.431C7.83672 14.9273 8.64544 15.4451 9.09407 15.7467"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12.9031V15.9755C3 18.9203 4.84321 20.9971 7.78806 20.9971H16.2217C19.1665 20.9971 21 18.9203 21 15.9755V8.02847C21 5.08361 19.1568 3.00781 16.2217 3.00781H12.8982"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.06261 3.00781C7.754 3.00781 9.12522 4.37903 9.12522 6.07042C9.12522 7.76181 7.754 9.13303 6.06261 9.13303C4.37122 9.13303 3 7.76181 3 6.07042C3 4.37903 4.37122 3.00781 6.06261 3.00781Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.14746 8.3125L9.68898 9.8511"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default ImageSearch;
