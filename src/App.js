import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar.component';
import ExercisesList from './components/exercises-list/exercises-list.component';
import EditExercise from './components/edit-exercises/edit-exercises.component';
import CreateExercise from './components/create-exercise/create-exercise.component';
import CreateUser from './components/create-user/create-user.component';
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
