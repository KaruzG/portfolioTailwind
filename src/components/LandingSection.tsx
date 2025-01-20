import profilePicture from "../assets/profilePicture.png";
import ContactButton from "./ContactButton";

const LandingSection = () => {
  return (
    <section id="landing" className="mb-12 mt-10 flex-col items-center px-6">
      <img
        className="m-auto pb-6 pt-20"
        src={profilePicture}
        alt="Profile Picture"
      />
      <h1 className="text-2xl font-bold tracking-wider">Hey, Im Miguel</h1>
      <p className="text-secondary">
        Im a{" "}
        <span className="bg-gradient-to-br from-accent to-accent600 bg-clip-text font-bold text-transparent">
          Full Stack developer
        </span>{" "}
        who loves programming and making projects real.
      </p>
      <div className="flex">
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
