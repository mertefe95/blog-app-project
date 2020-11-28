import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import CreateBlog from "./components/CreateBlog";
import "./assets/style.css"

export default function App () {
    return (
        
        <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Homepage} />
                <Route path="/create" component={CreateBlog} />
            </Switch>
            <Footer />
            </div>
        </Router>

    )
}
