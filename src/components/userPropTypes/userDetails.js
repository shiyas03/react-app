import { Component } from "react";
import propsType from 'prop-types'

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-4 bg-gray-200 mx-2">
                <div>Name {this.props.name}</div>
                <div>id {this.props.id}</div>
            </div>
        )
    }
}

UserDetails.defaultProps = {
    name: 'john'
}

UserDetails.propsType = {
    name: propsType.string,
    id: propsType.number.isRequired,
}