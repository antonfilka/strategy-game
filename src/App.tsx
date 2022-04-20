import React from "react";
import { AppWrapper, Arena } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import RowOfCells from "./Components/RowOfCells/RowOfCells";
import RandomUnitGenerator from "./gameClasses/services/RandomUnitGenerator";

class App extends React.Component {
  units = [
    [
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
    ],
    [
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
    ],
    [
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
    ],
    [
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
      RandomUnitGenerator.getUnit(),
    ],
  ];

  render() {
    return (
      <div className={AppWrapper}>
        <div className={Arena}>
          {this.units.map((rowOfUnits, index) => {
            return <RowOfCells rowOfUnits={rowOfUnits} key={index} />;
          })}
        </div>
        <DynamicBackground />
      </div>
    );
  }
}

export default App;
