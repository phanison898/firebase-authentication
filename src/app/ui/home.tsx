"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import DashBoard from "./dashboard";
import SignIn from "./signin";

type Props = {};

const Home = (props: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return <>{user ? <DashBoard /> : <SignIn />}</>;
};

export default Home;
