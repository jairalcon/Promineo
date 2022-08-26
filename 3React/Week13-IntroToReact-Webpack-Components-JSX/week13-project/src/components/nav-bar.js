import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded gradient">
                <div className="container-fluid">
                    <a className="navbar-brand ms-1" href="#">Week13 Project</a>
                    <button className="navbar-toggler" typeof="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" typeof="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" typeof="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}