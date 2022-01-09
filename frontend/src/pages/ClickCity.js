import React from "react";
import { AiFillLike } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapSigns } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

import { useParams } from "react-router-dom";
import {
  DetailsBar,
  IconContainer,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../components/cards/CardStyles";
import { useOut } from "../providers/MainProvider";

import "./pages.css";

export const ClickCity = () => {
  const { setFavList, favList } = useOut();

  const params = useParams();
  const { data } = useOut();
  const filteredCity = data.find((c) => c.id === +params.cityid);

  const changeColor = (e) => {
    e.stopPropagation();

    setFavList((prev) => {
      if (prev.includes(filteredCity.id)) {
        const filteredArray = prev.filter((favId) => favId !== filteredCity.id);
        localStorage.setItem("localData", JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        localStorage.setItem(
          "localData",
          JSON.stringify([...prev, filteredCity.id])
        );
        return [...prev, filteredCity.id];
      }
    });
  };

  const isFavorite = favList.includes(filteredCity.id);

  return (
    <div>
      <TextPhotoContainer>
        <ImageContainer img={filteredCity.image}></ImageContainer>
        <TextContainer>
          <h2>{filteredCity.title}</h2>
          <p>{filteredCity.desc}</p>
        </TextContainer>
      </TextPhotoContainer>
      <DetailsBar>
        <IconContainer>
          {" "}
          <AiFillLike
            size={30}
            onClick={changeColor}
            style={{
              color: isFavorite ? "#24a0ed " : "#212121",
              width: "80px",
              cursor: "pointer",
            }}
          />
        </IconContainer>
        <IconContainer>
          <a href="https://www.google.com/maps">
            <FaMapSigns size={30} />
          </a>
        </IconContainer>
        <IconContainer>
          <IoLogoWhatsapp size={30} />
        </IconContainer>
        <IconContainer>
          <BsFacebook size={30} />
        </IconContainer>

        <IconContainer>
          <RiInstagramFill size={30} />
        </IconContainer>
      </DetailsBar>
    </div>
  );
};
