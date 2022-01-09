import React from "react";
import { CardContainer, GridContainer } from "./StyledComponents";
import banner27 from "../../assests/banner27.jpg";
import banner16 from "../../assests/banner16.jpg";
import banner21 from "../../assests/banner21.jpg";

export const Comp6 = () => {
  return (
    <div>
      <GridContainer>
        <CardContainer>
          <img src={banner27} alt="banner27" />
          <p>Inspire</p>
        </CardContainer>
        <CardContainer>
          <img src={banner16} alt="banner16" />
          <p>Care</p>
        </CardContainer>
        <CardContainer>
          <img src={banner21} alt="banner21" />
          <p>Nature</p>
        </CardContainer>
      </GridContainer>
    </div>
  );
};
