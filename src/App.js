import React from "react";
import "./style/app.scss"
import Header from "./components/Header";
import Slider from "./components/Slider";


function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
