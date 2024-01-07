/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProductCard from "./SingleProductCard";

const ProductCategorySwiper = ({ products, title }) => {
  return (
    <div className=" lg:px-5 sm:px-1 p-5">
      <div className="divider"></div>
      <div className="flex px-10 justify-between mb-5">
        <p className="text-xl font-bold text-pink-p00">{title}</p>
        <Link to="products">
          <button className="font-bold capitalize text-yellow-600">
            {" "}
            AddMore{" "}
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center container">
        <Swiper
          spaceBetween={1}
          modules={[Pagination, Autoplay]}
          freeMode={true}
          autoplay={{ delay: 2000 }}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper  "
        >
          {products?.map((product) => (
            <SwiperSlide key={product?._id}>
              <SingleProductCard key={product?._id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ProductCategorySwiper;
