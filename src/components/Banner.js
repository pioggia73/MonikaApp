import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner">
        <h1 className="heading-primary">
          <span>I am Monika</span>
          <br />I am a Front-End developer
        </h1>
        <button className="btn margin-top-b">
          <Link to="/contact">contact me</Link>
        </button>
      </div>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  .banner {
    max-width: 60vw;
    padding: 3rem;
  }

  @media (max-width: 50em) {
    .banner {
      max-width: 90vw;
    }
  }

  /* @media (max-width: 37.5em) {
    .banner {
      max-width: 80vw;
    }
  } */

  /* .banner {
    background-color: var(--clr-dirty-pink);
    width: 80vw;
    height: 37vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: banner 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    h1,
    h3 {
      color: var(--clr-grey-1);
    }
  }

  @media (min-width: 692px) {
    .banner {
      width: 60vw;
      background-color: red;
    }
  }
  @media screen and (min-width: 800px) {
    .banner {
      width: 90vw;
    }
  }  */

  /* @keyframes banner {
    0% {
      transform: translateX(50rem) rotate(360deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  } */
`;

export default Banner;
