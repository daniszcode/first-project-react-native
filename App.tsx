import React from "react";
import { Home } from "../NewProject/src/Pages/Home/Home";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
