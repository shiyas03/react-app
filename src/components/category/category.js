import { Component } from 'react'
import { WithCategory } from './with-category'

class Category extends Component {
    render(){
        return (
            <div>
                <div>
                    {this.props.name}
                </div>
                <div>Category Component</div>
                {this.props.categories.map((category)=>{
                    return <div>{category}</div>;
                })}
            </div>
        )
    }
}

export default WithCategory(3)(Category);
