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
import Team from "../../gameClasses/Team";
import DefinePossibleTargets from "../../gameClasses/services/DefinePossibleTargets";
import { teams } from "../../gameClasses/Units/Unit";

type IUnitCell = {
  currentTeamTurn: string;
  attackingUnit: units | null;
  attackingTeam: Team;
  enemyTeam: Team;
  unitOnHover: string;
  unit: units;
  handleSetCurrentTarget: (unit: units) => void;
  unitsAvailable: boolean;
};

const UnitCell: React.FC<IUnitCell> = ({
  currentTeamTurn,
  attackingUnit,
  attackingTeam,
  enemyTeam,
  unit,
  unitOnHover,
  handleSetCurrentTarget,
  unitsAvailable,
}) => {
  const [isOnHover, setIsOnHover] = useState(false);
  const [isCurrentUnit, setIsCurrentUnit] = useState(false);

  useEffect(() => {
    unitOnHover === unit.getId() ? setIsOnHover(true) : setIsOnHover(false);

    if (unit.getTeam() === currentTeamTurn && !unit.getIsDead())
      setIsCurrentUnit(unit.getIsCurrentUnit());
    else setIsCurrentUnit(false);
  });

  // defining possible targets depending on unit type
  const range = ["Archer", "Gunner", "Bomber", "Musketeer", "Mage"];
  const melee = ["Pirate", "Sworder"];
  const heal = ["Doggy", "Priest"];
  let possibleTargets: Array<units> = [];
  if (attackingTeam.getIsAttacking() && attackingUnit) {
    if (range.includes(attackingUnit.getName())) {
      possibleTargets = DefinePossibleTargets.definePossibleRangeTargets(
        attackingUnit,
        enemyTeam
      );
    } else if (melee.includes(attackingUnit.getName())) {
      possibleTargets = DefinePossibleTargets.definePossibleMeleeTargets(
        attackingUnit,
        enemyTeam
      );
    } else if (heal.includes(attackingUnit.getName())) {
      possibleTargets = DefinePossibleTargets.definePossibleHealTargets(
        attackingUnit,
        attackingTeam
      );
    }
  }

  // setting outline options (attack, heal, paralyze) target if this unit is a target
  let outlineOption = "";
  if (attackingUnit && possibleTargets.includes(unit)) {
    if (attackingUnit.getType() === "paralyzer") {
      outlineOption = "solid 1px rgb(114, 9, 183, 0.9)";
    } else if (
      attackingUnit.getType() === "healerSingle" ||
      attackingUnit.getType() === "healerMass"
    ) {
      outlineOption = "solid 1px rgb(255, 215, 0, 0.9)";
    } else {
      outlineOption = "solid 1px rgb(0, 255, 0, 0.9)";
    }
  }

  const handleUnitClick = () => {
    if (unitsAvailable) {
      handleSetCurrentTarget(unit);
      return;
    }
    alert(`Start attack by pressing "Attack button" or defend your unit`);
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
      {isCurrentUnit ? (
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
