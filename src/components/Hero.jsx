import PrimaryButton from "./ui/PrimaryButton";
import PageHeader from "./layout/PageHeader";
import heroImage from "../assets/hero-image.webp";

function Hero() {
  return (
    <PageHeader
      title="Welcome To ELECT"
      subtitle="Energy Efficient Lighting for Clean Energy Transitions in Zambia, co-funded by the European Union."
      image={heroImage}
    >
      {/* Buttons / actions */}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <PrimaryButton className="shadow-lg hover:scale-105 transition-transform duration-300">
          Project Overview
        </PrimaryButton>
        <button className="bg-yellow-400 px-6 py-3 rounded shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
          Latest Updates
        </button>
      </div>
    </PageHeader>
  );
}

export default Hero;
