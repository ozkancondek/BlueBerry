import React, { useEffect, useState } from "react";
import "../components/cards/Cards.css";
import { Card } from "../components/cards/Card";

import { useOut } from "../providers/MainProvider";

import { ChooseCity } from "../components/chooseCity/ChooseCity";
import { useApi } from "../providers/ApiProvider";

export const YourChoices = () => {
  const [data, setdata] = useState([]);
  const { getPost } = useApi();
  const { favList } = useOut();
  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await getPost();

        setdata(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const favCities = data
    .filter((card) => favList.includes(card.id))
    .map((card) => {
      return (
        <Card
          isFavorite={favList.includes(card.id)}
          card={card}
          key={data.id}
          id={card.id}
        />
      );
    });

  if (favList.length !== 0) {
    return (
      <div style={{ minHeight: "90vh" }}>
        <div className="card-container">{favCities}</div>
      </div>
    );
  } else {
    return <ChooseCity />;
  }
};
