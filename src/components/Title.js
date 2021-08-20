import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <div className="section-center">
        <h2 className="section-title">{title}</h2>
        <div className="underline"></div>
      </div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  .section-title {
    text-align: center;
    text-transform: uppercase;
    color: var(--color-grey-7);
    font-size: 4.6rem;
    margin-bottom: 0.5rem;
  }

  .underline {
    width: 8rem;
    height: 0.2rem;
    background: var(--color-teal-6);
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export default Title;
