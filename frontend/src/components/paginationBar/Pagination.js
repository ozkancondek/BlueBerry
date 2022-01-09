import React, { useState } from "react";
import { useApi } from "../../providers/ApiProvider";
import { useOut } from "../../providers/MainProvider";
import { PaginationBar } from "./paginationStyle";

export const Pagination = () => {
  const { setPageNum } = useOut();
  const { getPost } = useApi();
  const [lenData, setLenData] = useState(0);

  const fetch = async () => {
    try {
      let res = await getPost();
      setLenData(res.length);
    } catch (error) {
      console.log(error);
    }
  };
  fetch();

  let cardNumberInPage = 20;

  let items = [];
  for (let i = 1; i <= lenData / cardNumberInPage; i++) {
    items = [...items, i];
  }

  return (
    <div>
      <PaginationBar>
        <a href="#" onClick={() => setPageNum(items[0])}>
          &laquo;
        </a>
        {items.map((num) => {
          return (
            <a href="#" onClick={() => setPageNum(num)}>
              {num}
            </a>
          );
        })}

        <a href="#" onClick={() => setPageNum(items.length)}>
          &raquo;
        </a>
      </PaginationBar>
    </div>
  );
};
