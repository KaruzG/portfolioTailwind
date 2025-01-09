import profilePicture from "../assets/profilePicture.png";

const LandingSection = () => {
  return (
    <>
      <section className="flex-col items-center">
        <img src={profilePicture} alt="Profile Picture" />
        <h1 className="font-bold">Hey, Im Miguel</h1>
        <p>
          Im a <span>Full Stack developer</span> who loves programming and
          making projects real.
        </p>
        <button>Contact</button>
      </section>
    </>
  );
};

export default LandingSection;
