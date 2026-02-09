import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "../CssFiles/SkillsA.css"

export default function SkillsSlider({ skills, reverse }) {
if (!skills) return null;
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={6}
      spaceBetween={3}
      loop={true}
      speed={3000}
      grabCursor={true}
      allowTouchMove={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse
      }}
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.name}>
          <img src={`/${skill.png}`} alt={skill.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
