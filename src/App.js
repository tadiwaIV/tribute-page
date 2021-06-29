import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Tribute from "./Components/Tribute";


function App() {
  return (
    <div className='app'>
      <Router >
        <Tribute />
      </Router>
    </div>
  );
}

export default App;
