import React from "react";

import banner1 from "../../assests/banner1.jpg";
import banner2 from "../../assests/banner2.jpg";
import banner5 from "../../assests/banner5.jpg";
import {
  BackgroundContainer1,
  TextContainer1,
} from "../mainpage-components/StyledComponents";

export const Comp1 = () => {
  const images = {
    img1: banner1,
    img2: banner2,
    img5: banner5,
  };

  return (
    <div>
      <BackgroundContainer1 img={images.img5}>
        <TextContainer1>
          <p>Find</p>
          <p>somewhere</p>
          <p>to go</p>
        </TextContainer1>
      </BackgroundContainer1>
    </div>
  );
};
