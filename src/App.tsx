import React from "react";
import MainGame from "./Components/MainGame/MainGame";
import WelcomeTab from "./Components/WelcomeTab/WelcomeTab";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/strategy-game/" element={<WelcomeTab />} />
        <Route path="/strategy-game/game" element={<MainGame />} />
      </Routes>
    </div>
  );
};

export default App;
