import React, { useState } from "react";
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
import clsx from "clsx";

type IUnitCell = {
  setUnitOnHover: (str: string) => void;
  unitOnHover: string;
  cellUnit: units;
};

const SideBarUnitCell: React.FC<IUnitCell> = ({
  cellUnit,
  unitOnHover,
  setUnitOnHover,
}) => {
  const unit = cellUnit;

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
      })}
      onMouseOver={handleCellMouseOver}
      onMouseLeave={handleCellMouseLeave}
    >
      {unit.getIsDead() ? (
        <img
          src="https://icons-for-free.com/download-icon-dead+death+grave+graveyard+halloween+scary+icon-1320183477745266883_512.png"
          className={deadImageSideBar}
        />
      ) : null}
      {unit.getIsParalyzed() ? (
        <img
          src="https://www.seekpng.com/png/full/858-8586257_water.png"
          className={paralyzeImageSideBar}
        />
      ) : null}
      {unit.getIsDefending() ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/595/595764.png"
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
        src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
        style={assignInlineVars({
          height: `${100 - (unit.getCurrentHp() * 100) / unit.getMaxHp()}%`,
        })}
        className={hpBackgroundSideBar}
      />
    </div>
  );
};

export default SideBarUnitCell;
