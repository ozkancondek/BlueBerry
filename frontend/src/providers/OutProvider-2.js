import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { data } from "../data";
import PropTypes from "prop-types";

const OuterContext = createContext();

export const INCREASE = "increase";
export const UPDATE_FAV = "UPDATE_FAV";

const initial = { counter: 5, favList: [] };

const myReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case UPDATE_FAV:
      return { ...state, favList: action.payload };
    default:
      return state;
  }
};

export const localSetter = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localKeys = {
  localData: "localData",
};

export const OuterProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAutenticated] = useState(true);
  const [state, dispatch] = useReducer(myReducer, initial);
  const localData = () => {
    //check if is there a key in local storage with localData name
    const response = localStorage.getItem(localKeys.localData);
    if (!response) {
      return;
    }
    updater(JSON.parse(response));
  };

  const updateFavList = (id) => {
    if (state.favList.includes(id)) {
      //When i clicked, check if the id of card exist in favlist
      const filteredArray = state.favList.filter((favId) => favId !== id); //if there is, remove it from favList
      localSetter(localKeys.localData, filteredArray); //then send to local
      updater(filteredArray);
      //setFavList(filteredArray)
    } else {
      localSetter(localKeys.localData, [...state.favList, id]); // if there is not, add it to favList
      updater([...state.favList, id]);
      //setFavList( [...state.favlist, id]);
    }
  };

  const updater = (payload) => {
    dispatch({ payload, type: UPDATE_FAV });
  };
  // get the data from local storage when the page reloaded
  useEffect(() => {
    localData();
  }, []);

  return (
    <OuterContext.Provider
      value={{
        isAuthenticated,
        data,
        favList: state.favList,
        localData,
        dispatch,
        updateFavList,
      }}
    >
      {props.children}
    </OuterContext.Provider>
  );
};

export const useOut = () => {
  const myOutData = useContext(OuterContext);
  if (!myOutData) {
    throw new Error("useOut need to used in OuterProvider");
  }
  return myOutData;
};

OuterProvider.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  favList: PropTypes.array.isRequired,
  setFavList: PropTypes.object.isRequired,
  localData: PropTypes.object.isRequired,
};
/*  const { isAuthenticated } = useOut(); */
