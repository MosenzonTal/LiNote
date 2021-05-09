package Trello.TrelloBackEnd.Controllers;
import Trello.TrelloBackEnd.Beans.Note;
import Trello.TrelloBackEnd.BusinessLogic.NoteManager;
import Trello.TrelloBackEnd.BusinessLogic.UserManager;
import Trello.TrelloBackEnd.BusinessLogic.scheduledEmail.EmailManager;
import Trello.TrelloBackEnd.dtos.EmailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("notes")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class NotesController {

    @Autowired
    NoteManager noteManager;

    @Autowired
    UserManager userManger;

    @Autowired
    EmailManager emailManager;

    @GetMapping("/{username}")
    private ResponseEntity<List<Note>> getAllUserNotes(@PathVariable String username){
        long userID = this.userManger.getUserId(username);
        return this.noteManager.getAllTheUserNotes(userID);
    }

    @DeleteMapping("/{username}/{id}")
    private ResponseEntity<Void> deleteNote(@PathVariable String username, @PathVariable Long id){
        return this.noteManager.deleteNoteOfUser(username, id);
    }

    @PostMapping("/{username}")
    private ResponseEntity<Void> addNote(@PathVariable String username, @RequestBody Note note) throws Exception {
        return this.noteManager.addNoteToUser(username, note);
    }

    @GetMapping("/{username}/{id}")
    private ResponseEntity<Note> getNote(@PathVariable String username, @PathVariable Long id){
        return this.noteManager.getNoteOfUser(username,id);
    }

    @PutMapping("/{username}/{id}")
    private ResponseEntity<Void> updateNote(@PathVariable String username, @PathVariable Long id, @RequestBody Note note) throws Exception {
        return this.noteManager.updateNoteOfUser(username,id,note);
    }

    @PostMapping("/notify/{username}")
    private ResponseEntity<Void> sendMail(@PathVariable String username, @RequestBody EmailDto emailInfo) throws Exception {
       return this.emailManager.findUserMail(username, emailInfo);
    }
}
