import React from "react";

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <legend>Welcome to Dashboard</legend>
                </div>
                <ul>
                    {this.props.user.employee.map((value, i) => <li key={i}>{value.name} : {value.email}</li>)}
                </ul>
            </div>
        );
    }
}

Dashboard.protoTypes = {
    user : React.PropTypes.object
};