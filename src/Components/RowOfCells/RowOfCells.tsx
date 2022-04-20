import React, { Component } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import UnitCell from "../UnitCell/UnitCell";
import { rowWrapper } from "./RowOfCells.css";

type IRowOfCells = {
  rowOfUnits: Array<units>;
};

export default class RowOfCells extends Component<IRowOfCells> {
  private rowOfUnits;
  constructor(props: IRowOfCells) {
    super(props);
    this.rowOfUnits = props.rowOfUnits;
  }

  render() {
    return (
      <div className={rowWrapper}>
        {this.rowOfUnits.map((cellUnit: units, index: number) => (
          <UnitCell cellUnit={cellUnit} key={index} />
        ))}
      </div>
    );
  }
}
