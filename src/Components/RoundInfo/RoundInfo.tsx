import React, { useEffect, useState } from "react";
import TurnSwitcher from "../../gameClasses/TurnSwitcher";
import UnitCell from "../UnitCell/UnitCell";
import { roundInfoWrapper } from "./RoundInfo.css";

interface IRoundInfo {
  turnSwitcher: TurnSwitcher;
  unitsOnHover: Array<string>;
  setUnitsOnHover: (arr: Array<string>) => void;
}

const RoundInfo: React.FC<IRoundInfo> = ({
  turnSwitcher,
  unitsOnHover,
  setUnitsOnHover,
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
              <UnitCell
                cellUnit={unit}
                isSideBar={true}
                key={index}
                unitsOnHover={unitsOnHover}
                setUnitsOnHover={setUnitsOnHover}
              />
            ))
          )
        : null}
      {turnSwitcher.getTeamB().getIsMyTurn()
        ? unitsB.map((rowOfUnits) =>
            rowOfUnits.map((unit, index) => (
              <UnitCell
                cellUnit={unit}
                isSideBar={true}
                key={index}
                unitsOnHover={unitsOnHover}
                setUnitsOnHover={setUnitsOnHover}
              />
            ))
          )
        : null}
    </div>
  );
};

export default RoundInfo;
