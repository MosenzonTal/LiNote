package Trello.TrelloBackEnd.BusinessLogic;
import Trello.TrelloBackEnd.Beans.Note;
import Trello.TrelloBackEnd.Repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class NoteManager {

    @Autowired
    NoteRepository noteRepo;

    @Autowired
    UserManager userManager;

    public ResponseEntity<List<Note>> getAllTheUserNotes(Long userId) {
        List<Note> notes = this.noteRepo.findByUserId(userId);
        return new ResponseEntity<List<Note>>(notes, HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteNoteOfUser(String username, Long id) {
        noteRepo.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Void> addNoteToUser(String username, Note note) throws Exception {
        this.validateNote(note);
        Long userId = this.userManager.getUserId(username);
        note.setUserId(userId);
        this.noteRepo.save(note);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Note> getNoteOfUser(String username, Long id) {
        Optional<Note> note = this.noteRepo.findById(id);
        return new ResponseEntity<Note>(note.get(), HttpStatus.OK);
    }

    public ResponseEntity<Void> updateNoteOfUser(String username, Long id, Note note) throws Exception {
        this.validateNote(note);
        Optional<Note> updatedNote = this.noteRepo.findById(id);
//        if (note.getTitle() != null)
            updatedNote.get().setTitle(note.getTitle());
//        if (note.getBody() != null)
            updatedNote.get().setBody(note.getBody());
//        if (note.getPriority() != null)
            updatedNote.get().setPriority(note.getPriority());
        if (note.getColor() != null)
            updatedNote.get().setColor(note.getColor());
        if (note.getIsRead() != null)
            updatedNote.get().setIsRead(note.getIsRead());
        if (note.getDate() != null)
            updatedNote.get().setDate(note.getDate());

        this.noteRepo.save(updatedNote.get());
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    private void validateNote(Note note) throws Exception {
        if (note.getBody() == null || note.getTitle() == null)
            throw new Exception("Note must contain Title and Body");
        else if (note.getTitle().length() < 5 || note.getBody().length() < 5)
            throw new Exception("wrong input - title/ body must contain at least 5 characters");
        else if (note.getPriority() < 1 || note.getPriority() > 5)
            throw new Exception("Priority must be between 1 to 5");
    }
}
