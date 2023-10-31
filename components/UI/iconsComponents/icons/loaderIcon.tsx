import React, { FunctionComponent } from "react";

const LoaderIcon: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.25 5.33333H10.75V2H13.25V5.33333ZM13.25 18.6667H10.75V22H13.25V18.6667ZM5.33333 10.75H2V13.25H5.33333V10.75ZM22 10.75H18.6667V13.25H22V10.75ZM21.2717 15.9433L18.39 14.2692L17.1333 16.43L20.015 18.105L21.2717 15.9433ZM18.105 3.98167L15.9408 2.725L14.2667 5.6075L16.4275 6.86417L18.105 3.98167ZM21.2808 8.045L20.0225 5.885L17.1408 7.56333L18.3992 9.72333L21.2808 8.045ZM18.125 20.0108L16.4467 17.1308L14.2867 18.3892L15.965 21.2692L18.125 20.0108ZM6.88 16.4275L5.62417 14.2692L2.74167 15.9433L4 18.105L6.88 16.4275ZM9.75 5.6075L8.0725 2.725L5.91083 3.98167L7.58333 6.86417L9.75 5.6075ZM6.87333 7.56333L3.99333 5.885L2.735 8.045L5.615 9.72333L6.87333 7.56333ZM9.72667 18.39L7.5675 17.13L5.88833 20.01L8.04833 21.27L9.72667 18.39Z"
        fill={color}
      />
    </svg>
  );
};

export default LoaderIcon;
