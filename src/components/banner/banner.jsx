import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner= ()=> {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/UAE_front_page_banner.jpg/960px-UAE_front_page_banner.jpg?20201018215944",
    "images/dubai.jpg",
    "images/dubai.jpg",
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
