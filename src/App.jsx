import React from "react";
import "./index.css";
import "./icons.css";
import Aside from "./components/aside/Aside";
import Barra from "./components/bar/Barra";
import MainContent from "./components/main/MainContent";

const App = () => {
  return (
    <div class="containMain">
      <Aside />
      <Barra />
      <MainContent />
    </div>
  );
};

export default App;
