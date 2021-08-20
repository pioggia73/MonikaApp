import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import errorImg from "../assets/HeroImg.jpg";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <section className="section section-error">
        <div>
          <h2 className="heading-secondary margin-bottom-b">
            Ooops! <br></br>Something went wrong!
          </h2>
          <button className="btn">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </section>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.section`
  .section-error {
    background: url(${errorImg});
    background-position: center;
    background-size: cover;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default ErrorPage;
