import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

const CategorySection = () => {
  const [tab, setTab] = useState("model");

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center space-x-10">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setTab("model");
            }}
            className={`${
              tab === "model"
                ? "font-medium border-b  border-black"
                : "text-grey-100"
            }`}
          >
            Model series
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setTab("vehicle");
            }}
            className={`${
              tab === "vehicle"
                ? "font-medium border-b  border-black"
                : "text-grey-100"
            }`}
          >
            Vehicle type
          </a>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 6,
            },
            1600: {
              slidesPerView: 8,
            },
          }}
        >
          {new Array(9).fill(1).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center py-10">
                <img src={`/images/categories/${index + 1}.png`} alt="Car" />
                <h5 className="mt-1">Q6</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
