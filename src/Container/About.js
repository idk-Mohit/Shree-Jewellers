import React from "react";
import styled from "styled-components";
import {
  Section1,
  Showcase,
  ContactSection,
  FadeCarousel,
  SignUpSection,
} from "../components/index";

const About = () => {
  return (
    <>
      <Section1
        bgImage={
          "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/home1_slide1.jpg"
        }
        title="About Us"
        subtitle="ABOUT US"
      />
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
              "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/service-3-370x246.jpg",
            title: "BRACELETS",
            link: "",
            btn: "SHOP NOW",
          },
        ]}
      />
      <ContactSection />
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
      <OurTeam>
        <h1>Our Team</h1>
        <Showcase
          data={[
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/team-4-540x540.jpg",
              title: "Nina Stevens",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/team-3-540x540.jpg",
              title: "Joanne Moore",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/team-2-540x540.jpg",
              title: "Julia Parker",
            },
            {
              image:
                "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/05/team-1-540x540.jpg",
              title: "Robert Tompson",
            },
          ]}
        />
      </OurTeam>
      <SignUpSection />
      <Showcase
        data={[
          { title: "PHONE NUMBER", btn: "123-456-7890" },
          { title: "LOCATION", btn: "123, New Lenox Chicago,1L 60606" },
          { title: "EMAIL ADDRESS", btn: "info@yoursite.com" },
        ]}
      />
    </>
  );
};

export default About;

const OurTeam = styled.div`
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
  }
`;
