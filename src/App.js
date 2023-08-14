import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/HomeComponent/Home";
import Login from "./components/Login and signup/Login"; // Update the path
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/HomeComponent/Footer";
import { ThemeProvider } from "styled-components";
import { auth } from "./firebase"; // Import the auth instance


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
          <Route path="/" exact>
            {console.log(user)}
            {user ? <Home /> : <Redirect to="/login" />}
            <Footer className="z-[-100]" />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
