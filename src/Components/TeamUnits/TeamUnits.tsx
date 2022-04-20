import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import RowOfCells from "../RowOfCells/RowOfCells";
import { teamWrapper } from "./TeamUnits.css";

interface ITeamUnits {
  units: Array<Array<units>>;
}

export default class TeamUnits extends React.Component<ITeamUnits> {
  units: Array<Array<units>>;
  constructor(props: ITeamUnits) {
    super(props);
    this.units = props.units;
  }
  render() {
    return (
      <div className={teamWrapper}>
        {this.units.map((rowOfUnits, index) => {
          return <RowOfCells rowOfUnits={rowOfUnits} key={index} />;
        })}
      </div>
    );
  }
}
