import { Component } from "react";

class SinglePost extends Component {
    render() {
        return (
            <div>
                <div>{this.props.description}</div>
                <div>
                    {this.props.children}
                </div>
                <div>{this.props.addPost}</div>
            </div>
        )
    }
}

export default SinglePost;