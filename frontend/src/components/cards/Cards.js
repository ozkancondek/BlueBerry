import { Card } from "./Card";
import PropTypes from "prop-types";
import banner23 from "../../assests/banner23.jpg";

import "./Cards.css";

import { useSearch } from "../../providers/SearchProvider";
import { useOut } from "../../providers/MainProvider";
import { Container, Row } from "react-bootstrap";
import {
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "./CardStyles";
import { useApi } from "../../providers/ApiProvider";
import { useEffect, useState } from "react";

export const Cards = () => {
  const { favList, setPageNum, pageNum } = useOut();
  const { getPost } = useApi();

  const { val } = useSearch();

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await getPost(pageNum);
        setPlaces(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [getPost, pageNum]);

  const filteredData = places
    .filter((card) => card.title.toLowerCase().includes(val.toLowerCase()))
    .map((card) => {
      return (
        <Card
          isFavorite={favList.includes(card.id)}
          card={card}
          key={card.id}
          id={card.id}
        />
      );
    });
  return (
    <div>
      <TextPhotoContainer>
        <ImageContainer img={banner23}></ImageContainer>
        <TextContainer>
          <p>
            There are many places in the world that need to be explored. With
            Blueberry you can discover the most interesting places you have
            never seen before and make your own roadmap.
          </p>
        </TextContainer>
      </TextPhotoContainer>
      <Container className="text-center mt-4 height:500px">
        <Row className="d-flex justify-content-center">{filteredData}</Row>
      </Container>
    </div>
  );
};
Cards.propTypes = {
  favList: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  val: PropTypes.string.isRequired,
};
