import React from "react";
import { AppWrapper } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import RandomUnitGenerator from "./gameClasses/services/RandomUnitGenerator";

class App extends React.Component {
  hero = new RandomUnitGenerator().getUnit();
  render() {
    console.log(this.hero);
    return (
      <div className={AppWrapper}>
        <DynamicBackground />
      </div>
    );
  }
}

export default App;
