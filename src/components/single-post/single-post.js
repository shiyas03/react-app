import { Component } from "react";

class SinglePost extends Component {
    constructor(props){
        super(props)
        console.log("SinglePost constructor is called")
    }

    static getDerivedStateFromProps(prop, state){
        console.log("SinglePost derived is called")
    }

    componentDidMount(){
        console.log("SinglePost mount is caeed")
    }

    render() {
        console.log("SinglePost render is called")
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