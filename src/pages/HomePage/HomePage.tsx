import { Icon } from "components/UIKit/Icon/Icon";

const TestIcon = Icon["van"];

const HomePage = () => {
  return (
    <div className="main-text  text-accent">
      Home page
      <TestIcon
        width={20}
        height={20}
      />
    </div>
  );
};

export default HomePage;
