import Slider from "react-slick";
import styled from "styled-components";

const SwipeCarousel = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.data.map((item, index) => {
          return (
            <Item key={index}>
              <hr />
              <p>
                <q>{item.item}</q>
              </p>
              <hr />
              <span>{item.name}</span>
            </Item>
          );
        })}
      </Slider>
    </div>
  );
};

export default SwipeCarousel;

const Item = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  padding: 1rem 1rem;
  height: auto;
  p {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 150%;
    height: auto;
    color: white;
  }
  hr {
    margin: 2rem auto;
    border: 1px solid rgba(200, 200, 200, 0.5);
  }
  span {
    color: rgba(200, 200, 200, 0.5);
  }
  &:hover {
    cursor: grab;
  }
`;
