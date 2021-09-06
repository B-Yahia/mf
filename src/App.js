import {BrowserRouter as Router ,Switch ,Route ,Link } from "react-router-dom"
import './App.css';
import MainPage from "./MainPage/MainPage"
import SignupPage from './SingupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/signup" exact component={SignupPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
