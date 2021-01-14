// NEEDED IMPORT FOR MENU
import React, { useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

//PAGES  GOES HERE
import Home from "../visitor/home/Home";
import Contact from "../visitor/contact/Contact";
import Admin from "../admin/Admin";
import Dashboard from "../admin/dashboard/Dashboard";
import Details from "../visitor/hotels/details/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from '@fortawesome/free-solid-svg-icons';



// MENU
function Layout(){

    const { login, logout } = useContext( AuthContext );
    const [show, setShow] = useState(false);

    function navToggle(){
        // IF TRUE
        if(show){
            setShow(false) // HIDE
            return
        }
        // ELSE
        setShow(true) // SHOW
    }

    return (
        <>
        <Router>
            <Navbar className="Navbar navbar-dark" expand="sm" expanded={show}>
                {!login ? (
                    <NavLink to="/" exact className="nav-link navbar__logo">
                    <Navbar.Brand className="navbar__logo--img"  title="Holidaze Logo"></Navbar.Brand>
                    </NavLink>
                ) : (
                    <h1 className="nav-link navbar__admin">
                        ADMIN
                    </h1>
                ) }
                    
                <Navbar.Toggle 
                    onClick={() => navToggle()} 
                    aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon className="navbar__hamburger" icon={faHamburger}/>
                </Navbar.Toggle>

                <Navbar.Collapse 
                    onMouseLeave={() => setShow(false)} 
                    onClick={() => setShow(false)}  
                    id="basic-navbar-nav" >
                        
                    <Nav className="ml-auto navbar__btn">
                        {!login ? (
                            <>
                            <NavLink to="/" exact className="nav-link navbar__btn--link">
                                Home
                            </NavLink>
                            <NavLink to="/contact" exact className="nav-link navbar__btn--link">
                                Contact
                            </NavLink>
                            <NavLink to="/admin" className="nav-link navbar__btn--link">
                                Admin
                            </NavLink>
                            </>
                        ) : (
                            <>
                            <NavLink to="/" exact className="nav-link navbar__btn--link">
                                Home
                            </NavLink>
                            <NavLink to="/dashboard" className="nav-link navbar__btn--link">
                                DashBoard
                            </NavLink>
                            <NavLink to="/admin" className="nav-link navbar__btn--link" onClick={logout}>
                                Sign Out
                            </NavLink>
                            </>
                        )}
                      
                     
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Switch>
                    <Route basename={"/"} path="/" exact component={Home} />
                    <Route basename={"/contact"} path="/contact" exact component={Contact} />
                    <Route basename={"/admin"} path="/admin" exact component={Admin} />
                    <Route path="/hotel/:id" component={Details} />
                    <ProtectedRoute basename={"/dashboard"} path="/dashboard" exact component={Dashboard} />
                </Switch>
            </div>
        </Router>
       
        </>
    );
};


export default Layout;