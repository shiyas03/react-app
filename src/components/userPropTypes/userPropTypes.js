import { Component } from 'react';
import UserDetails from './userDetails';

export default class UserPropsType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'John1', id: 1 },
                { name: 'John2', id: 2 }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>User Props Types</h2>
                <div className="flex">
                    {this.state.users.map((user) => {
                        return <UserDetails name={user.name} id={user.id} key={user.id} />
                    })}
                </div>
            </div>
        )
    }
}