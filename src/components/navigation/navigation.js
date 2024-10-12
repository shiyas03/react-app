import { Component } from "react";
import ButtonContext from "../../context/buttonContext";
import UserContext from "../../context/usercontext";

export default class Navigation extends Component {
    static contextType = ButtonContext;
    render() {
        return (
            <div className="flex flex-col">
                <ButtonContext.Consumer>
                    {(value) => {

                        return <div>
                            <a href="#">{value}</a>
                            <UserContext.Consumer>
                                {(usevalue) => {
                                    return <a href="#">{usevalue.greet()}</a>
                                }}
                            </UserContext.Consumer>
                        </div>

                    }}
                </ButtonContext.Consumer>

            </div>
        )
    }
}