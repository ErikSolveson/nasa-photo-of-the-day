import React from "react";
import styled from "styled-components";

function Photo(props) {
  const { src } = props;

  const StyledImage = styled.div`
    img {
      max-width: 600px;
    }
  `;

  return (
    <StyledImage>
      <img src={src} alt="nasa photo of the day" />
    </StyledImage>
  );
}

export default Photo;
