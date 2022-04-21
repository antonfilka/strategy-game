import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  cellWrapper,
  deadImage,
  defendImage,
  hp,
  hpBackground,
  image,
  paralyzeImage,
} from "./UnitCel.css";

type IUnitCell = {
  cellUnit: units;
};

export default class UnitCell extends React.Component<IUnitCell> {
  unit: units;
  constructor(props: IUnitCell) {
    super(props);
    this.unit = props.cellUnit;
  }

  render() {
    let outlineOption = "";
    if (this.unit.getIsAttackTarget()) {
      outlineOption = "solid 1px rgb(0, 255, 0, 0.9)";
    } else if (this.unit.getIsHealTarget()) {
      outlineOption = "solid 1px rgb(255, 215, 0, 0.9)";
    } else if (this.unit.getIsParalyzeTarget()) {
      outlineOption = "solid 1px rgb(114, 9, 183, 0.9)";
    }

    return (
      <div
        className={cellWrapper}
        style={assignInlineVars({
          outline: outlineOption,
          boxShadow:
            this.unit.getTeam() === "A"
              ? "5px 5px 5px rgb(196, 107, 83, 0.9)"
              : "5px 5px 5px rgb(124, 96, 134, 0.9)",
        })}
      >
        {this.unit.getIsDead() ? (
          <img
            src="https://icons-for-free.com/download-icon-dead+death+grave+graveyard+halloween+scary+icon-1320183477745266883_512.png"
            className={deadImage}
          />
        ) : null}
        {this.unit.getIsParalyzed() ? (
          <img
            src="https://www.seekpng.com/png/full/858-8586257_water.png"
            className={paralyzeImage}
          />
        ) : null}
        {this.unit.getIsDefending() ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/595/595764.png"
            className={defendImage}
          />
        ) : null}
        <img
          src={this.unit.getImage()}
          className={image}
          style={assignInlineVars({
            opacity: this.unit.getIsDead() ? "0.4" : "1",
          })}
        />
        <div className={hp}>
          {this.unit.getCurrentHp()}/{this.unit.getMaxHp()}
        </div>
        <img
          src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
          style={assignInlineVars({
            height: `${
              100 - (this.unit.getCurrentHp() * 100) / this.unit.getMaxHp()
            }%`,
          })}
          className={hpBackground}
        />
      </div>
    );
  }
}
