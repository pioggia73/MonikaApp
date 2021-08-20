import React from "react";
import styled from "styled-components";

const Overlay = () => {
  return <OverlayContainer></OverlayContainer>;
};

const OverlayContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--clr-black);
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export default Overlay;
