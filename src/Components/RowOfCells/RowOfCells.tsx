import React, { Component } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import UnitCell from "../UnitCell/UnitCell";
import { rowWrapper } from "./RowOfCells.css";

type IRowOfCells = {
  setUnitsOnHover: (arr: Array<string>) => void;
  unitsOnHover: string[];
  rowOfUnits: Array<units>;
};

export default class RowOfCells extends Component<IRowOfCells> {
  private rowOfUnits;
  private unitsOnHover;
  private setUnitsOnHover;

  constructor(props: IRowOfCells) {
    super(props);
    this.rowOfUnits = props.rowOfUnits;
    this.unitsOnHover = props.unitsOnHover;
    this.setUnitsOnHover = props.setUnitsOnHover;
  }

  render() {
    return (
      <div className={rowWrapper}>
        {this.rowOfUnits.map((cellUnit: units, index: number) => (
          <UnitCell
            cellUnit={cellUnit}
            key={index}
            unitsOnHover={this.unitsOnHover}
            setUnitsOnHover={this.setUnitsOnHover}
          />
        ))}
      </div>
    );
  }
}
