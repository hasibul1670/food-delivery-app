import Image1 from "../../assets/image/Image1.png";

const Banner = () => {
  return (
    <div className="py-20">
      <div className="hero   bg-yellow-600 rounded-3xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Image1} className=" rounded-lg " />
          <div>
            <h1 className="text-5xl text-white font-bold">
              Deliver Food To Your <br /> Door Step!
            </h1>
            <p className="py-6 text-2xl text-white">
              Authentic Food, Quick Service ,Fast Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
