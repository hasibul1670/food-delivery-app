import Popular from "../ProductPages/Popular";
import Recommended from "../ProductPages/Recommended";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Popular />
      <Recommended />
    </div>
  );
};

export default Home;
