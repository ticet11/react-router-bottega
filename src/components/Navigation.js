import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/about">
                About
            </NavLink>
            <NavLink to="/blog">
                Blog
            </NavLink>
            <NavLink exact to="/contact">
                Contact
            </NavLink>
        </div>
    );
}
