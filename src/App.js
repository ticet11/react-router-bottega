import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

import "./styles/App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />
                    <Route
                        exact
                        path="/contact"
                        component={Contact}
                    />
                    <Route
                        exact
                        path="/blog/:slug"
                        component={BlogPost}
                    />
                    <Route compontent={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
