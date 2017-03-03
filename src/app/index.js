import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Dashboard } from "./Components/Dashboard";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Profile } from "./Components/Profile";

class App extends React.Component {

  render() {

    return (
      <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));