import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
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
          If you want to contact me, you can contact me via whatsapp or via
          email listed below, or via the contact form on the side, thank you.
        </p>
        <p className="text-base text-[#444444] dark:text-[#CCCCCC] flex items-center gap-2">
          Phone :{" "}
          <span className="text-[#444444] dark:text-[#CCCCCC]">
            +6282332619095
          </span>
        </p>
        <p className="text-base text-[#444444] dark:text-[#CCCCCC] flex items-center gap-2">
          Email :{" "}
          <span className="text-[#444444] dark:text-[#CCCCCC]">
            irul.humam@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase text-[#444444] dark:text-[#CCCCCC] mb-4">
          Find me in
        </h2>
        <div className="flex flex-row gap-2 md:gap-4 justify-evenly">
          <a href="https://www.facebook.com/choyrul7">
            <span className="heroIcon hover:text-[#1877f2]">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/choyrulh">
            <span className="heroIcon hover:text-[#bc2a8d]">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/choirul-humam-439055180/">
            <span className="heroIcon hover:text-[#0077b5]">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=6282332619095">
            <span className="heroIcon hover:text-[#25d366]">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
