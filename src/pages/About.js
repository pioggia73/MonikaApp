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
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z
            mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych
            „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego:
            „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie”
            po polsku.Ogólnie znana teza głosi, iż użytkownika może rozpraszać
            zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
            Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele
            różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do
            zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt
            czytelnie” po polsku.
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
  /* height: calc(100vh - 6rem); */
  background: #fdfdfc;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    padding: 4rem;
  }

  .about-text p {
    line-height: 1.8;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 2rem;
    flex-wrap: wrap;
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

  /* @media screen and (min-width: 900px) {
    .container {
      display: grid;
      column-gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }

    p {
      padding: 1rem;
    }
    .img-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .main-img {
      width: 25rem;
      height: 22rem;
      object-fit: cover;
      display: block;
      position: relative;
    }
    .img-container:after {
      content: "";
      width: 50%;
      height: 70%;
      left: 0rem;
      bottom: 0rem;
      position: absolute;
      z-index: -1;
      background-color: var(--clr-pink);
    }

    .small-img {
      display: block;
      position: absolute;
      width: 10rem;
      height: 7rem;
      bottom: 2rem;
      left: -1rem;
    }
  }

  @media screen and (min-width: 1000px) {
    .container {
      column-gap: 5rem;
    }

    .about-text {
      display: grid;
      place-items: center;
    }
  } */
`;

export default About;
