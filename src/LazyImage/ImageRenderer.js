import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { useIntersection } from './intersectionObserver';

import styles from './LazyImage.module.css';

const ImageRenderer = ({ url, thumb, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={styles.imagecontainer}
      ref={imgRef}
    >
      {isInView && (
        <>
        
          <img
            className={classnames(styles.image, styles.thumb, {
              [styles.isThumbLoaded]: !!isLoaded
            })}
            src={thumb}
            alt={thumb}
          />
          

          <img
            className={classnames(styles.image, {
              [styles.isImageLoaded]: !!isLoaded
            })}
            src={url}
            onLoad={handleOnLoad}
            alt={url}
          />

        </>
      )}
    </div>
  );
};

export default ImageRenderer;
