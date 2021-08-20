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

// const Wrapper = styled.section`
//   background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
//     url(${heroBcg});
//   height: calc(100vh - 80px);
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   display: flex;
//   align-items: center;
// `;

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
