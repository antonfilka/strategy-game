import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  cellWrapper,
  deadImage,
  hp,
  hpBackground,
  image,
  paralyzeImage,
} from "./UnitCel.css";

type UnitCellProps = {
  cellUnit: units;
};

export default class UnitCell extends React.Component<UnitCellProps> {
  unit: units;
  constructor(props: UnitCellProps) {
    super(props);
    this.unit = props.cellUnit;
  }
  render() {
    let outlineOption = "";
    if (this.unit.getIsAttackTarget()) {
      outlineOption = "solid 1px rgb(0, 255, 0, 0.9)";
    } else if (this.unit.getIsHealTarget()) {
      outlineOption = "solid 1px rgb(255, 215, 0, 0.9)";
    }
    return (
      <div
        className={cellWrapper}
        style={assignInlineVars({
          outline: outlineOption,
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
