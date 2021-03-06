import React from "react";
import styled from "styled-components";
import aboutMe from "../assets/me.jpg";
import Title from "../components/Title";
import Overlay from "../components/Overlay";
import { CoursesContext } from "../context/CoursesContext";

const About = () => {
  const { isOpen } = React.useContext(CoursesContext);
  return (
    <Wrapper className="section">
      {isOpen ? <Overlay /> : null}
      <Title title="about me" />
      <article className="section-center container">
        <div className="about-text">
          <p>
            <span>Hey,</span>
            <br />I am Monika. I have been a languages teacher for some years.
            But some time ago I decided to change my career path and become a
            front-web developer. I completed a lot of online courses. I am a
            hard-working and determined person. I love coding and learning
            languages.
          </p>
        </div>
        <div className="img-container">
          <img src={aboutMe} alt="me" className="main-img" />
          <img src={aboutMe} alt="small me" className="small-img" />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  max-height: calc(100vh - 6rem);
  background: #fdfdfc;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10vw;
    padding: 4rem;
  }

  .about-text p {
    line-height: 1.8;
    font-size: 2rem;
    //text-align: center;
    padding: 1rem 2rem;
    flex-wrap: wrap;

    span {
      font-size: 3rem;
      color: var(--color-teal-8);
      font-style: italic;
      font-weight: 600;
      text-shadow: 2px 2px 8px var(--color-teal-5);
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .main-img {
    width: 80%;
    display: block;
    position: relative;
    z-index: 2;
  }

  .img-container:after {
    content: "";
    background-color: var(--color-teal-8);
    width: 70%;
    height: 70%;
    left: 2rem;
    bottom: 0.4rem;
    z-index: 1;
    position: absolute;
  }

  .small-img {
    width: 35%;
    display: block;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    z-index: 2;
  }

  @media (max-width: 72.5em) {
    .container {
      gap: 5vw;
      padding: 4rem 2rem;
    }
  }

  @media (max-width: 68.75em) {
    .container {
      display: flex;
      flex-direction: column-reverse;
      padding: 4rem;
      align-items: center;
    }
  } ;
`;

export default About;
