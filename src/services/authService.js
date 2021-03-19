import jwtDecode from "jwt-decode";
import server from "../configs/Urls";
import axios from "axios";

let authorisation;

class AuthService {
  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginInWithToken = () =>
    new Promise((resolve, reject) => {
      axios
        .get(`${server.url}/loginWithToken/${authorisation}`)
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  logout = () => {
    this.setSession(null);
  };

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem("topset_jwt", accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      authorisation = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("topset_jwt");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem("topset_jwt");

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
