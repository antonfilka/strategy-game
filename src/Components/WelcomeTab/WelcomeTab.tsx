import React from "react";
import { welcomeWrapper, bgImage, button } from "./WelcomeTab.css";
import { Link } from "react-router-dom";

const WelcomeTab: React.FC = () => {
  return (
    <div className={welcomeWrapper}>
      <div>
        <Link to="/strategy-game/game">
          <div className={button}>
            <img
              draggable="false"
              src="https://i.ibb.co/dmSH7bB/logo-Button.png"
            />
          </div>
        </Link>
        <img
          className={bgImage}
          draggable="false"
          src="https://i.ibb.co/H2QmQrm/logo.png"
        />
      </div>
    </div>
  );
};

export default WelcomeTab;
