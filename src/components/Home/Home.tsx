import { Icon } from "components/UIKit/Icon/Icon";

const TestIcon = Icon["van"];

const Home = () => {
  return (
    <>
      <div className="container-default">
        <div className="main-text  text-accent">
          Home
          <TestIcon
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
