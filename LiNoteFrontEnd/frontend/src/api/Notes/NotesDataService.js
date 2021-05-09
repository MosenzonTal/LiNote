import axios from "axios";
import { API_URL } from "../constants";

class NotesDataService {
  retrieveAllNotesOfAUser(username) {
    return axios.get(`${API_URL}/notes/${username}`);
  }

  deleteNote(username, noteId) {
    return axios.delete(`${API_URL}/notes/${username}/${noteId}`);
  }

  retrieveNoteOfAUser(username, id) {
    return axios.get(`${API_URL}/notes/${username}/${id}`);
  }

  //the second parameter accepted in axios is should be the 'body' of the request
  updateNote(username, id, note) {
    return axios.put(`${API_URL}/notes/${username}/${id}`, note);
  }

  addNote(username, note) {
    return axios.post(`${API_URL}/notes/${username}`, note);
  }

  notify(username, title, date){
    return axios.post(`${API_URL}/notes/notify/${username}`, title)
  }
}

export default new NotesDataService();
