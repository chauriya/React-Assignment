import React from "react";

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to Dashboard. </p>
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