import profilePicture from "../assets/profilePicture.png";
import ContactButton from './ContactButton';

const LandingSection = () => {
  return (
    <>
      <section className="flex-col items-center px-6 mb-32 mt-14">
        <img className="m-auto pb-6 pt-20" src={profilePicture} alt="Profile Picture" />
        <h1 className="font-bold text-2xl tracking-wider">Hey, Im Miguel</h1>
        <p className="text-secondary">
          Im a <span className="font-bold bg-gradient-to-br from-accent to-accent600 text-transparent bg-clip-text">Full Stack developer</span> who loves programming and
          making projects real.
        </p>
        <div className="flex">
          <ContactButton/>
        </div>
      </section>
    </>
  );
};

export default LandingSection;
