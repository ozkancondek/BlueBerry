/* import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";
import { AllRoutes } from "./routes/AllRoutes";
import axios from "axios";

const App = () => {
  return (
    <div>
      <Navi />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export { App }; */

import { Footer } from "../components/footer/Footer";
import { Navi } from "../components/navbar/Navi";
import { AllRoutes } from "../routes/AllRoutes";
import axios from "axios";
import { useEffect, useState } from "react";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  /* timeout:"10000" wait for 10 sec */
});

const App = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData1 = async () => {
    try {
      let res = await axios("https://jsonplaceholder.typicode.com/todos/1");
      setData(res.data);
    } catch (error) {
      setMessage("Error");
    }
  };

  const fetchData2 = async () => {
    try {
      let res = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
      });
      setData(res.data);
    } catch (error) {
      setMessage("Error");
    }
  };

  // ***********************************************use this
  const fetchData3 = async () => {
    try {
      let res = await Api({
        url: "/todos/1",
      });
      setData(res.data);
    } catch (error) {
      setMessage("Error");
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
  });
  return (
    <div>
      <Navi />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export { App };
//Promise
const test = (val) => {
  return new Promise((resolve, reject) => {
    if (val < 5) {
      resolve("hello");
    }
    reject("maalesef");
  });
};
const test2 = (val) => {
  if (val < 5) {
    return Promise.resolve("hello");
  }

  return Promise.reject("maalesef");
};

test(15)
  .then((res) => console.log("test then", res))
  .catch((res) => console.log("test", res));
test2(1)
  .then((res) => console.log("ress", res))
  .catch((res) => console.log("ress4545", res))
  .finally(() => console.log("att"));
