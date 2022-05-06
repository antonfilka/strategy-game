import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import UnitCell from "../UnitCell/UnitCell";
import { rowWrapper } from "./RowOfCells.css";

type IRowOfCells = {
  currentTeamTurn: string;
  attackingUnit: units | null;
  attackingTeam: Team;
  enemyTeam: Team;
  unitOnHover: string;
  rowOfUnits: Array<units>;
  handleSetCurrentTarget: (unit: units) => void;
  unitsAvailable: boolean;
};

const RowOfCells: React.FC<IRowOfCells> = ({
  currentTeamTurn,
  attackingUnit,
  attackingTeam,
  enemyTeam,
  unitOnHover,
  rowOfUnits,
  handleSetCurrentTarget,
  unitsAvailable,
}) => {
  return (
    <div className={rowWrapper}>
      {rowOfUnits.map((unit: units, index: number) => (
        <UnitCell
          key={index}
          currentTeamTurn={currentTeamTurn}
          attackingUnit={attackingUnit}
          attackingTeam={attackingTeam}
          enemyTeam={enemyTeam}
          unit={unit}
          unitOnHover={unitOnHover}
          handleSetCurrentTarget={handleSetCurrentTarget}
          unitsAvailable={unitsAvailable}
        />
      ))}
    </div>
  );
};

export default RowOfCells;
