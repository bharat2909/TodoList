import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import Create from './Create';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
              <Content></Content>
          </Route>
          <Route path="/create">
              <Create></Create>
          </Route>
          <Route path="/todos/:id">
              
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
