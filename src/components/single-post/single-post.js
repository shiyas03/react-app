import { Component } from "react";

class SinglePost extends Component {
    constructor(props){
        super(props)
        console.log("SinglePost constructor is called")
    }

    // static getDerivedStateFromProps(prop, state){
    //     console.log("SinglePost derived is called")
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("SinglePost should component update is fired")
        return true;
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

    getSnapshotBeforeUpdate(preProps, preState){
        console.log('singlePost snapshot fired')
        return null;
    }

    componentDidUpdate(preProps, preState, snapshot){
        console.log('singlePost component did update fired')
    }

    componentDidMount(){
        console.log("SinglePost component did mount is fired")
    }

    componentWillUnmount(){
        console.log('single post component will unmount fired')
    }
}

export default SinglePost;