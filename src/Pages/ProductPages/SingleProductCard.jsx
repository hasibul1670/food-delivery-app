/* eslint-disable react/prop-types */

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SingleProductCard = ({ product }) => {
  return (
    <div className="card w-64 h-72 p-1   shadow-xl hover:shadow-3xl my-5">
      <figure className="pt-2 h-full w-full overflow-hidden ">
        <img
          alt="example"
          src={product?.ImageUrl}
          className="object-cover w-full h-full rounded-lg"
        />
      </figure>

      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">{product?.Name}</h6>
      </div>
    </div>
  );
};

export default SingleProductCard;
