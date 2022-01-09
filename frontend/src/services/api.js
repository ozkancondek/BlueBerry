import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  /* timeout:"10000" wait for 10 sec */
});

export const fetchData = async (pageNum) => {
  if (pageNum) {
    let res = await axios(
      "http://localhost:4000/api/cities/" + `?page=${pageNum}`
    );
    return res.data;
  } else {
    let res = await axios("http://localhost:4000/api/cities/");
    return res.data;
  }
};
export const fetchData2 = async () => {
  let res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });
  return res.data;
};

const fetchData3 = async () => {
  try {
    let res = await Api({
      url: "/todos/1",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const initialServices = {
  fetchData,
  fetchData2,
  fetchData3,
};
