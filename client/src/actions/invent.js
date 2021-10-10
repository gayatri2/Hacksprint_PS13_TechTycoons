import * as api from "../api/index.js";
import axios from "axios";
export const getInvent = () => async (dispatch) => {
  try {
    axios({
      method: "get",
      url: "http://localhost:5000/getinventory",
    }).then((response) => {
      dispatch({ type: "FETCH_ALL", payload: response.data });
      console.log(response);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addInvent = (newInvent) => async (dispatch) => {
  try {
    axios({
      method: "post",
      url: "http://localhost:5000/inventory",
      data: newInvent,
    }).then((response) => {
      dispatch({ type: "CREATE", payload: response.data });
      console.log(response);
    });
  } catch (error) {
    console.log(error.message);
  }
};
