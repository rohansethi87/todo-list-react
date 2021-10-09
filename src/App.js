import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' children={<TodoList />} />
          <Route path='/todo/:id' children={<Todo />} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
