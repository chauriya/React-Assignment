import React from'react';

export class Profile extends React.Component {

    render() {
        var userData = {
            'employee': [{
                'name': 'gaurav',
                'email': 'gaurav@gmail.com'
            },
            {
                'name': 'devendra',
                'email': 'devendra@gmail.com'
            }, {
                'name': 'shashank',
                'email': 'shashank@gmail.com'
            }]
        };
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.employee.map(
                        (user, i) => <tr key={i}>
                            <td> {user.name}</td>
                            <td> {user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
