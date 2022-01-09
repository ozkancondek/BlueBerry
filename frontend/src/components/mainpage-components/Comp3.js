import React from "react";
import { CardContainer, GridContainer } from "./StyledComponents";
import banner11 from "../../assests/banner11.jpg";
import banner14 from "../../assests/banner14.jpg";
import banner22 from "../../assests/banner22.jpg";

export const Comp3 = () => {
  return (
    <div>
      <GridContainer>
        <CardContainer>
          <img src={banner11} alt="banner11" />
          <p>Explore</p>
        </CardContainer>
        <CardContainer>
          <img src={banner14} alt="banner14" />
          <p>See</p>
        </CardContainer>
        <CardContainer>
          <img src={banner22} alt="banner22" />
          <p>Drive</p>
        </CardContainer>
      </GridContainer>
    </div>
  );
};
