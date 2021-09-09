import {BrowserRouter as Router ,Switch ,Route ,Link } from "react-router-dom"
import './App.css';
import MainPage from "./MainPage/MainPage"
import SignupPage from './SingupPage/SignupPage';
import MapViewPage from "./MapView/MapViewPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/" exact component={MainPage}/>
          <Route path="/signup" exact component={SignupPage}/>
          <Route path="/mapview" exact component={MapViewPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
