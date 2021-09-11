import React, { Component } from "react";
import styled from "styled-components";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError === true) {
      return (
        <Wrapper>
          <article
            className="container"
            // imageUrl="https://i.imgur.com/yW2W9SC.png"
          >
            <p>Sorry, this page is broken</p>
          </article>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}

const Wrapper = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    display: inline-block;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    width: 40vh;
    height: 40vh;
  }
  p {
    font-size: 2.8rem;
    color: #2f8e89;
  }
`;

export default ErrorBoundary;
