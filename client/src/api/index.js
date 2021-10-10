import axios from "axios";

const url = "http://localhost:5000/getinventory";
export const fetchPosts = () => {
  console.log("yes");
  axios({
    method: "get",
    url: "http://localhost:5000/getinventory",
  });
};
