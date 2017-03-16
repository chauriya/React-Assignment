import React from "react";

export class Profile extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <legend>User Profile</legend>
                </div>
                <p>This is Profile Section {this.props.myStr}</p>
                <hr/>
                <ul>
                    {this.props.user.employee.map((value, i) => <li key={i}>{value.name} : {value.email}</li>)}
                </ul>
            </div>
        );
    };
};

Profile.prototypes = {
    user: React.PropTypes.object,
    myStr: React.PropTypes.string.isRequired
};