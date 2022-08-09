import { Carousel } from '@mantine/carousel';

export default function Carousel1() {
  return (

        <Carousel sx={{ width: 400, backgroundColor: "#81b71a" }} mx="auto" withIndicators height={200}>
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          {/* ...other slides */}
        </Carousel>

  );
}