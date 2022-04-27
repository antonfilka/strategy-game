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
          src="https://4.downloader.disk.yandex.by/preview/50259a35df287ac739a690e270de7758eb23fffc5b4ed8f6c49f14356a5ee3b2/inf/OmiGfGsbQxNU8ZdiIKFGkpOL8txZQRUtCCwWtj1tHEht3Eto1fAqG7CrpFgDMmJrrRczeU9lKos8t8v-FhHFgQ%3D%3D?uid=1130000014892791&filename=spark.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1528"
          className={currentImage}
        />
      ) : null}
      {unit.getIsDead() ? (
        <img
          src="https://4.downloader.disk.yandex.by/preview/50170c91cb89c183870bf05782cc9ab10fc0ac58686bb2fb0ef33d505b89305b/inf/jsWnR_rgNGYPJeUks15bnpOL8txZQRUtCCwWtj1tHEjR-yFgnj8Qn500_FOefw10b120N373XSYIoByXr_cNUA%3D%3D?uid=1130000014892791&filename=rip.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1528"
          className={deadImage}
        />
      ) : null}
      {unit.getIsParalyzed() ? (
        <img
          src="https://2.downloader.disk.yandex.by/preview/5883608a37fa7a99b340ce376b9483b66d4060b58bab84250519253d6f8d6de3/inf/6ktCjQWKLdZypQsXHlsdDZOL8txZQRUtCCwWtj1tHEjRDDS6A6bqpMr413no8DryFYOrg7e6qR9VkRJOkViCDQ%3D%3D?uid=1130000014892791&filename=paralyzed.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1528"
          className={paralyzeImage}
        />
      ) : null}
      {unit.getIsDefending() ? (
        <img
          src="https://1.downloader.disk.yandex.by/preview/27d9027fc1e5bfa326f4ec897d350beb76e7b7e83fad345e4d1faddc8c7f355f/inf/KAEda6woVVVeLHoolibA7bA9ng_3fGROSYZ2iOLUpwCeyfMIk62C7vSsIRdYQ61wvnyUxViOKWffYjToyeALJg%3D%3D?uid=1130000014892791&filename=shield.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1528"
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
