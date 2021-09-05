import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div>
        <div className="loader">
          <div className="outer"></div>
          <div className="middle"></div>
          <div className="inner"></div>
          <div className="dot"></div>
        </div>
        <h4>Loading...</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  text-align: center;
  background-color: var(--color-teal-0);

  h4 {
    font-size: 3rem;
  }

  .loader {
    width: 20rem;
    height: 20rem;
    position: relative;
    margin-bottom: 6rem;
  }

  .outer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-right: 0.5rem solid #eb4d4b;
    border-left: 0.5rem solid #eb4d4b;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }
  .middle {
    position: absolute;
    top: 3rem;
    left: 3rem;
    right: 3rem;
    bottom: 3rem;
    border-right: 0.5rem solid #218c73;
    border-left: 0.5rem solid #218c74;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite reverse;
  }
  .inner {
    position: absolute;
    top: 6rem;
    left: 6rem;
    right: 6rem;
    bottom: 6rem;
    border-right: 0.5rem solid #ccae62;
    border-left: 0.5rem solid #ccae62;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }

  .dot {
    position: absolute;
    top: 9rem;
    right: 9rem;
    bottom: 9rem;
    left: 9rem;
    background-color: var(--color-teal-8);
    border-radius: 50%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } ;
`;

export default Loading;
