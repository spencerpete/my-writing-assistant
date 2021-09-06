
import './App.css';
import Homepage from './components/Homepage';
import { Route } from 'react-router';
import Screenplay from './components/Screenplay/Screenplay'
import CharacterList from "./components/Screenplay/CharacterList"
import NewScene from './components/Screenplay/NewScene';
import Stageplay from './components/Stageplay/Stageplay';
import STGCharacter from './components/Stageplay/STGCharacter';
import STGNewScene from './components/Stageplay/STGNewScene';
import HalfHrTeleplay from './components/Teleplay/HalfHrTeleplay';
import Character30 from './components/Teleplay/Character30';
import NewScene30 from './components/Teleplay/NewScene30';
import HrTeleplay from './components/Teleplay/HrTeleplay';
import HrNewScene from './components/Teleplay/HrNewScene';
import Character1hr from './components/Teleplay/Character1hr';


function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Homepage/>
    </Route>
      <Route path="/screenplay"exact >
        <Screenplay/>
      </Route>
      <Route path='/screenplay/character' exact>
        <CharacterList/>
      </Route>
      <Route path='/screenplay/new-scene'>
        <NewScene/>
      </Route>
      <Route path='/stageplay' exact>
        <Stageplay/>
      </Route>
      <Route path="/stageplay/character">
        <STGCharacter />
      </Route> 
      <Route path='/stageplay/new-scene'>
        <STGNewScene/>
      </Route>
      <Route path='/teleplay/30' exact>
        <HalfHrTeleplay/>
      </Route>
      <Route path='/teleplay/30/character'>
        <Character30/>
      </Route>
      <Route path='/teleplay/30/new-scene'>
        <NewScene30/>
      </Route>
      <Route path='/teleplay/hr' exact>
        <HrTeleplay/>
      </Route>
      <Route path='/teleplay/hr/character'>
        <Character1hr/>
      </Route>
      <Route path='/teleplay/hr/new-scene'>
        <HrNewScene/>
      </Route>
    </div>
  );
}

export default App;
