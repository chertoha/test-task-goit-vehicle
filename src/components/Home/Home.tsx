import VisitCard from "components/VisitCard";
import BackgroundContent from "./BackgroundContent";

const Home = () => {
  return (
    <div className="bg-[#292e34] h-screen relative overflow-hidden">
      <div className="container-default relative z-10">
        <VisitCard />
      </div>

      <BackgroundContent />
    </div>
  );
};

export default Home;
