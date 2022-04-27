import React, { useEffect, useState } from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  cellWrapper,
  cellWrapperOnMouseOver,
  currentImage,
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
      {unit.getIsCurrentUnit() ? (
        <img
          src="https://i.ibb.co/47GxPLG/spark.png"
          className={currentImage}
        />
      ) : null}
      {unit.getIsDead() ? (
        <img src="https://i.ibb.co/SmDZTZn/rip.png" className={deadImage} />
      ) : null}
      {unit.getIsParalyzed() ? (
        <img
          src="https://i.ibb.co/jhH1pn4/paralyzed.png"
          className={paralyzeImage}
        />
      ) : null}
      {unit.getIsDefending() ? (
        <img
          src="https://i.ibb.co/kDTn0CX/shield.png"
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
        src="https://i.ibb.co/3fjfT7b/red-color-solid-background-1920x1080.png"
        style={assignInlineVars({
          height: `${100 - (unit.getCurrentHp() * 100) / unit.getMaxHp()}%`,
        })}
        className={hpBackground}
      />
    </div>
  );
};

export default UnitCell;
