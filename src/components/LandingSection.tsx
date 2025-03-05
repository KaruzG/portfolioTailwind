import profilePicture from "../assets/profilePicture.png";
import ContactButton from "./ContactButton";

const LandingSection = () => {
  return (
    <section id="landing" className="mb-12 mt-10 flex-col items-center px-6 m-auto">
      <img
        className="m-auto pb-6 md:pb-12 pt-20"
        src={profilePicture}
        alt="Profile Picture"
      />
      <h1 className="text-2xl font-bold tracking-wider md:text-4xl">Hey, Im Miguel</h1>
      <p className="text-secondary md:text-xl">
        Im a{" "}
        <span className="bg-gradient-to-br from-accent to-accent600 bg-clip-text font-bold text-transparent">
          Full Stack developer
        </span>{" "}
        who loves programming and making projects real.
      </p>
      <div className="flex md:pt-12">
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
