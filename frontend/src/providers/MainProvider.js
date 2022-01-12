import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";

const OuterContext = createContext();

export const MainProvider = (props) => {
  const [isAuthenticated, setIsAutenticated] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const [favList, setFavList] = useState([]);

  const localData = () => {
    const response = localStorage.getItem("localData");

    if (!response) {
      return;
    }
    setFavList(JSON.parse(response));
  };

  useEffect(() => {
    localData();
  }, []);

  return (
    <OuterContext.Provider
      value={{
        isAuthenticated,
        setIsAutenticated,
        data,
        favList,
        setFavList,
        localData,
        setPageNum,
        pageNum,
        setShowComment,
        showComment,
      }}
    >
      {props.children}
    </OuterContext.Provider>
  );
};

export const useOut = () => {
  const myOutData = useContext(OuterContext);
  if (!myOutData) {
    throw new Error("useOut need to used in MainProvider");
  }
  return myOutData;
};
