import React from "react";
import styled from "styled-components";

function Photo(props) {
  const { src } = props;

  const StyledImage = styled.div`
    width: 80vw;
    background-color: lightblue;
    max-width: 620px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 40%;
    img {
      max-width: 600px;
      border-radius: 50%;
    }
  `;

  return (
    <StyledImage>
      <img src={src} alt="nasa photo of the day" />
    </StyledImage>
  );
}

export default Photo;
