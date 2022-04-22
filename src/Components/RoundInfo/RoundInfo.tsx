import React, { useEffect, useState } from "react";
import TurnSwitcher from "../../gameClasses/TurnSwitcher";
import SideBarUnitCell from "../SideBarUnitCell/SideBarUnitCell";
import { roundInfoWrapper } from "./RoundInfo.css";

interface IRoundInfo {
  turnSwitcher: TurnSwitcher;
  unitOnHover: string;
  setUnitOnHover: (str: string) => void;
}

const RoundInfo: React.FC<IRoundInfo> = ({
  turnSwitcher,
  unitOnHover,
  setUnitOnHover,
}) => {
  const [unitsA, setUnitsA] = useState(turnSwitcher.getTeamA().getUnits());
  const [unitsB, setUnitsB] = useState(turnSwitcher.getTeamB().getUnits());

  useEffect(() => {
    setUnitsA(turnSwitcher.getTeamA().getUnits());
    setUnitsB(turnSwitcher.getTeamB().getUnits());
  });

  return (
    <div className={roundInfoWrapper}>
      {turnSwitcher.getTeamA().getIsMyTurn()
        ? unitsA.map((rowOfUnits) =>
            rowOfUnits.map((unit, index) => (
              <SideBarUnitCell
                cellUnit={unit}
                key={index}
                unitOnHover={unitOnHover}
                setUnitOnHover={setUnitOnHover}
              />
            ))
          )
        : null}
      {turnSwitcher.getTeamB().getIsMyTurn()
        ? unitsB.map((rowOfUnits) =>
            rowOfUnits.map((unit, index) => (
              <SideBarUnitCell
                cellUnit={unit}
                key={index}
                unitOnHover={unitOnHover}
                setUnitOnHover={setUnitOnHover}
              />
            ))
          )
        : null}
    </div>
  );
};

export default RoundInfo;
