import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path='/courses'>
          <Courses/>
        </Route>
        <Route exact path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
