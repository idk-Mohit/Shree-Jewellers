import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Section,
  Showcase,
  FadeCarousel,
  SwipeCarousel,
  Button,
} from "../components/index";
import { SliderData } from "../components/MainSection/SliderData";
import {
  Signature,
  Logo,
  jewelryMaking,
  TestimonialBg,
  Background5,
} from "../images/index";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Updates Turn On for ${email}`);
  };
  const checkBoxHandler = (e) => {
    setChecked(!checked);
  };
  return (
    <>
      {/* Main Section width background carousel */}
      <Section slides={SliderData} />
      {/* {/* 2nd Section with Jewelry showcase */}
      <ShowCaseSection>
        <Showcase
          image="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer1-370x246.jpg"
          title="WEDDING JEWELRY"
          link=""
          btn="SHOP NOW"
        />
        <Showcase
          image="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer2-370x246.jpg"
          title="CUSTOM DESIGN"
          link=""
          btn="SHOP NOW"
        />
        <Showcase
          image="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/offer3-370x246.jpg"
          title="NEW COLLECTION"
          link=""
          btn="SHOP NOW"
        />
      </ShowCaseSection>
      {/* 3rd Section with contact information */}
      <ContactInfoSection className="container">
        <ContactText>
          <h1>Created for Love</h1>
          <p>
            Jewellery may be made from a wide range of materials. Gemstones and
            similar materials such as amber and coral, precious metals, beads,
            and shells have been widely used, and enamel has been important.
          </p>
          <img src={Signature} alt="Sign" />
        </ContactText>
        <ContactImage></ContactImage>
        <ContactInnerDiv>
          <img src={Logo} alt="logo" />
          <h4>CONTACT ME</h4>
          <hr />
          <div>
            <Link to="/">
              <span>123-456-7890</span>
            </Link>
            <Link to="/">
              <span>info@yoursite.com</span>
            </Link>
          </div>
        </ContactInnerDiv>
      </ContactInfoSection>
      {/* 4th Section  history sh!t carousel */}
      <CarouselContainer bgImage={jewelryMaking}>
        <TextContainer className="carousel_text-container">
          <h1>Brand's History</h1>
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
          <Button>Read More</Button>
        </TextContainer>
      </CarouselContainer>
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
        <div className="container">
          <Showcase
            image="https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="WEDDING JEWELRY"
            link=""
            btn="ADD TO CART"
            price="745"
          />
          <Showcase
            image="https://images.pexels.com/photos/735252/pexels-photo-735252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="WEDDING JEWELRY"
            link=""
            btn="ADD TO CART"
            price="745"
          />
          <Showcase
            image="https://images.pexels.com/photos/7541801/pexels-photo-7541801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="WEDDING JEWELRY"
            link=""
            btn="ADD TO CART"
            price="745"
          />
          <Showcase
            image="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="WEDDING JEWELRY"
            link=""
            btn="ADD TO CART"
            price="745"
          />
        </div>
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
        <div className="container">
          <Showcase
            image="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/post-8-370x205.jpg"
            title="An Odd Story of an Engagement Ring"
            btn="COMMENTS"
          />
          <Showcase
            image="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/post-7-370x205.jpg"
            title="Exquisite &amp; Custom Diamond Jewelry"
            btn="COMMENTS"
          />
          <Showcase
            image="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/post-6-370x205.jpg"
            title="The World's Most Famous Jewelry Artists"
            btn="COMMENTS"
          />
        </div>
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
      <SignUp className="container">
        <LeftSignUpDiv>
          <h1>SIGNUP FOR UPDATES</h1>
          <form onSubmit={formSubmitHandler}>
            <div className="input_button">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email Address"
                required={true}
                onChange={emailHandler}
              />
              <Button type="submit">SUBMIT</Button>
            </div>
            <div className="checkbox_label">
              <input
                type="checkbox"
                name="terms"
                id="termsconditions"
                onChange={checkBoxHandler}
                checked={checked}
                required={true}
              />
              <label htmlFor="termsconditions">
                <span>
                  I have read and agree to the{" "}
                  <Link to="/">Terms &amp; conditions</Link>
                </span>
              </label>
            </div>
          </form>
        </LeftSignUpDiv>
        <AddressMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11779.228226902611!2d77.21375271973137!3d28.63019654968136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1646113643639!5m2!1sen!2sin"
            title="map"
            loading="lazy"
          ></iframe>
        </AddressMap>
      </SignUp>
      <GetInTouch>
        <div className="container">
          <Showcase title="PHONE NUMBER" btn="123-456-7890" />
          <Showcase title="LOCATION" btn="123, New Lenox Chicago,1L 60606" />
          <Showcase title="EMAIL ADDRESS" btn="info@yoursite.com" />
        </div>
      </GetInTouch>
    </>
  );
};

export default Home;

const ShowCaseSection = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 6rem 0;
  background: rgba(170, 168, 168, 0.1);
`;

const ContactInfoSection = styled.div`
  color: black;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-template-areas:
    "text image"
    "info image";
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text"
      "info";
  }
`;

const ContactText = styled.div`
  padding: 2rem;
  max-width: 40rem;
  grid-area: text;
  background: rgba(200, 200, 200, 0.3);
  h1 {
    color: black;
    font-size: 4rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  p {
    color: black;
    font-weight: 400;
    letter-spacing: 1px;
    color: gray;
    line-height: 110%;
  }
  img {
    margin: 2rem 0;
  }
`;
const ContactInnerDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  img {
    width: 4rem;
    margin-bottom: 1.5rem;
  }
  hr {
    margin: 1rem 0;
    width: 8rem;
  }

  div {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactImage = styled.div`
  grid-area: image;
  height: 50rem;
  max-width: 40rem;
  background-image: url(https://images.pexels.com/photos/5475580/pexels-photo-5475580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  @media (max-width: 768px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.4)
    ),
    ${(props) => `url(${props.bgImage})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 30rem;
  position: relative;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  position: relative;
  padding: 10rem 0;
  width: 50%;
  margin-left: auto;
  h1 {
    font-size: 4rem;
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

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
  background: rgba(200, 200, 200, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  div {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  h1 {
    color: black;
    font-size: 3.5rem;
    font-weight: 400;
    margin-bottom: 4rem;
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
const GetInTouch = styled(TopProducts)``;

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

const SignUp = styled(Testimonials)`
  min-height: auto;
`;

const AddressMap = styled.div`
  iframe {
    width: 100%;
    height: 100%;
  }
`;
const LeftSignUpDiv = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .input_button {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem 0;
    input {
      margin: 0 0.5rem 0.5rem 0;
    }
    button {
      margin: 0;
      padding: 1.5rem;
    }
  }
  .checkbox_label {
    display: flex;
    height: 2rem;
    position: relative;
    input {
      margin-top: 0.3rem;
    }
    label {
      position: absolute;
      left: 1.2rem;
      top: 0;
      span {
        color: rgba(200, 200, 200, 0.5);
      }
    }
  }
`;
