import React, { useEffect, useState } from "react";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import SideBarUnitCell from "../SideBarUnitCell/SideBarUnitCell";
import { roundInfoWrapper } from "./RoundInfo.css";

interface IRoundInfo {
  teamA: Team;
  teamB: Team;
  currentTurn: string;
  unitOnHover: string;
  setUnitOnHover: (str: string) => void;
}

const RoundInfo: React.FC<IRoundInfo> = ({
  teamA,
  teamB,
  currentTurn,
  unitOnHover,
  setUnitOnHover,
}) => {
  const [unitsA, setUnitsA] = useState(teamA.getUnitsInTurn());
  const [unitsB, setUnitsB] = useState(teamB.getUnitsInTurn());

  useEffect(() => {
    setUnitsA(teamA.getUnitsInTurn());
    setUnitsB(teamB.getUnitsInTurn());
  });

  return (
    <div className={roundInfoWrapper}>
      {currentTurn === teams.teamA
        ? unitsA.map((unit, index) =>
            !unit.getIsDead() ? (
              <SideBarUnitCell
                cellUnit={unit}
                key={index}
                unitOnHover={unitOnHover}
                setUnitOnHover={setUnitOnHover}
              />
            ) : null
          )
        : null}
      {currentTurn === teams.teamB
        ? unitsB.map((unit, index) =>
            !unit.getIsDead() ? (
              <SideBarUnitCell
                cellUnit={unit}
                key={index}
                unitOnHover={unitOnHover}
                setUnitOnHover={setUnitOnHover}
              />
            ) : null
          )
        : null}
    </div>
  );
};

export default RoundInfo;
