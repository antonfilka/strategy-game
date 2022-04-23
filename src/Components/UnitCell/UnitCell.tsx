import React, { useEffect, useState } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  cellWrapper,
  cellWrapperOnMouseOver,
  deadImage,
  defendImage,
  hp,
  hpBackground,
  image,
  paralyzeImage,
} from "./UnitCel.css";
import clsx from "clsx";

type IUnitCell = {
  unitOnHover: string;
  cellUnit: units;
  handleSetCurrentTarget: (unit: units) => void;
};

const UnitCell: React.FC<IUnitCell> = ({
  cellUnit,
  unitOnHover,
  handleSetCurrentTarget,
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

  useEffect(() => {
    unitOnHover === unit.getId() ? setIsOnHover(true) : setIsOnHover(false);
  });

  const handleUnitClick = () => {
    handleSetCurrentTarget(unit);
  };

  return (
    <div
      className={clsx({
        [cellWrapperOnMouseOver]: isOnHover,
        [cellWrapper]: !isOnHover,
      })}
      style={assignInlineVars({
        outline: outlineOption,
        boxShadow:
          unit.getTeam() === "A"
            ? "5px 5px 5px rgb(196, 107, 83, 0.9)"
            : "5px 5px 5px rgb(124, 96, 134, 0.9)",
      })}
      onClick={handleUnitClick}
    >
      {unit.getIsDead() ? (
        <img
          src="https://icons-for-free.com/download-icon-dead+death+grave+graveyard+halloween+scary+icon-1320183477745266883_512.png"
          className={deadImage}
        />
      ) : null}
      {unit.getIsParalyzed() ? (
        <img
          src="https://www.seekpng.com/png/full/858-8586257_water.png"
          className={paralyzeImage}
        />
      ) : null}
      {unit.getIsDefending() ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/595/595764.png"
          className={defendImage}
        />
      ) : null}
      <img
        src={unit.getImage()}
        className={image}
        style={assignInlineVars({
          opacity: unit.getIsDead() ? "0.4" : "1",
        })}
      />
      <div className={hp}>
        {unit.getCurrentHp()}/{unit.getMaxHp()}
      </div>
      <img
        src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
        style={assignInlineVars({
          height: `${100 - (unit.getCurrentHp() * 100) / unit.getMaxHp()}%`,
        })}
        className={hpBackground}
      />
    </div>
  );
};

export default UnitCell;
