import { CiMail } from "react-icons/ci";

const ContactButton = () => {
  return (
    <a className="flex justify-center m-auto" href="mailto:your-email@gmail.com">
        <button className="flex justify-center m-auto my-8 rounded-full bg-accent px-14 py-4 text-xl text-white font-semibold">
          <CiMail className="mr-3 my-auto" size={26} style={{ strokeWidth: 1 }}/> Contact
        </button>
    </a>
  );
};

export default ContactButton;
