import React from "react";
import MainGame from "./Components/MainGame/MainGame";
import WelcomeTab from "./Components/WelcomeTab/WelcomeTab";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomeTab />} />
        <Route path="/game" element={<MainGame />} />
      </Routes>
    </div>
  );
};

export default App;
