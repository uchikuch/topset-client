import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Auth from "./components/Auth";
import { AuthGuard } from "./components/AuthGuard";
import { GuestGuard } from "./components/GuestGuard";

import server from "./configs/Urls";

import NavBar from "./components/NavBar";
import Home from "./views/home/index.js";
import Login from "./views/login/Login.js";
import SignUp from "./views/signup/index";
import Dashboard from "./views/learn/dashboard/index";
import Section from "./views/learn/section/index";
import Lesson from "./views/learn/lesson/index";
import Class from "./views/learn/session";
import NotFound from "./components/NotFound";

const client = new ApolloClient({
  uri: `${server.url}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <Auth>
        <ApolloProvider client={client}>
          <div className="App">
            <NavBar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <AuthGuard>
                    <Home />
                  </AuthGuard>
                </Route>
                <Route
                  exact
                  path="/learn/:exam/:subject"
                  render={(props) => (
                    <AuthGuard>
                      <Dashboard {...props} />
                    </AuthGuard>
                  )}
                />
                <Route
                  exact
                  path="/learn/:exam/:subject/:topic/:section"
                  render={(props) => (
                    <AuthGuard>
                      <Section {...props} />
                    </AuthGuard>
                  )}
                />
                <Route
                  exact
                  path="/learn/:exam/:subject/:topic/:section/:lesson"
                  render={(props) => (
                    <AuthGuard>
                      <Lesson {...props} />
                    </AuthGuard>
                  )}
                />
                <Route
                  exact
                  path="/learn/:exam/:subject/:topic/:section/:lesson/class"
                  render={(props) => (
                    <AuthGuard>
                      <Class {...props} />
                    </AuthGuard>
                  )}
                />
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
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </ApolloProvider>
      </Auth>
    </Router>
  );
}

export default App;
