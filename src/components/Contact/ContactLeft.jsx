import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import contactImg from "../../assets/char.jpg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full dark:bg-[#111111] p-4 lgl:p-8 rounded-lg shadow-xl shadow-[#CCCCCC] dark:shadow-[#222222] flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#444444] dark:text-[#CCCCCC]">
          Choirul Humam
        </h3>
        <p className="text-lg font-normal text-[#444444] dark:text-[#CCCCCC]">
          Front End Developer
        </p>
        <p className="text-base text-[#444444] dark:text-[#CCCCCC] tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-[#444444] dark:text-[#CCCCCC] flex items-center gap-2">
          Phone:{" "}
          <span className="text-[#444444] dark:text-[#CCCCCC]">
            +6292332619095
          </span>
        </p>
        <p className="text-base text-[#444444] dark:text-[#CCCCCC] flex items-center gap-2">
          Email:{" "}
          <span className="text-[#444444] dark:text-[#CCCCCC]">
            irul.humam@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase text-[#444444] dark:text-[#CCCCCC] mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="heroIcon hover:text-[#1877f2]">
            <FaFacebookF />
          </span>
          <span className="heroIcon hover:text-[#bc2a8d]">
            <FaInstagram />
          </span>
          <span className="heroIcon hover:text-[#0077b5]">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
