package Trello.TrelloBackEnd.Controllers;
import Trello.TrelloBackEnd.Beans.User;
import Trello.TrelloBackEnd.BusinessLogic.UserManager;
import Trello.TrelloBackEnd.dtos.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserManager userManger;

    // http://localhost:8080/register
    @PostMapping("register")
    private ResponseEntity<?> register(@RequestBody User user) throws Exception {
        return userManger.addNewRegisteredUser(user);
    }

    // http://localhost:8080/login
    @PostMapping("login")
    private ResponseEntity<Boolean> login(@RequestBody LoginDto loginInfo) throws Exception {
       return this.userManger.isUserExist(loginInfo);
    }
}
