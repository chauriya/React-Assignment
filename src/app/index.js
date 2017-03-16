import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Dashboard } from "./Container/Dashboard";
import { Login } from "./Container/Login";
import { Register } from "./Container/Register";
import { Profile } from "./Container/Profile";

class App extends React.Component {

  render() {
      var userData = {
            "employee": [{
                "name": "Gaurav",
                "email": "gaurav@gmail.com"
            },
            {
                "name": "ABC",
                "email": "abc@gmail.com"
            },{
                "name": "xyz",
                "email": "xyz@gmail.com"
            }
            ]
        };

    return (
      <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="container">
					<div className="row">
						<div className="col-xs-10">
							<Dashboard user={userData}/>
						</div>
					</div>
					<div className="row">
							<Register />
						<div className="col-xs-6">
                            <Login />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<Profile user={userData} />
						</div>
					</div>
				</div>
            </div>
        </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));