import React from "react";
import styled from "styled-components";
import heroBcg from "../assets/HeroImg.jpg";
import Banner from "../components/Banner";

const Background = () => {
  return (
    <Wrapper>
      <Banner />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: url(${heroBcg});
  height: calc(100vh - 6rem);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export default Background;
