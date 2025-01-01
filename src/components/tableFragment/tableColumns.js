import React from "react";

export function TableColumns(props) {
    return (
        <React.Fragment>
            <td>{props.user.id} </td>
            <td>{props.user.name} </td>
        </React.Fragment>
    )
}