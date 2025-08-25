import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { fetchPost } from "../../apis/utils/instance";
import { getPostRequest } from "../../apis/json/jsonApi";

function Home() {
  // fetchPost(1);
  // axios도 프로미스 기반이므로
  // getPostRequest(1)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div css={s.container}>
      <Swiper
        css={s.banner}
        spaceBetween={60}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={image1} alt="" css={s.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" css={s.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" css={s.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" css={s.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" css={s.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="" css={s.image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
