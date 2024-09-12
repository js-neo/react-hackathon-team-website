import React from "react";
import SwiperCore, { Autoplay, Pagination, Navigation, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./slider.css";
import members from "../../db/api.members";

import img1 from "../../assets/images/slider-bg-8.png";

SwiperCore.use([Autoplay, Pagination, Navigation, Parallax]);

const Slider = () => {
    return (
        <Swiper
            className="slider-main-page"
            speed={2900}
            parallax={true}
            pagination={{
                pagination: true,
                clickable: true
            }}
            autoplay={{
                delay: 4100,
                disableOnInteraction: false
            }}
            loop={true}
            navigation={false}
            module={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
        >
            <div
                slot="container-start"
                className="swiper-parallax-bg"
                style={{ backgroundImage: `url(${img1})` }}
                data-swiper-parallax="-10%"
            ></div>

            {members.map((member) => (
                <SwiperSlide
                    key={member._id}
                    className="swiper-slider-container"
                >
                    <img
                        alt=""
                        src={member.photo}
                        className="img-swiper"
                        data-swiper-parallax="-800"
                    />
                    <div className="swiper-block-parallax">
                        <div
                            className="swiper-parallax-title"
                            data-swiper-parallax="-1000"
                        >
                            {`${member.firstName} ${member.lastName}`}
                        </div>
                        <div
                            className="swiper-parallax-subtitle"
                            data-swiper-parallax="-3500"
                        >
                            {`${member.about}`}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
