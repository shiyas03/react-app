import React,{ Component } from "react"
import ForwardingRefButton from "./forwardingRefButton"

export default class ParentForwardingRef extends Component {
    constructor(props) {
        super(props)
        this.buttonRef = React.createRef()
    }

    componentDidMount(){
        // console.log(this.buttonRef.current);
        // this.buttonRef.current.innerHTML = 'react tutorial';
    }

    render() {
        return (
            <div>
                <ForwardingRefButton ref={this.buttonRef} />
            </div>
        )
    }
}