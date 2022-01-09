import React from "react";
import { Cards } from "../components/cards/Cards";
import { Pagination } from "../components/paginationBar/Pagination";

export const Cities = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Cards />
      <Pagination />
    </div>
  );
};
