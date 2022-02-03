import React, { useEffect, useState } from 'react';
//import imageData from './imageData';
import ImageRenderer from './ImageRenderer';


const LazyImage = () => {

  const [pics, setPics] = useState([]);

  useEffect(() => {

    fetch('https://api.unsplash.com/photos/random?client_id=WvY3w21dAwPI5SD9ht7myUAD8JPNMfY7A1SspwAFpBM&count=10')
    .then(response => response.json())
    .then((json) => {
      console.log(json)
      setPics(json);
    })

  }, []);

	return (
		<div>
      {/*
        {imageData.map(data => (
          <ImageRenderer
            key={data.id}
            url={data.url}
            thumb={data.thumbnail}
            width={data.width}
            height={data.height}
          />
        ))}	

      */}

        {pics.map((data) => (

          <ImageRenderer
          key={data.id}
          url={data.urls.full}
          thumb={data.urls.thumb}
          width={data.width}
          height={data.height}
          />
        ))}	

		</div>
	);
}

export default LazyImage;