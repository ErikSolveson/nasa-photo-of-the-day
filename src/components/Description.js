import React from "react";
import styled from "styled-components";

function Description(props) {
  const { description } = props;

  const StyledDescription = styled.div`
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: lightgray;
  `;

  return (
    <StyledDescription>
      <h2>Description</h2>
      {<p>{description}</p>}
    </StyledDescription>
  );
}

export default Description;
