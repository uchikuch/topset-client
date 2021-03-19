import NavBar from "./components/NavBar";
import Home from "./views/home/index.js";
import Login from "./views/login/Login.js";
import SignUp from "./views/signup/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import { AuthGuard } from "./components/AuthGuard";
import { GuestGuard } from "./components/GuestGuard";

function App() {
  return (
    <Router>
      <Auth>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <AuthGuard>
                  <Home />
                </AuthGuard>
              </Route>
              <Route path="/login">
                <GuestGuard>
                  <Login />
                </GuestGuard>
              </Route>
              <Route path="/signup">
                <GuestGuard>
                  <SignUp />
                </GuestGuard>
              </Route>
            </Switch>
          </div>
        </div>
      </Auth>
    </Router>
  );
}

export default App;
