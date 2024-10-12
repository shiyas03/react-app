import { Component } from "react";
import ButtonContext from "../../context/buttonContext";

export default class Navigation extends Component{
    static contextType = ButtonContext;
    render(){
        return(
            <div>
               <a href="#">{this.context}</a>
            </div>
        )
    }
}