import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading='lazy' src='' alt='' />
        </div>
        <div></div>
        <div></div>
      </Carousel>
    </div>
  );
}
