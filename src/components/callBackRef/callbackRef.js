import { Component } from "react";

export default class CallBackRefInputText extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.inputRef = (el) => {
            this.textInput = el;
        }
    }

    // componentDidMount(){
    //     this.textInput.focus();
    //     this.textInput.value = 'callback input ref'
    // }

    render(){
        return(
            <div>
                <div>callback ref</div>
                <input type="text" className="border border-gray-500" ref={this.props.inputRef} />
            </div>
        )
    }
}