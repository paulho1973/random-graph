import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import styles from './ImageSlider2.module.scss';

const images = [
  'https://res.cloudinary.com/paulho/image/upload/c_fill,h_400,w_400/v1630134918/richercart/sl8vv3aiza7bwrmyk0ds.webp',
  'https://res.cloudinary.com/paulho/image/upload/c_fill,h_400,w_400/v1630134982/richercart/duebpjtnputwh8iws02q.webp',
  'https://res.cloudinary.com/paulho/image/upload/c_fill,h_400,w_400/v1630135019/richercart/rw6bejubyanwcl9ujm7g.webp',
  'https://res.cloudinary.com/paulho/image/upload/c_fill,h_400,w_400/v1630135040/richercart/l7ub8juj2qdm0e4de4cv.webp'
]

const ImageSlider2 = () => {

  const [index, setIndex] = useState(0);

  function plusSlide(n) {

    let next = index + n;

    if (next >= images.length) {
      setIndex(0);
    } 
    else if (next < 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(next);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => plusSlide(1),
    onSwipedRight: () => plusSlide(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  function adjustment (index) {
    if (index === 0)
      return 0
    else if ( index === images.length - 1)
      return  10
    else return 5
  }
  
  return (

    <div className={styles.slideshow}>
      <div 
        {...handlers} 
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${(-index * 100) + (index * 15) + adjustment(index)}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className={styles.slide}
            key={index}
            //style={{ backgroundColor }}
          >
            <img draggable="false" src={image.includes('upload/c_fill,h_400,w_400/') ? image : image.replace('upload/','upload/c_fill,h_400,w_400/')} />
            <div className={styles.slidenumbertext}>{index + 1} / {images.length}</div>
          </div>
        ))}
      </div>

      <a className={styles.slideprev} onClick={() => plusSlide(-1)}>&#10094;</a>
      <a className={styles.slidenext} onClick={() => plusSlide(1)}>&#10095;</a>

    </div>
  
  );
};

export default ImageSlider2