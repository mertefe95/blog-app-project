import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/createpost" exact component={CreatePost} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
