import React, { Component } from "react"
import { TableColumns } from "./tableColumns"

export default class TableFragment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                { id: 1, name: "john" },
                { id: 2, name: "Julie" }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Table fragment</h2>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => {
                            return (
                                <React.Fragment key={user.id}>
                                    <tr>
                                        <TableColumns user={user} />
                                    </tr>
                                </React.Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}