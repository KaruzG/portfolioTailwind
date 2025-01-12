import { CiMail } from "react-icons/ci";


const ContactButton = () => {
  return (
    <button className="flex justify-center m-auto my-8 rounded-full bg-accent px-14 py-4 text-xl text-white font-semibold">
      <CiMail className="mr-3 my-auto" size={26} style={{ strokeWidth: 1 }}/> Contact
    </button>
  );
};

export default ContactButton;
