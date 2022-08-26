import React, { Component } from "react";

export default class LoginForm extends Component {
    render(){
        return(
            <>
            <form id="login-form" className="login-form text-center mt-4">
                <h3 id="h3" className="text-white">Log In</h3>
                <input typeof="text" name="userName" placeholder="User Name"/>
                <input typeof="text" name="password" placeholder="Password"/>
                <br/><br/>
                <input className="btn btn-success" typeof="submit" value={"Submit"}/>
            </form>
            </>
        )
    }
}