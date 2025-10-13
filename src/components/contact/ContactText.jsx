import { SiGmail } from "react-icons/si";
import { FiPhoneForwarded } from "react-icons/fi";

function ContactText() {
  return (
    <div className="h-full text-black-400 flex flex-col px-4 w-1/2 border-r-2 max-md:border-none  max-md:w-auto max-md:h-auto">
      <h2 className="font-bold text-center my-3.5 text-6xl text-color">
        Get in touch
      </h2>
      <p className="text-xl text-bold text-[#000000] max-md:text-xl">
        Have a project in mind? Looking to partner or work together? Reach out
        through the form and I'll get back to you in the next 48 hours.
      </p>
      <h4 className="text-bold flex items-center my-3.5 text-xl">
        <SiGmail className="mx-2" />
        siahammad1@gmail.com
      </h4>
      <h4 className="text-bold flex items-center text-2xl">
        <FiPhoneForwarded className="mx-2" />
        +880-16486-07773
      </h4>
    </div>
  );
}

export default ContactText;
