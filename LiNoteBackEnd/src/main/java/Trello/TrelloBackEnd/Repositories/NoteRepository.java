package Trello.TrelloBackEnd.Repositories;

import Trello.TrelloBackEnd.Beans.Note;
import Trello.TrelloBackEnd.Beans.User;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;


public interface NoteRepository  extends CrudRepository<Note,Long> {

    List<Note> findByUserId(Long userid);

    // Repository  אחראי לתקשורת מול ה דאטה בייס
    // אם נרצה נוסיף פה פונקציות כמו שלמדנו בשיעור
    // פונקציות של שאילתות אחרות מעבר למה שאנחנו מקבלים
    // by default
    // for example: findDistinctByLastnameAndFirstname
    // findByLastnameAndFirstname

    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods


}
