import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { cellWrapper, image } from "./UnitCel.css";

type UnitCellProps = {
  cellUnit: units;
};

export default class UnitCell extends React.Component<UnitCellProps> {
  unit: units;
  constructor(props: UnitCellProps) {
    super(props);
    this.unit = props.cellUnit;
  }
  render() {
    return (
      <div className={cellWrapper}>
        <img src={this.unit.getImage()} className={image} />
      </div>
    );
  }
}
