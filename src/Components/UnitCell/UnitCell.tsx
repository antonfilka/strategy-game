import React, { useEffect, useState } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  cellWrapper,
  cellWrapperOnMouseOver,
  cellWrapperSideBar,
  deadImage,
  deadImageSideBar,
  defendImage,
  defendImageSideBar,
  hp,
  hpBackground,
  hpBackgroundSideBar,
  image,
  imageSideBar,
  paralyzeImage,
  paralyzeImageSideBar,
} from "./UnitCel.css";
import clsx from "clsx";

type IUnitCell = {
  setUnitsOnHover: (arr: Array<string>) => void;
  unitsOnHover: string[];
  isSideBar?: boolean;
  cellUnit: units;
};

const UnitCell: React.FC<IUnitCell> = ({
  cellUnit,
  isSideBar,
  unitsOnHover,
  setUnitsOnHover,
}) => {
  const unit = cellUnit;
  const [isOnHover, setIsOnHover] = useState(false);

  let outlineOption = "";
  if (unit.getIsAttackTarget()) {
    outlineOption = "solid 1px rgb(0, 255, 0, 0.9)";
  } else if (unit.getIsHealTarget()) {
    outlineOption = "solid 1px rgb(255, 215, 0, 0.9)";
  } else if (unit.getIsParalyzeTarget()) {
    outlineOption = "solid 1px rgb(114, 9, 183, 0.9)";
  }

  const handleCellMouseOver = (event: any) => {
    isSideBar ? setUnitsOnHover([...unitsOnHover, unit.getId()]) : null;
  };

  const handleCellMouseLeave = (event: any) => {
    isSideBar
      ? setUnitsOnHover([
          ...unitsOnHover.filter((unitID) => unitID !== unit.getId()),
        ])
      : null;
  };

  // unitsOnHover.includes(unit.getId()) ? setIsOnHover(true) : false;

  return (
    <div
      className={clsx({
        [cellWrapperOnMouseOver]: isOnHover && !isSideBar,
        [cellWrapper]: !isSideBar,
        [cellWrapperSideBar]: isSideBar,
      })}
      style={assignInlineVars({
        outline: !isSideBar ? outlineOption : "",
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
          className={clsx({
            [deadImage]: !isSideBar,
            [deadImageSideBar]: isSideBar,
          })}
        />
      ) : null}
      {unit.getIsParalyzed() ? (
        <img
          src="https://www.seekpng.com/png/full/858-8586257_water.png"
          className={clsx({
            [paralyzeImage]: !isSideBar,
            [paralyzeImageSideBar]: isSideBar,
          })}
        />
      ) : null}
      {unit.getIsDefending() ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/595/595764.png"
          className={clsx({
            [defendImage]: !isSideBar,
            [defendImageSideBar]: isSideBar,
          })}
        />
      ) : null}
      <img
        src={unit.getImage()}
        className={clsx({
          [image]: !isSideBar,
          [imageSideBar]: isSideBar,
        })}
        style={assignInlineVars({
          opacity: unit.getIsDead() ? "0.4" : "1",
        })}
      />
      {isSideBar ? null : (
        <div className={hp}>
          {unit.getCurrentHp()}/{unit.getMaxHp()}
        </div>
      )}
      <img
        src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
        style={assignInlineVars({
          height: `${100 - (unit.getCurrentHp() * 100) / unit.getMaxHp()}%`,
        })}
        className={clsx({
          [hpBackground]: !isSideBar,
          [hpBackgroundSideBar]: isSideBar,
        })}
      />
    </div>
  );
};

export default UnitCell;
