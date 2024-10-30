import { Component } from "react";
import CallBackRefInputText from "./callbackRef";

export default class ParentCallbackTextInput extends Component{
    constructor(props) {
        super(props);
        this.textInput = null;
    }

    componentDidMount(){
        this.textInput.focus();
        this.textInput.value = 'parent callback input text'
    }

    render(){
        return(
            <CallBackRefInputText inputRef={el=> this.textInput = el} />
        )
    }
}