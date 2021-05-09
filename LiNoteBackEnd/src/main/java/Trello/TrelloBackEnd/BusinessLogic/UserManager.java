package Trello.TrelloBackEnd.BusinessLogic;
import Trello.TrelloBackEnd.Beans.User;
import Trello.TrelloBackEnd.Repositories.UserRepository;
import Trello.TrelloBackEnd.dtos.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Locale;

@Service
public class UserManager {

    @Autowired
    private UserRepository userRepo;

    public ResponseEntity<Boolean> isUserExist(LoginDto loginInfo) throws Exception {
        User user = this.userRepo.findByUsernameAndPassword(loginInfo.getUsername().toLowerCase(Locale.ROOT), loginInfo.getPassword());
        if (user!=null) return new ResponseEntity<Boolean>(true, HttpStatus.OK);
        throw new Exception("Invalid username/password. Please try again.");
    }

    public ResponseEntity<Void> addNewRegisteredUser(User user) throws Exception {
        //validate User info before adding to the DB
        if(isUsernameExist(user)==false && isEmailExist(user)==false &&
            emailValidation(user)==true && passwordValidation(user)==true)
        {
            user.setUsername(user.getUsername().toLowerCase(Locale.ROOT));
            this.userRepo.save(user);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.FORBIDDEN);
    }

     private Boolean isUsernameExist(User user) throws Exception{
        user.setUsername(user.getUsername().toLowerCase(Locale.ROOT));
         User existingUser = this.userRepo.findByUsername(user.getUsername());
         if(existingUser!=null)
             throw new RuntimeException("Username is already exists");
         else if(user.getUsername() == "" || user.getUsername().length() < 3)
             throw new RuntimeException("Username must contain at least 3 Characters");

         else
             return false;
     }

    private Boolean isEmailExist(User user) throws Exception {
         User existingUser = this.userRepo.findByEmail(user.getEmail());
         if(existingUser != null)
             throw new RuntimeException("Email Address is already exists");
         else return false;
     }

    private Boolean emailValidation(User user) throws Exception {
        if (user.getEmail().contains("@"))
            return true;
        else throw new RuntimeException("Email Address must contain '@'");
    }

    private Boolean passwordValidation(User user) throws Exception {
        if(user.getPassword().length()<4)
            throw new RuntimeException("Password must contain at least 4 characters");
        else return true;
    }

    public Long getUserId(String name)  {
        User user = (User) this.userRepo.findByUsername(name);
        return user.getId();
    }

}
