import React, { useState, useEffect } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Header from './ui/containers/header-container/Header';
import HomeView from "./ui/components/home/HomeView";
import LeaderboardView from "./ui/components/leaderboard/LeaderboardView";
import WorldRankingsView from "./ui/components/world-rankings/WorldRankingsView";
import ContactView from "./ui/components/contact/ContactView";
import Footer from "./ui/containers/footer-container/Footer"

export default function App() {

  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="mainContainer" data-theme={darkMode ? "dark" : "light"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/rankings" component={WorldRankingsView} />
        <Route exact path="/leaderboard" component={LeaderboardView} />
        <Route exact path="/contact" component={ContactView} />
      </Switch>
      <Footer />
    </div>
  );
}