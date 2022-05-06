import React, { useEffect, useState } from "react";
import { AppWrapper, Arena, team } from "./MainGame.css";
import DynamicBackground from "../DynamicBackground/DynamicBackground";
import RoundInfo from "../RoundInfo/RoundInfo";
import TeamUnits from "../TeamUnits/TeamUnits";
import TurnPointer from "../TurnPointer/TurnPointer";
import AttackTurnService from "../../gameClasses/services/AttackTurnService";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/services/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import CleanUnitsFlags from "../../gameClasses/services/CleanUnitsFlags";
import SortAndCreateUnitsForTurn from "../../gameClasses/services/SortAndCreateUnitsForTurn";
import IsGameOver from "../../gameClasses/services/IsGameOver";
import { WinnerModal } from "../WinnerModal/WinnerModal";
import { CountDown } from "../CountDown/CountDown";

const MainGame: React.FC = () => {
  const [currentTeamTurn, setCurrentTurn] = useState(teams.teamA);
  const [unitOnHover, setUnitOnHover] = useState<string>("");
  const [teamA] = useState(new Team({ team: teams.teamA }));
  const [teamB] = useState(new Team({ team: teams.teamB }));
  const [currentTurnActionNumber, setCurrentTurnActionNumber] = useState(0);
  const [winnerTeam, setWinnerTeam] = useState<string | null>();
  const [seconds, setSeconds] = useState<number>(10);

  const currentTeam = currentTeamTurn === teams.teamA ? teamA : teamB;
  const waitingTeam = currentTeamTurn === teams.teamA ? teamB : teamA;

  const [currentUnit, setCurrentUnit] = useState(
    AttackTurnService.getCurrentAttackingUnit(
      SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(currentTeam)
    )
  );

  // unitsAvailable --> units are available to be selected as targets
  const unitsAvailable =
    currentTeam.getIsAttacking() || waitingTeam.getIsAttacking();

  useEffect(() => {
    setCurrentUnit(
      AttackTurnService.getCurrentAttackingUnit(
        SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(currentTeam)
      )
    );
  });

  // setting unit turn timer
  useEffect(() => {
    const newTimer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(newTimer);
  }, [currentUnit]);

  //checking if turn time is over
  if (seconds === 0 && !winnerTeam) {
    // updating turn timer for 10 seconds
    setSeconds(10);

    AttackTurnService.skipTurn(currentUnit, currentTeam);
  }

  // handling new attack/defenf when "attack/heal" button is clicked
  const handleNewTurnAction = (team: Team) => {
    if (team.getTeam() === currentTeamTurn) {
      if (team.getIsDefending()) {
        // updating turn timer for 10 seconds
        setSeconds(10);
      }
      // passing null because there's no target selected
      AttackTurnService.AttackTurnService(currentTeam, waitingTeam, null);

      setCurrentTurnActionNumber(currentTurnActionNumber + 1);
      return;
    }
    alert("Wait until your turn");
  };

  // handling setting current unit when target unit is clicked
  const handleSetCurrentTarget = (unit: units) => {
    // updating turn timer for 10 seconds
    setSeconds(10);

    AttackTurnService.AttackTurnService(currentTeam, waitingTeam, unit);

    setCurrentTurnActionNumber(currentTurnActionNumber + 1);

    if (IsGameOver.IsGameOver(teamA)) setWinnerTeam("B");
    if (IsGameOver.IsGameOver(teamB)) setWinnerTeam("A");
  };

  // handling "cancel" button
  const handleCancelButton = () => {
    currentTeam.setIsAttacking(false);

    setCurrentTurnActionNumber(currentTurnActionNumber + 1);
  };

  // switching turns of teams
  const handleTurnChange = (team: string) => {
    TurnSwitcher.Switch(teamA, teamB);
    if (team === teams.teamA) {
      setCurrentTurn(teams.teamB);
      CleanUnitsFlags.cleanUnitsDefendingFlag(teamB);
      CleanUnitsFlags.cleanUnitsParalyzedFlag(teamA);
    } else {
      setCurrentTurn(teams.teamA);
      CleanUnitsFlags.cleanUnitsDefendingFlag(teamA);
      CleanUnitsFlags.cleanUnitsParalyzedFlag(teamB);
    }
  };

  // switching turns when one of teams has completed it's turn
  if (currentTeam.getIsAttackTurnCompleted()) {
    currentTeam.setIsAttackTurnCompleted(true);
    waitingTeam.setIsAttackTurnCompleted(false);

    handleTurnChange(currentTeamTurn);
  }

  // highlighting first attacking unit
  const firstUnit =
    SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(currentTeam)[0];
  if (
    firstUnit &&
    !firstUnit?.getHasCompletedTheTurn() &&
    !currentTeam.getIsAttackTurnCompleted()
  ) {
    firstUnit.setIsCurrentUnit(true);
  }

  return (
    <div className={AppWrapper}>
      {winnerTeam ? <WinnerModal winnerTeam={winnerTeam} /> : null}
      <CountDown seconds={seconds} />
      <RoundInfo
        currentTeam={currentTeam}
        unitOnHover={unitOnHover}
        setUnitOnHover={setUnitOnHover}
      />
      <div className={Arena}>
        <div className={team}>
          <TeamUnits
            team={teamA}
            currentTeamTurn={currentTeamTurn}
            attackingUnit={currentUnit}
            attackingTeam={currentTeam}
            enemyTeam={waitingTeam}
            handleTurnChange={handleTurnChange}
            handleCancelButton={handleCancelButton}
            unitOnHover={unitOnHover}
            handleNewTurnAction={handleNewTurnAction}
            handleSetCurrentTarget={handleSetCurrentTarget}
            unitsAvailable={unitsAvailable}
          />
        </div>
        <div className={team}>
          <TeamUnits
            team={teamB}
            currentTeamTurn={currentTeamTurn}
            attackingUnit={currentUnit}
            attackingTeam={currentTeam}
            enemyTeam={waitingTeam}
            handleTurnChange={handleTurnChange}
            handleCancelButton={handleCancelButton}
            unitOnHover={unitOnHover}
            handleNewTurnAction={handleNewTurnAction}
            handleSetCurrentTarget={handleSetCurrentTarget}
            unitsAvailable={unitsAvailable}
          />
        </div>
      </div>
      <TurnPointer currentTeamTurn={currentTeamTurn} />
      <DynamicBackground />
    </div>
  );
};

export default MainGame;
