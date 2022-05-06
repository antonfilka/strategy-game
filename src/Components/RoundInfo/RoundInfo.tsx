import React from "react";
import Team from "../../gameClasses/Team";
import SideBarUnitCell from "../SideBarUnitCell/SideBarUnitCell";
import { roundInfoWrapper } from "./RoundInfo.css";
import SortAndCreateUnitsForTurn from "../../gameClasses/services/SortAndCreateUnitsForTurn";

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
      {SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(currentTeam).map(
        (unit, index) =>
          !unit.getIsDead() && !unit.getIsParalyzed() ? (
            <SideBarUnitCell
              unit={unit}
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
