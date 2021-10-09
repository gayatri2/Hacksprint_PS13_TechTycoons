import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Menu from "./Pages/Menu/Menu";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/contact";
import Footer from "./Components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/dashboard">
            <NavBar />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
            <Dashboard />
            <Footer />
          </Route>

          {/* <Route exact path="/dashboard#first">
            <Contact />    
        
          </Route> */}

          <Route exact path="/login">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
              />
            <Login />
          </Route>

          <Route exact path="/register">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
              />
            <Register />
          </Route>

          <Route exact path="/menu">
            <NavBar />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
            <Menu />
          </Route>
         
          <Route exact path="/inventory">
            <NavBar />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
            <Inventory/>
          </Route>
          
          <Route exact path="/contact-us">
            <NavBar />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
            <Contact />
            <Footer />

            {/* <Inventory/> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
