import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import PropTypes from "prop-types";
import SplashScreen from "../components/SplashScreen";
import authService from "../services/authService";

function Auth({ children }) {
  const [{}, dispatch] = useStateValue();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        console.log("isAuthenticated: ", authService.isAuthenticated());
        const user = await authService.loginInWithToken();
        console.log("authService: ", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }

      setLoading(true);
    };

    initAuth();
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
