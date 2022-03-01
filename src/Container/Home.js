import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Section,
  Showcase,
  FadeCarousel,
  SwipeCarousel,
  ContactSection,
  Button,
  SignUpSection,
} from "../components/index";
import { SliderData } from "../components/MainSection/SliderData";
import { Logo, TestimonialBg, Background5 } from "../images/index";

const Home = () => {
  return (
    <>
      {/* Main Section width background carousel */}
      <Section slides={SliderData} />
      {/* {/* 2nd Section with Jewelry showcase */}
      <Showcase
        data={[
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer1-370x246.jpg",
            title: "Wedding JEWELRY",
            link: "",
            btn: "SHOP NOW",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer2-370x246.jpg",
            title: "CUSTOM DESIGN",
            link: "",
            btn: "SHOP NOW",
          },
          {
            image:
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer3-370x246.jpg",
            title: "NEW COLLECTION",
            link: "",
            btn: "SHOP NOW",
          },
        ]}
      />
      {/* 3rd Section with contact information */}
      <ContactSection />
      {/* 4th Section  history sh!t carousel */}
      <FadeCarousel
        data={[
          {
            item: "Curabitur scelerisque et nisi nec tempus. Integer laoreet tincidunt ante, at efficitur massa vehicula ut. Suspendisse a blandit leo. Ut malesuada, enim sed malesuada feugiat, dui lorem finibus nisi, ac rutrum nunc. Curabitur scelerisque et nisi nec tempus. Integer laoreet tincidunt ante, at efficitur massa vehicula ut. Suspendisse a blandit leo. Ut malesuada, enim sed malesuada feugiat, dui lorem finibus nisi, ac",
          },
          {
            item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita a, rem facilis eligendi, nulla architecto tempora maiores labore iusto molestiae dolores sunt nemo. Veniam possimus magnam culpa ipsam a?",
          },
          {
            item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus dicta praesentium fugit porro, labore nostrum maiores aut, mollitia illum odit voluptatem quisquam harum. Ducimus mollitia facilis excepturi sit optio.",
          },
          {
            item: "Curabitur scelerisque et nisi nec tempus. Integer laoreet tincidunt ante, at efficitur massa vehicula ut. Suspendisse a blandit leo. Ut malesuada, enim sed malesuada feugiat, dui lorem finibus nisi, ac rutrum nunc. Curabitur scelerisque et nisi nec tempus. Integer laoreet tincidunt ante, at efficitur massa vehicula ut. Suspendisse a blandit leo. Ut malesuada, enim sed malesuada feugiat, dui lorem finibus nisi, ac",
          },
        ]}
      />
      {/* 5th Section with testimonials carousel */}
      <Testimonials className="container">
        <LeftTestimonialDiv bgImage={TestimonialBg}>
          <h1>Accent Your Style with New Collection</h1>
          <Button>Shop Collection</Button>
        </LeftTestimonialDiv>
        <SwipeCarouselContainer>
          <img src={Logo} alt="Logo" />
          <h1>TESTIMONIALS</h1>
          <SwipeCarousel
            data={[
              {
                item: "You don't want a million answers as much as you want a few forever questions.",
                name: "BONNIE LEE, TX",
              },
              {
                item: "reiciendis porro tenetur vitae corporis nemo voluptates explicabo laborum tempore ex, maiores doloribus recusandae natus?",
                name: "BLA BLA, TK",
              },
              {
                item: "pariatur aperiam consectetur velit accusantium laboriosam modi. Facere cum cumque est corporis at incidunt iste",
                name: "MING LING, HK",
              },
              {
                item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui modi omnis illum quis veritatis quibusdam!",
                name: "JULIA WANG, NY ",
              },
            ]}
          />
        </SwipeCarouselContainer>
      </Testimonials>
      <TopProducts>
        <h1>Top Products</h1>
        <Showcase
          data={[
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/product1.jpg",
              title: "Knife Edge Hoop Oval Earrings",
              price: "745",
              btn: "ADD TO CART",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/product7-740x740.jpg",
              title: "Ornate Silver Diamond Earrings",
              price: "985",
              btn: "ADD TO CART",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/product6-1-740x740.jpg",
              title: "Modern Heart-Shaped Earrings",
              price: "465",
              btn: "ADD TO CART",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/product8-740x740.jpg",
              title: "Panda Pendant Diamond Setting",
              price: "1,125",
              btn: "ADD TO CART",
            },
          ]}
        />
        <Link to="/">
          <Button>MORE PRODUCTS</Button>
        </Link>
      </TopProducts>
      <SectionSix bgImage={Background5}>
        <div className="container">
          <h1>
            Singular &amp; <br />
            Personal
          </h1>
          <p>
            In creating jewellery, gemstones, coins, or other precious items are
            often used, and they are typically set into precious metals. Alloys
            of nearly every metal known have been encountered
          </p>
          <Link to="/">
            <Button>READ MORE</Button>
          </Link>
        </div>
      </SectionSix>
      <RecentPosts>
        <h1>Recent Posts</h1>
        <Showcase
          data={[
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/post-8-370x205.jpg",
              title: "An Odd Story of an Engagement Ring",
              btn: "COMMENTS",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/post-7-370x205.jpg",
              title: `Exquisite & Custom Diamond Jewelry`,
              btn: "COMMENTS",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/post-6-370x205.jpg",
              title: "The World's Most Famous Jewelry Artists",
              btn: "COMMENTS",
            },
          ]}
        />
      </RecentPosts>
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
      {/* Get In Touch Section with Signup and Address (Map) */}
      <SignUpSection />
      <GetInTouch>
        <h1>GET IN TOUCH</h1>
        <Showcase
          data={[
            { title: "PHONE NUMBER", btn: "123-456-7890" },
            { title: "LOCATION", btn: "123, New Lenox Chicago,1L 60606" },
            { title: "EMAIL ADDRESS", btn: "info@yoursite.com" },
          ]}
        />
      </GetInTouch>
    </>
  );
};

export default Home;

const Testimonials = styled.section`
  min-height: 50rem;
  max-width: 60rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem;
  padding: 5rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
const LeftTestimonialDiv = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    ),
    ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
  h1 {
    max-width: 80%;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    text-align: center;
    align-items: center;
  }
`;

const SwipeCarouselContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  img {
    width: 5rem;
    margin: 0 auto 2rem;
  }
`;

const TopProducts = styled.section`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(170, 168, 168, 0.1);
  div {
    background-color: rgba(0, 0, 0, 0);
  }
  h1 {
    color: black;
    font-size: 3.5rem;
    font-weight: 400;
  }
  button {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid black;
    &:hover {
      border: 1px solid black;
    }
  }
`;

const SectionSix = styled.section`
  height: 40rem;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  div {
    padding: 4rem 0;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h1 {
      font-size: 3.5rem;
      font-weight: 200;
      margin-bottom: 2rem;
    }
    p {
      letter-spacing: 1px;
      max-width: 50%;
      line-height: 150%;
      @media (max-width: 768px) {
        max-width: 90%;
      }
    }
  }
`;

const RecentPosts = styled(TopProducts)``;

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

const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(170, 168, 168, 0.1);
  h1 {
    color:black;
    margin-top:3rem;
  }
  div {
    padding-top:0rem;
    background-color: rgba(0, 0, 0, 0);
  }
`;
