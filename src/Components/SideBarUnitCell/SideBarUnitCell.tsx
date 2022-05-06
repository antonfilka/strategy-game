import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  cellWrapperSideBar,
  deadImageSideBar,
  defendImageSideBar,
  hpBackgroundSideBar,
  imageSideBar,
  paralyzeImageSideBar,
} from "./SideBarUnitCell.css";

type IUnitCell = {
  setUnitOnHover: (str: string) => void;
  unitOnHover: string;
  unit: units;
};

const SideBarUnitCell: React.FC<IUnitCell> = ({ unit, setUnitOnHover }) => {
  const handleCellMouseOver = (event: any) => {
    setUnitOnHover(unit.getId());
  };

  const handleCellMouseLeave = (event: any) => {
    setUnitOnHover("");
  };

  return (
    <div
      className={`${cellWrapperSideBar} animated`}
      style={assignInlineVars({
        boxShadow:
          unit.getTeam() === "A"
            ? "5px 5px 5px rgb(196, 107, 83, 0.9)"
            : "5px 5px 5px rgb(124, 96, 134, 0.9)",
        transform: unit.getIsCurrentUnit() ? "translate(15px)" : "",
      })}
      onMouseOver={handleCellMouseOver}
      onMouseLeave={handleCellMouseLeave}
    >
      {unit.getIsDead() ? (
        <img
          src="https://i.ibb.co/SmDZTZn/rip.png"
          className={deadImageSideBar}
        />
      ) : null}
      {unit.getIsParalyzed() ? (
        <img
          src="https://i.ibb.co/jhH1pn4/paralyzed.png"
          className={paralyzeImageSideBar}
        />
      ) : null}
      {unit.getIsDefending() ? (
        <img
          src="https://i.ibb.co/kDTn0CX/shield.png"
          className={defendImageSideBar}
        />
      ) : null}
      <img
        src={unit.getImage()}
        className={imageSideBar}
        style={assignInlineVars({
          opacity: unit.getIsDead() ? "0.4" : "1",
        })}
      />
      <img
        src="https://i.ibb.co/3fjfT7b/red-color-solid-background-1920x1080.png"
        style={assignInlineVars({
          height: `${100 - (unit.getCurrentHp() * 100) / unit.getMaxHp()}%`,
        })}
        className={hpBackgroundSideBar}
      />
    </div>
  );
};

export default SideBarUnitCell;
