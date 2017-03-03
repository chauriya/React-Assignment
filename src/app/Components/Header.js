import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href={"#/dashboard"}>Dashboard</a></li>
                        <li><a href={"#/profile"}>Profile</a></li>
                        <li><a href={"#/register"}>Register</a></li>
                        <li><a href={"#/login"}>Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};