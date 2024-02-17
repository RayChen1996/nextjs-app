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
import "swiper/css/effect-coverflow"; // Import coverflow effect
import "swiper/css/bundle"; // Import all Swiper styles
export default function RewardPanel() {
  const numberOfSlides = 7;

  const middleSlideIndex = Math.floor(numberOfSlides / 2);

  return (
    <div
      className="  w-full     "
      style={{
        width: "calc(100% - 10px)",
        margin: "0 auto", // Center horizontally
      }}
    >
      <div
        className="  bg-contain bg-center h-60         bg-no-repeat "
        style={{
          backgroundImage: `url(${"/images/rewardbgMobile.png"})`,
          margin: "0 auto",
        }}
      >
        {/* TODO Swipper Components */}

        <div className=" mx-20 ">
          <Swiper
            direction="horizontal" // Set direction to horizontal
            centeredSlides={true}
            // loop={true} // Enable loop
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            // navigation={false}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            // navigation={{
            //   nextEl: null,
            //   prevEl: null,
            // }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={1}
            slidesPerView={5}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div>
              {[...Array(numberOfSlides)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`swiper-slide-content h-52    px-1 mx-1 flex justify-center items-center  `}
                  >
                    <Image
                      width={index === middleSlideIndex ? 150 : 110} // 设置不同的宽度
                      height={index === middleSlideIndex ? 150 : 110} //
                      // width={110}
                      // height={110}

                      src={
                        index === middleSlideIndex
                          ? `/images/reward_actived.png`
                          : `/images/reward_inactived.png`
                      }
                      alt={`Banner Image ${index}`}
                      objectFit="cover"
                      objectPosition="left"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className=" swiper-button-next">
              {/* <Image
                style={{ opacity: 1 }}
                width={150}
                height={150}
                src={`/svg/right.svg`}
                alt={`left`}
                objectFit="cover"
                objectPosition="left"
              /> */}
            </div>
            <div className=" swiper-button-prev">
              {/* <Image
                style={{ opacity: 1 }}
                width={150}
                height={150}
                src={`/svg/left.svg`}
                alt={`left`}
                objectFit="cover"
                objectPosition="left"
              /> */}
            </div>
            {/* Repeat SwiperSlide for each image... */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
