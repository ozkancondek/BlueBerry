import React from "react";
import { Comp2 } from "../components/mainpage-components/Comp2";
import { Comp3 } from "../components/mainpage-components/Comp3";
import { Comp4 } from "../components/mainpage-components/Comp4";
import { Comp5 } from "../components/mainpage-components/Comp5";
import { Comp6 } from "../components/mainpage-components/Comp6";
import { Comp7 } from "../components/mainpage-components/Comp7";
import { Comp1 } from "../components/mainpage-components/Comp_1";

import Slider from "../components/slider/Slider";

export const Home = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Slider />
      <Comp7 />
    </div>
  );
};
