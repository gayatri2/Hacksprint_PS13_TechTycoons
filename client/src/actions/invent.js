import * as api from "../api/index.js";
import axios from "axios";
export const getOrder = () => async (dispatch) => {
  try {
    axios({
      method: "get",
      url: "http://localhost:5000/getorder",
    }).then((response) => {
      dispatch({ type: "FETCH_ALL", payload: response.data });
      console.log("expected", response);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addOrder = (order) => async (dispatch) => {
  var url = "http://localhost:5000/updateorder/" + order;
  try {
    axios({
      method: "post",
      url: url,
    }).then((response) => {
      dispatch({ type: "CREATE", payload: response.data });
      console.log(response);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  var url = "http://localhost:5000/deleteorder/" + id;
  try {
    axios({
      method: "post",
      url: url,
    }).then((response) => {
      dispatch({ type: "DELETE", payload: id });
      console.log(response);
    });
  } catch (error) {
    console.log(error.message);
  }
};
