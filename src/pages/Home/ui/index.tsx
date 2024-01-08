import React from "react";
import { Header } from "@features/Header";
import { HomeScreen } from "@widgets/HomeScreen";
import { AboutScreen } from "@widgets/AboutScreen";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutScreen />
    </>
  );
};
