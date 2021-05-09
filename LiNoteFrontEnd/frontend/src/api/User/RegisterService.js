import axios from "axios";

class RegisterService {
  registerUser(user, pass, email) {
    return axios.post("http://localhost:8080/register", {
      username: user,
      password: pass,
      email: email,
    });
  }
}

export default new RegisterService();
