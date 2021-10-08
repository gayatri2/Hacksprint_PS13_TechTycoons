import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar"
import LandingPage from "./Pages/Landing/Landing"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Menu from "./Pages/Menu/Menu"
import Inventory from "./Pages/Inventory/Inventory"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
        
            <LandingPage/>
          </Route>
          <Route exact path="/dashboard">
            <NavBar/>
            <Dashboard/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/menu">
            <NavBar/>
            <Menu/>
          </Route>
          <Route exact path="/inventory">
            <NavBar/>
            <Inventory/>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
