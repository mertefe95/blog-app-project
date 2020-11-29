import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import ViewPosts from "./components/ViewPosts";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost"
import Post from "./components/Post"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={ViewPosts} />
          <Route path="/posts/:id" exact component={Post} />
          <Route path="/createpost" exact component={CreatePost} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
