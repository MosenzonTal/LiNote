import "./App.css";
import Login from "./Components/registration/Login";
import Welcome from "./Components/WelcomePage/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage404/ErrorPage";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Logout from "./Components/registration/Logout";
import AuthenticatedRoute from "./AuthenticatedRoute"
import Register from "./Components/registration/Register"
import NotesList from "./Components/userNotes/NotesList"
import addNote from "./Components/userNotes/addNote";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch> {/* Only one path is shown in a particular point of time*/}
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <AuthenticatedRoute path="/welcome/:name" exact component={Welcome} /> 
        <Route path="/logout" exact component={Logout} />       
        <AuthenticatedRoute path="/notes" exact component={NotesList} />
        <AuthenticatedRoute path="/notes/:id" exact component={addNote} />
        <Route component={ErrorPage} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
