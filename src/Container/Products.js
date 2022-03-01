import React from "react";
import styled from "styled-components";
import { Showcase, Section1, Button } from "../components/index";

const Products = () => {
  return (
    <>
      <Section1
        bgImage={
          "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/home1_slide1.jpg"
        }
        title="Products"
        subtitle="PRODUCTS"
      />
      <Showcase
        data={[
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer1-370x246.jpg",
            title: "Wedding JEWELRY",
            link: "",
            btn: "LEARN MORE",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer2-370x246.jpg",
            title: "CUSTOM DESIGN",
            link: "",
            btn: "LEARN MORE",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/service-3-370x246.jpg",
            title: "BRACELETS",
            link: "",
            btn: "LEARN MORE",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/service-4-370x246.jpg",
            title: "NECKLACE",
            link: "",
            btn: "LEARN MORE",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer3-370x246.jpg",
            title: "NEW COLLECTION",
            link: "",
            btn: "LEARN MORE",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/service-6-370x246.jpg",
            title: "PENDANTS & CHARMS",
            link: "",
            btn: "LEARN MORE",
          },
        ]}
      />
      <InstagramSection>
        <h1>Follow On Instagram #pablogaudi</h1>
        <Button>VISIT INSTAGRAM PAGE</Button>
        <InstagramImageContainer>
          <InstagramImage
            bgImage={
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/instagram_img1.jpg"
            }
          />
          <InstagramImage
            bgImage={
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/instagram_img2.jpg"
            }
          />
          <InstagramImage
            bgImage={
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/instagram_img3.jpg"
            }
          />
          <InstagramImage
            bgImage={
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/gallery_img.jpg"
            }
          />
          <InstagramImage
            bgImage={
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/instagram_img6.jpg"
            }
          />
        </InstagramImageContainer>
      </InstagramSection>
    </>
  );
};

export default Products;

const InstagramSection = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: black;
    font-size: 3.5rem;
    font-weight: 200;
    text-align: center;
  }
  button {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid black;
    &:hover {
      border: 1px solid black;
    }
  }
`;

const InstagramImageContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 35vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  box-sizing: border-box;
`;

const InstagramImage = styled.div`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
