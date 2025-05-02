import Link from "next/link";
import React from "react";

export const InstagramLink = () => (
  <Link href="https://www.instagram.com/yourusername" target="_blank" className="ml-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 448 512"
      className="hover:scale-110 transition-transform duration-200"
    >
      <defs>
        <linearGradient id="instaGradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#instaGradient)"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6s-57.9-34.5-93.6-36.2c-37-2.1-147.8-2.1-184.8 0-35.7 1.7-67.3 9.9-93.6 36.2S9.8 104.9 8.1 140.6C6 177.6 6 288.4 8.1 325.4c1.7 35.7 9.9 67.3 36.2 93.6s57.9 34.5 93.6 36.2c37 2.1 147.8 2.1 184.8 0 35.7-1.7 67.3-9.9 93.6-36.2s34.5-57.9 36.2-93.6c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.2 9s-102.7 2.6-132.2-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.2s-2.6-102.7 9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.2-9s102.7-2.6 132.2 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.2s2.7 102.7-9 132.2z"
      />
    </svg>
  </Link>
);

export const LinkedInLink = () => (
    <Link href="https://www.linkedin.com/in/yourusername" target="_blank" className="ml-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 448 512"
      className="hover:scale-110 transition-transform duration-200"
    >
      <path
        fill="#0077b5"
        d="M100.3 480H7V168h93.3zm46.6-312.5h-93.3V80.1C53.6 36.2 75.3 0 120.6 0h72.1c44.5 0 76.8 36.5 76.8 81.7v87.4h-93.3V171.5c0-30.6-16.8-44.5-39.5-44.5zM448 480h-93.3V304.9c0-42.1-15-71.7-52.7-71.7-28.7 0-45.4 19.3-52.8 38.0V480H218.4V168h93.3V227c0-54.4 25-96.8 70.3-96.8 41.8 0 74.4 29.5 74.4 77.3v172.5h-93.2z"
      />
    </svg>
  </Link>
);

export const FacebookLink = () => (
  <Link href="https://www.facebook.com/yourusername" target="_blank" className="ml-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 448 512"
      className="hover:scale-110 transition-transform duration-200"
    >
      <path
        fill="#3b5998"
        d="M400 32C400 14.3 385.7 0 368 0H80C62.3 0 48 14.3 48 32v448c0 17.7 14.3 32 32 32h160V314h-45v-75h45v-56c0-69.5 41.8-107 104.2-107 30.5 0 63.8 5.5 63.8 5.5v70h-36.6c-28.6 0-37.4 17.9-37.4 36.2v43.8h63.6l-9.3 75h-54.3v179h108c17.7 0 32-14.3 32-32V32z"
      />
    </svg>
  </Link>
);

export const GitHubLink = () => (
  <Link href="https://github.com/sujitapandeyy" target="_blank" className="ml-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 448 512"
      className="hover:scale-110 transition-transform duration-200"
    >
      <path
        fill="#333"
        d="M224.1 0C100.3 0 0 100.3 0 224.1c0 99.6 64.5 184.5 153.6 214.7 11.2 2.1 15.3-4.9 15.3-10V371.7c-62.3 13.6-75.3-30.1-75.3-30.1-10.1-25.7-24.7-32.6-24.7-32.6-20.2-13.8 1.5-13.5 1.5-13.5 22.3 1.6 34.3 24.8 34.3 24.8 20.5 36.1 53.8 25.6 67.1 19.6 2.1-14.8 8-25.6 14.5-31.5-49.7-5.6-102.1-24.8-102.1-110.1 0-24.3 8.7-44.2 23.1-59.8-2.3-5.6-10-28.1 3.6-58.7 0 0 18.6-5.9 60.9 22.6 17.7-5.3 36.6-8 55.5-8s37.8 2.7 55.5 8c42.2-28.5 60.8-22.6 60.8-22.6 13.6 30.6 5.9 53.1 3.6 58.7 14.4 15.6 23.1 35.5 23.1 59.8 0 85.3-52.5 104.5-102.3 110.1 8.2 7.1 15.5 21.2 15.5 42.6v63.5c0 5.1 4.1 12.1 15.3 10 89.1-30.2 153.6-115.1 153.6-214.7 0-123.8-100.3-224.1-224.1-224.1z"
      />
    </svg>
  </Link>
);

const Icons = () => {
  return (
    <div>
      <InstagramLink />
      <LinkedInLink />
      <GitHubLink />
    </div>
  );
};

export default Icons;
