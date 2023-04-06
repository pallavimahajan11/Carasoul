import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
