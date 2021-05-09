import React, { Component } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Checkbox from "@material-ui/core/Checkbox";
import NotesDataService from "../../api/Notes/NotesDataService";
import AuthenticationService from "../../AuthenticationService";
import { CirclePicker } from "react-color";
import { Paper, TextField } from "@material-ui/core";
import moment from "moment";
import { IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo,
      color: props.todo.color,
      isSetColorClicked: false,
      priority: props.todo.priority,
      isCompleted: props.todo.isRead,
      targetDate: props.todo.date,
      alert: false,
      isDateSet: false
    };
  }

  deleteNoteClicked(id) {
    console.log(id);
    const r = window.confirm("Are you sure you want to delete?");
    if (r === true) {
      this.setState({ isDeleted: true });
      let username = AuthenticationService.getLoggedInUserName();
      NotesDataService.deleteNote(username, id)
        .then((response) => {
          this.props.actionName();
        })
        .catch((error) => console.log(error));
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex }, () => {
      console.log(this.state.color);
      this.updateNoteNow();
      this.changeColorClickedToggle();
    });
  };

  dateHasChanged(event) {
    this.setState({ targetDate: event.target.value }, () => {
      this.updateNoteNow();
    });
  }

  changeColorClickedToggle() {
    this.setState({ isSetColorClicked: !this.state.isSetColorClicked });
  }

  ratingChanged = (newRating) => {
    this.setState({ priority: newRating }, () => {
      this.updateNoteNow();
    });
  };

  checkboxClicked(event) {
    this.setState({ isCompleted: event.target.checked }, () => {
      this.updateNoteNow();
    });
  }

  notifyMelicked(title, date) {
    this.setState({ alert: true });
    let username = AuthenticationService.getLoggedInUserName();
    NotesDataService.notify(username, {
      title: title,
      date: moment(date).format("YYYY-MM-DD"),
    }).then((response) => {
      console.log("notifyClicked");
      console.log(response);
    });
  }

  updateNoteNow() {
    console.log("updateNoteNow");
    let username = AuthenticationService.getLoggedInUserName();
    NotesDataService.updateNote(username, this.state.todo.id, {
      title: this.state.todo.title,
      body: this.state.todo.body,
      icon: this.state.todo.icon,
      userId: this.state.todo.userId,
      isRead: this.state.isCompleted,
      color: this.state.color,
      priority: this.state.priority,
      date: this.state.targetDate,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        {
          ((this.state.alert && !this.state.targetDate)) && (
            <Alert severity="error">         
            Date must be initialized — <strong>Please insert Target Date!</strong>          
          </Alert>
          )
        }
        {(this.state.alert && this.state.targetDate) && (
          <Alert severity="success">
            <strong>
              Alert to mail was set successfully to: </strong> {moment(this.state.targetDate).format("DD-MM-YYYY")}                
          </Alert>
        )}
        <Paper elevation={22}>
          <Accordion defaultActiveKey="1">
            <Card style={{ backgroundColor: this.state.color, width: "430px" }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {this.state?.todo?.title}
                </Accordion.Toggle>
                <div className="icons">
                  <div>
                    <Checkbox
                      checked={this.state.isCompleted}
                      name="check"
                      label="isFinished"
                      onChange={(event) => this.checkboxClicked(event)}
                    ></Checkbox>
                    <ReactStars
                      count={5}
                      onChange={this.ratingChanged}
                      size={22}
                      value={this.state?.todo?.priority}
                      activeColor="#ffd700"
                    ></ReactStars>
                  </div>

                  <div>
                    <IconButton color="inherit">
                      <DeleteOutlineTwoToneIcon
                        onClick={() =>
                          this.deleteNoteClicked(this.state?.todo?.id)
                        }
                      />
                    </IconButton>
                    <IconButton color="inherit">
                      <PaletteOutlinedIcon
                        onClick={() => this.changeColorClickedToggle()}
                      />
                    </IconButton>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.isSetColorClicked && (
                    <CirclePicker
                      width="252px"
                      onChangeComplete={this.handleChangeComplete}
                    />
                  )}
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {" "}
                  {this.state?.todo?.body}
                  {/* <div style={{ textAlign: "right" }}> */}
                  <div
                    style={{
                      justifyItems: "stretch",
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                  >
                    <TextField
                      color="secondary"
                      variant="standard"
                      autoFocus={true}
                      id="date"
                      label="targetDate"
                      type="date"
                      onChange={(event) => this.dateHasChanged(event)}
                      defaultValue={moment(this.state.targetDate).format(
                        "YYYY-MM-DD"
                      )}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <IconButton color="inherit">
                      <NotificationsNoneIcon
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          this.notifyMelicked(
                            this.state?.todo?.title,
                            this.state.targetDate
                          )
                        }
                      />
                    </IconButton>
                    {/* <div style={{width:"100px", left:"10px"}}> */}
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Paper>
      </div>
    );
  }
}

export default Note;
