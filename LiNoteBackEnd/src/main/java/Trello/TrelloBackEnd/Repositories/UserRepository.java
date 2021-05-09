package Trello.TrelloBackEnd.Repositories;

import Trello.TrelloBackEnd.Beans.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserRepository extends CrudRepository<User,Long> {
    User findByUsername(String username);
    User findByEmail(String email);
    User findByUsernameAndPassword(String username, String password);


    /// findBy + "name Of the Variable of the class " for example:
    // The Id of Doctor is doctorId, so
    //should be
    //Doctor findByDoctorId(...
}
