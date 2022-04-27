import React from "react";
import AttackTurnService from "../../gameClasses/services/AttackTurnService";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import RowOfCells from "../RowOfCells/RowOfCells";
import {
  attackButton,
  buttons,
  defendButton,
  teamUnits,
  teamWrapper,
} from "./TeamUnits.css";

interface ITeamUnits {
  unitOnHover: string;
  handleTurnChange: (team: string) => void;
  team: Team;
  handleNewTurnAction: (team: Team) => void;
  handleSetCurrentTarget: (unit: units) => void;
}

const TeamUnits: React.FC<ITeamUnits> = ({
  team,
  unitOnHover,
  handleNewTurnAction,
  handleSetCurrentTarget,
}) => {
  const handleDefendButton = () => {
    team.setIsDefending(true);
    handleNewTurnAction(team);
  };

  const handleAttackButton = () => {
    handleNewTurnAction(team);
  };

  return (
    <div className={teamWrapper}>
      <div className={teamUnits}>
        {team.getUnits().map((rowOfUnits, index) => {
          return (
            <RowOfCells
              rowOfUnits={rowOfUnits}
              key={index}
              unitOnHover={unitOnHover}
              handleSetCurrentTarget={handleSetCurrentTarget}
            />
          );
        })}
      </div>
      <div className={buttons}>
        <button className={defendButton} onClick={() => handleDefendButton()}>
          Defend
          <img
            src="https://1.downloader.disk.yandex.by/preview/27d9027fc1e5bfa326f4ec897d350beb76e7b7e83fad345e4d1faddc8c7f355f/inf/KAEda6woVVVeLHoolibA7bA9ng_3fGROSYZ2iOLUpwCeyfMIk62C7vSsIRdYQ61wvnyUxViOKWffYjToyeALJg%3D%3D?uid=1130000014892791&filename=shield.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642"
            style={{ width: "20px", marginLeft: "15px" }}
          />
        </button>

        <button className={attackButton} onClick={() => handleAttackButton()}>
          Attack
          <img
            src="https://2.downloader.disk.yandex.by/preview/601fe6e3d588d0959141cc80166d42d78838cbc907d337aa275372002e9a9830/inf/RddncbMiUZBcX2AKuwyuiKcA0YV9eExLlxG3awPEi4fwNxHp581u93ql3FlkaJ-y_AYPLK5EBYO6qa2e9hPI7Q%3D%3D?uid=1130000014892791&filename=sword.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1528"
            style={{
              width: "20px",
              marginLeft: "15px",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TeamUnits;
