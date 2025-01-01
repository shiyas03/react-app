import { Component } from "react"
import MouseTracker from "./mouseTracker";

export default class Cat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MouseTracker
                render={(mouse) => {
                    return (
                        <img src="https://imgs.search.brave.com/rVwOw7oImKvjlBRG1-7EdU8WJyJR2LJlxPHXnl-bUkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTMzMjQy/NTYvMjExMDgvaS80/NTAvZGVwb3NpdHBo/b3Rvc18yMTEwODMy/OTAtc3RvY2stcGhv/dG8tY3V0ZS1kb21l/c3RpYy10YWJieS1j/YXQtY29sbGFyLmpw/Zw"
                            style={{ width: '100px', position: 'absolute', left: mouse.x, top: mouse.y }} />
                    )
                }}
            />
        )
    }
}