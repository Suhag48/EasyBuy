
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlide = ({ reviewerEmail, reviewerName, rating, date, comment }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <em> {date} </em>
          <em> {reviewerEmail} </em>
          <h3> {reviewerName} </h3>
          <p> {rating} </p>
          <p> {comment} </p>
        </div>
      </Slider>
    </div>
  );
}

export default ReviewSlide;
