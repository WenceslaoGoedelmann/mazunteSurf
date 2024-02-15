import Carousel from 'react-bootstrap/Carousel';
import { ImageContainer } from './CarouselStyles';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ImageContainer src={"https://res.cloudinary.com/dtsltqjuw/image/upload/v1706407710/MazunteSurf/surfing-2212948_1280_ycdhk0.jpg"} />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageContainer src={"https://res.cloudinary.com/dtsltqjuw/image/upload/v1706407709/MazunteSurf/beach-1838501_1280_hethre.jpg"} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageContainer src={"https://res.cloudinary.com/dtsltqjuw/image/upload/v1706407708/MazunteSurf/surfing-926822_1280_ckcbog.jpg"} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;