const cvFilePath = "../assets/CV_ChoirulHumam.pdf";
const DownloadCV = () => {
  return (
    <a
      href={cvFilePath}
      download="CV_ChoirulHumam.pdf"
      className="px-4 py-2 w-40 sml:w-44 flex-row gap-2 text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg inline-flex items-center"
    >
      <span className="text-sm sml:text-base ml-auto dark:text-[#BBBBBB]">
        Download CV
      </span>
      <span className="w-6 h-6 ml-auto dark:text-[#BBBBBB]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </span>
    </a>
  );
};

export default DownloadCV;
