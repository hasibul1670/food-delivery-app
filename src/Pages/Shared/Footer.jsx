import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Image2 from "../../assets/image/Image2.png";

const Footer = () => {
  return (
    <div className="py-10">
      <footer className="w-full flex justify-center  lg:p-10 p-4 bg-yellow-600 text-base-content ">
        <div className="lg:w-3/4">
          <div className="flex justify-center  ">
            <div className=" align flex items-center h-16 lg:w-3/5 input input-bordered  rounded-2xl  w-full">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" input-secondary w-full  max-w-xl mr-2"
              />
              <button className="btn bg-orange-600  rounded-lg capitalize ">
                Subscribe
              </button>
            </div>
          </div>

          <div className="lg:flex lg:mt-10   sm:justify-center ">
            <div className="lg:text-left text-center">
              <p className=" text-5xl font-bold lg:mt-0 mt-5">
                pti<span className="text-red-600">.</span>
              </p>
              <p className="text-xl font-semibold lg:mt-2 mt-5">
                Copyright © Tripp. All rights reserved
              </p>
            </div>

            <div className="flex   justify-center text-5xl text-white lg:mt-12 lg:ml-5  mt-5 ">
              <FaGoogle className="bg-orange-500 rounded-3xl p-2 mx-2" />
              <FaTwitter className="bg-orange-500 rounded-3xl p-2 mx-2" />
              <FaInstagram className="bg-orange-500 rounded-3xl p-2 mx-2" />
            </div>
          </div>
        </div>

        <div className="lg:block hidden  w-1/4">
          <img src={Image2} className=" w-72 " />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
