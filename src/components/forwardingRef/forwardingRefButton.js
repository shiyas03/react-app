import React,{ Component } from "react"

class ForwardingRefButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h2>child forwarding Ref</h2>
                <button ref={this.props.ref}>
                    click me
                </button>
            </div>
        )
    }
}

export default React.forwardRef((props,ref)=>{
    return <ForwardingRefButton buttonRef={ref} {...props} />
})