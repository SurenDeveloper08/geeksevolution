import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner= ()=> {
  const images = [
    "images/Dubai.jpg",
    "images/Dubai.jpg",
    "images/Dubai.jpg",
  ];
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}
      showThumbs={false}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Banner;
