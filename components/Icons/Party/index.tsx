"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Party = ({ size = 24 }: IconProps) => {
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
        d="M8.87353 17.401C9.75504 18.2241 12.3558 16.8697 14.6832 14.377C17.0095 11.8842 18.182 9.19686 17.3005 8.37372C16.419 7.55058 13.8172 8.90497 11.4908 11.3977C9.16347 13.8905 7.99201 16.5779 8.87353 17.401Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.20898 6.875H3.23234M5.91032 17.1323H5.93367"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.453 8.57031L20.9664 19.6039C21.1299 20.1195 20.6609 20.6138 20.1364 20.4766L9.20312 17.5995"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.3633 19.2191C16.0872 18.6976 16.8403 18.0223 17.5642 17.2508C18.326 16.4296 18.9633 15.5899 19.4459 14.8086"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.44725 14.081C6.44725 14.081 4.59568 13.938 3 15.6621"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.57231 5.97024C9.57231 6.62505 9.04107 7.1563 8.38626 7.1563C7.73144 7.1563 7.20117 6.62505 7.20117 5.97024C7.20117 5.31543 7.73144 4.78516 8.38626 4.78516C9.04107 4.78516 9.57231 5.31543 9.57231 5.97024Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.7314 12.6807C12.7314 12.6807 9.48558 9.33172 4.51367 10.7474"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.8508 3.5C13.8508 3.5 11.9711 6.07352 14.0532 9.16758"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Party;
