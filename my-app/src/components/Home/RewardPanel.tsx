"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function RewardPanel() {
  return (
    <div className="  mx-32  ">
      <div
        className="  bg-contain bg-center h-60     bg-no-repeat "
        style={{ backgroundImage: `url(${"/images/rewardbg.png"})` }}
      >
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={5}
          slidesPerView={5}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className={"bg-gray-300  relative md:pb-[40%] pb-[66%] md:h-0"}
            >
              <Image
                src={"https://fakeimg.pl/250x100/"}
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </div>

            <div
              className={"bg-gray-300  relative md:pb-[40%] pb-[66%] md:h-0"}
            >
              <Image
                src={"https://fakeimg.pl/250x100/"}
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </div>

            <div
              className={"bg-gray-300  relative md:pb-[40%] pb-[66%] md:h-0"}
            >
              <Image
                src={"https://fakeimg.pl/250x100/"}
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* TODO Swipper Components */}
      </div>
    </div>
  );
}
