import React, { Component } from "react";
import NotesDataService from "../../api/Notes/NotesDataService";
import AuthenticationService from "../../AuthenticationService";
import Note from "../userNotes/Note";
import { Button, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.refreshNotes = this.refreshNotes.bind(this);
    this.addNoteClicked = this.addNoteClicked.bind(this);
  }

  componentDidMount() {
    this.refreshNotes();
  }

  refreshNotes() {
    let username = AuthenticationService.getLoggedInUserName();
    NotesDataService.retrieveAllNotesOfAUser(username)
      .then((response) => {
        this.setState({ todos: response.data });
        console.log(this.state.todos);
      })
      .catch((error) => console.log(error));
  }

  addNoteClicked() {
    this.props.history.push("/notes/addNote");
  }

  render() {
    return (
      <div>
        <h1>My Notes</h1>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ overflowY: "scroll", width: "600px", height: "350px" }}
            >
              <Paper elevation={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  {" "}
                  {this.state.todos.map((todo) => (
                    <Note
                      actionName={this.refreshNotes}
                      key={todo.id}
                      todo={todo}
                    ></Note>
                  ))}
                </Grid>
              </Paper>
            </div>
          </div>
          <br></br>
          <div>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={this.addNoteClicked}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesList;
