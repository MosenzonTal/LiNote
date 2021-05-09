import React, { Component } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import NotesDataService from "../../api/Notes/NotesDataService";
import AuthenticationService from "../../AuthenticationService";
import ReactStars from "react-rating-stars-component";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";

class addNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      rating: 1,
      background: "",
      targetDate: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  validate(values) {
    let errors = {};
    if (!values.title) {
      errors.title = "You Must Enter A Title";
    } else if (values.title.length < 5) {
      errors.title = "Title must contain at least 5 charcaters";
    }

    if (!values.description) {
      errors.description = "You Must Enter A Description";
    } else if (values.description.length < 5) {
      errors.description = "Description must contain at least 5 charcaters";
    }

    return errors;
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();
    console.log(values.targetDate);
    NotesDataService.addNote(username, {
      title: values.title,
      body: values.description,
      priority: this.state.rating,
      date: values.targetDate
    })
      .then((response) => this.props.history.push(`/notes/`))
      .catch((error) => console.log());
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }

  render() {
    let title = this.state.title;
    let description = this.state.description;
    let targetDate = this.state.targetDate;
    return (
      <div>
        <h1>Add New Note</h1>
        <br />
        <div className="container">
          <Formik
            initialValues={{
              title: title,
              description: description,
              targetDate: targetDate
            }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="alert alert-danger"
                ></ErrorMessage>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-danger"
                ></ErrorMessage>
                <fieldset className="form-group">
                  <label>
                    <b>Title</b>
                  </label>
                  <Field className="form-control" type="text" name="title" />
                </fieldset>
                <br />
                <fieldset className="form-group">
                  <label>
                    <b>Description</b>
                  </label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <br />
                <fieldset className="form-group">
                  <label><b>Target Date</b></label>
                  <Field style={{textAlign: "left"}}
                    className="form-control"
                    type="date"
                    name="targetDate"                   
                  />
                </fieldset>
                <br />
                <div>
                  <h6>
                    <b>Priority</b>
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ReactStars
                      count={5}
                      onChange={this.ratingChanged}
                      size={37}
                      value={1}
                      activeColor="#ffd700"
                    ></ReactStars>
                  </div>
                </div>
                <Button
                  className="btn btn-success"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="medium"
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default addNote;
