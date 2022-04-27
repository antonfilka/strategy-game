import React, { useEffect, useState } from "react";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/services/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import SideBarUnitCell from "../SideBarUnitCell/SideBarUnitCell";
import { roundInfoWrapper } from "./RoundInfo.css";

interface IRoundInfo {
  currentTeam: Team;
  unitOnHover: string;
  setUnitOnHover: (str: string) => void;
}

const RoundInfo: React.FC<IRoundInfo> = ({
  currentTeam,
  unitOnHover,
  setUnitOnHover,
}) => {
  return (
    <div className={roundInfoWrapper}>
      {currentTeam
        .getUnitsInTurn()
        .map((unit, index) =>
          !unit.getIsDead() && !unit.getIsParalyzed() ? (
            <SideBarUnitCell
              cellUnit={unit}
              key={index}
              unitOnHover={unitOnHover}
              setUnitOnHover={setUnitOnHover}
            />
          ) : null
        )}
    </div>
  );
};

export default RoundInfo;
