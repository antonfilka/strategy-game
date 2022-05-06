import React from "react";
import { modal, modalWrapper } from "./WinnerModal.css";

interface IWinnerModal {
  winnerTeam: string;
}

export const WinnerModal: React.FC<IWinnerModal> = ({ winnerTeam }) => {
  return (
    <div className={modalWrapper}>
      <div className={modal}>Player {winnerTeam} is the winner !</div>
    </div>
  );
};
