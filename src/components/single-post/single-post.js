import { Component } from "react";

class SinglePost extends Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
                <div>
                    <input type="text" value={this.props.title} onChange={this.props.titleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
            </div>
        )
    }
}

export default SinglePost;