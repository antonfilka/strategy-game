import React, { Component } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import UnitCell from "../UnitCell/UnitCell";
import { rowWrapper } from "./RowOfCells.css";

type RowOfCellsProps = {
  rowOfUnits: Array<units>;
};

export default class RowOfCells extends Component<RowOfCellsProps> {
  private rowOfUnits;
  constructor(props: RowOfCellsProps) {
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
