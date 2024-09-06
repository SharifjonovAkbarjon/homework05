import React, { memo, useEffect } from "react";
import Products from "../components/Products";
import { useDispatch } from "react-redux";
import axios from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("admin/profile").then((res) => {
      dispatch({ type: "SET_PROFILE", payload: res.data.payload });
    });
  }, []);

  return (
    <div>
      <Link to="Login">Login</Link> |
      <Products />
    </div>
  );
};

export default memo(Home);
