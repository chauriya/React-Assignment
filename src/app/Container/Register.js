import React from "react";

export class Register extends React.Component {
    render() {
        return (
            <form className="form-horizontal" action='' method="POST">
                <fieldset>
                    <div id="legend">
                        <legend>Register</legend>
                    </div>
                    <div className="control-group">
                        <label className="control-label">Username</label>
                        <div className="controls">
                            <input type="text" id="username" name="username" className="input-xlarge" />
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                    </div>
                
                    <div className="control-group">
                        <label className="control-label">E-mail</label>
                        <div className="controls">
                            <input type="text" id="email" name="email" className="input-xlarge" />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                    </div>
                
                    <div className="control-group">
                        <label className="control-label">Password</label>
                        <div className="controls">
                            <input type="password" id="password" name="password" className="input-xlarge" />
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                    </div>
                
                    <div className="control-group">
                        <label className="control-label">Password (Confirm)</label>
                        <div className="controls">
                            <input type="password" id="password_confirm" name="password_confirm" className="input-xlarge" />
                            <p className="help-block">Please confirm password</p>
                        </div>
                    </div>
                
                    <div className="control-group">
                        <div className="controls">
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}