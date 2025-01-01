import { Component } from "react";

export default class MouseTracker extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 }
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }

    render() {
        return (
            <div style={{ width: '100vw', height: '1000vh' }} onMouseMove={this.handleMouseMove}>
                <div>please move mouse pointer</div>
                <div>
                    the mouse pointer position is x {this.state.x} and y {this.state.y}
                </div>
                <div>{this.props.render(this.state)}</div>
            </div>
        )
    }
}