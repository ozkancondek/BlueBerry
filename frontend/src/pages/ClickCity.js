import React from "react";
import { AiFillLike } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCommentAlt, FaMapSigns, FaUserCircle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

import { useNavigate, useParams } from "react-router-dom";
import {
  Comment,
  CommentContainer,
  DetailsBar,
  IconContainer,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../components/cards/CardStyles";
import { useOut } from "../providers/MainProvider";

import "./pages.css";
import { Button } from "react-bootstrap";

export const ClickCity = () => {
  const navigate = useNavigate();
  const { setFavList, favList, showComment, setShowComment } = useOut();

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

  const commentFunc = () => {
    if (showComment) {
      setShowComment(false);
    } else {
      setShowComment(true);
    }

    console.log(showComment);
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
          <FaCommentAlt
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => commentFunc()}
          />
        </IconContainer>
        <IconContainer>
          <a href="https://www.google.com/maps">
            <FaMapSigns size={30} />
          </a>
        </IconContainer>
        <IconContainer>
          <IoLogoWhatsapp size={30} style={{ cursor: "pointer" }} />
        </IconContainer>
        <IconContainer>
          <BsFacebook size={30} style={{ cursor: "pointer" }} />
        </IconContainer>

        <IconContainer>
          <RiInstagramFill size={30} style={{ cursor: "pointer" }} />
        </IconContainer>
      </DetailsBar>
      {showComment && (
        <CommentContainer>
          <Comment>
            <h4> {<FaUserCircle />} Anna commented on 12 december</h4>
            <p>omg... its the best city of my life. thanks newyork </p>
          </Comment>
          <Comment>
            <h4> {<FaUserCircle />} Anna commented on 12 december</h4>
            <p>omg... its the best city of my life. thanks newyork </p>
          </Comment>
          <Button
            variant="outline-secondary"
            style={{ marginTop: "10px" }}
            onClick={() => {
              navigate("/forum");
            }}
          >
            Go to Forum
          </Button>
        </CommentContainer>
      )}
    </div>
  );
};
