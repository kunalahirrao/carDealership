import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Showcase from "../Showcase/Showcase";
import Features from "../Features/Features";
import Carousal from "../Carousal/Carousal";
import Contact from "../Contact/Contact";
import "./index.css"
import About from "../About/About"
const { Fragment } = require("react")


const Navbar = () => {
    return <Fragment>
        <header>
            <Router>
                <nav id="navbar">
                    <div className="container">
                        <h1 className="logo">Car Mall</h1>
                        <ul>
                            {/* <li><a className="current" href="./index.html">Home</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./contact.html">Contact</a></li> */}
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" render={props =>
                        <Fragment>
                            <Showcase></Showcase>
                            <Carousal></Carousal>
                            <Features></Features>
                        </Fragment>
                    } />
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </header>
    </Fragment >
}

export default Navbar