import {BrowserRouter as Router ,Switch ,Route ,Link } from "react-router-dom"
import './App.css';
import MainPage from "./MainPage/MainPage"
import SignupPage from './SingupPage/SignupPage';
import MapViewPage from "./MapView/MapViewPage"
import { Modal } from "./MainPage/Modal/Modal";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/signup" exact component={SignupPage}/>
            <Route path="/mapview" exact component={MapViewPage}/>
            <Route path="/log" exact component={Modal}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
