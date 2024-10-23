import React, { Component } from "react";
import { RefTextInput } from "./refTextInput";

export default class PrentRefTextInput extends Component{
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount(){
        this.componentRef.current.focusInput('parent ref')

    }

    render() {
        return(
            <div>
                <RefTextInput ref={this.componentRef} />
            </div>
        )
    }
}