import axios from "axios";

class LoginService {
  isUserExist(user, pass) {
    return axios.post("http://localhost:8080/login", {
      username: user,
      password: pass,
    });
  }
}

export default new LoginService();
