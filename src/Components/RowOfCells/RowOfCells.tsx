import React, { Component } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import UnitCell from "../UnitCell/UnitCell";
import { rowWrapper } from "./RowOfCells.css";

type IRowOfCells = {
  unitOnHover: string;
  rowOfUnits: Array<units>;
  handleSetCurrentTarget: (unit: units) => void;
  unitsAvailable: boolean;
};

const RowOfCells: React.FC<IRowOfCells> = ({
  unitOnHover,
  rowOfUnits,
  handleSetCurrentTarget,
  unitsAvailable,
}) => {
  return (
    <div className={rowWrapper}>
      {rowOfUnits.map((cellUnit: units, index: number) => (
        <UnitCell
          cellUnit={cellUnit}
          key={index}
          unitOnHover={unitOnHover}
          handleSetCurrentTarget={handleSetCurrentTarget}
          unitsAvailable={unitsAvailable}
        />
      ))}
    </div>
  );
};

export default RowOfCells;
