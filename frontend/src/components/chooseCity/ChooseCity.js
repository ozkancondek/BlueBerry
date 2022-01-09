import React from "react";
import banner24 from "../../assests/banner24.jpg";
const inStyle = {
  p: {
    fontSize: "2rem",
    marginRight: "50px",
    fontFamily: "Roboto Condensed ",
  },
  div: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${banner24})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};
export const ChooseCity = () => {
  return (
    <div style={inStyle.div}>
      <p style={inStyle.p}>Add some city to favorites...</p>
    </div>
  );
};
