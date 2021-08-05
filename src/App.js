import React from "react";
import { Route, Redirect } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import PracticeSettingsPage from "./pages/PracticeSettingsPage";
import NewGameSettingsPage from "./pages/NewGameSettingsPage";
import PracticePage from "./pages/PracticePage";
import NewGamePage from "./pages/NewGamePage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <div>
      <Route path='/' exact>
      <Redirect to='/welcome'></Redirect>
      </Route>
      <Route path='/welcome'>
      <WelcomePage></WelcomePage>
      </Route>
      <Route path='/practice_settings'>
        <PracticeSettingsPage></PracticeSettingsPage>
      </Route>
      <Route path='/newgame_settings'>
        <NewGameSettingsPage></NewGameSettingsPage>
      </Route>
      <Route path='/practice'>
        <PracticePage></PracticePage>
      </Route>
      <Route path='/newgame'>
        <NewGamePage></NewGamePage>
      </Route>
      <Route path='/aboutme'>
        <AboutMePage></AboutMePage>
      </Route>
      <Route path='*'>
      <Redirect to='/welcome'></Redirect>
      </Route>
    </div>
  );
}

export default App;
