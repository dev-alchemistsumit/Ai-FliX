import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/HomeComponent/Home";
import Login from "./components/Login and signup/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./components/HomeComponent/Footer";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    // Check if the user is already logged in when the component mounts
    const checkUser = async () => {
      const currentUser = await auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
      }
    };

    checkUser(); // Call the function to check user status

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? (
              <>
                <Home />
                <Footer className="z-[-100]" />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
