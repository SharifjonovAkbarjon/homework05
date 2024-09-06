import React, { memo, useEffect } from "react";
import Products from "../components/Products";
import { useDispatch } from "react-redux";
import axios from "../api";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("admin/profile").then((res) => {
      dispatch({ type: "SET_PROFILE", payload: res.data.payload });
    });
  }, []);

  return (
    <div>
      <Products />
    </div>
  );
};

export default memo(Home);
