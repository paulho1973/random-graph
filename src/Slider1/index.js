import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import styles from './Slider1.module.css';

const Slider1 = () => {
  return (

    <Swiper className={styles.container}
    >
      <SwiperSlide className={styles.swiperslide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>Slide 4</SwiperSlide>
    
    </Swiper>
  
  );
};

export default Slider1