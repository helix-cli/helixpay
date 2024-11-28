"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Share = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3803 3C19.8719 3 21.0803 4.20842 21.0803 5.69997C21.0803 7.19152 19.8719 8.39994 18.3803 8.39994C16.8888 8.39994 15.6804 7.19152 15.6804 5.69997C15.6804 4.20842 16.8888 3 18.3803 3Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.58083 9.29955C9.07238 9.29955 10.2808 10.508 10.2808 11.9995C10.2808 13.4911 9.07238 14.6995 7.58083 14.6995C6.08928 14.6995 4.88086 13.4911 4.88086 11.9995C4.88086 10.508 6.08928 9.29955 7.58083 9.29955Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3803 15.6001C19.8719 15.6001 21.0803 16.8085 21.0803 18.3C21.0803 19.7906 19.8719 21 18.3803 21C16.8888 21 15.6804 19.7906 15.6804 18.3C15.6804 16.8085 16.8888 15.6001 18.3803 15.6001Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.91111 13.3581L16.0583 16.9406M16.0486 7.05859L9.91016 10.6401"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Share;
