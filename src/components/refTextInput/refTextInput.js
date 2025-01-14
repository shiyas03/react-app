import React, { Component } from "react";

export class RefTextInput extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef()
    }

    focusInput = (value) =>{
        this.inputRef.current.focus();
        this.inputRef.current.value = value;
    }
    render(){
        return(
            <div className="space-y-2 my-2">
                <div>Input focus</div>
                <div>
                    <input type="text" ref={this.inputRef} className="border border-gray-500" />
                </div>
                <div>
                    <button className="bg-red-500 px-2 py-1 text-white" onClick={this.focusInput.bind(this,'child ref')}>focus</button>
                </div>
            </div>
        )
    }
}