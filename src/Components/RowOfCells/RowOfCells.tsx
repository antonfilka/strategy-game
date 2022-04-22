import React, { Component } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import UnitCell from "../UnitCell/UnitCell";
import { rowWrapper } from "./RowOfCells.css";

type IRowOfCells = {
  unitOnHover: string;
  rowOfUnits: Array<units>;
};

const RowOfCells: React.FC<IRowOfCells> = ({ unitOnHover, rowOfUnits }) => {
  return (
    <div className={rowWrapper}>
      {rowOfUnits.map((cellUnit: units, index: number) => (
        <UnitCell cellUnit={cellUnit} key={index} unitOnHover={unitOnHover} />
      ))}
    </div>
  );
};

export default RowOfCells;
