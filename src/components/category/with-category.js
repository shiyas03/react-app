import { Component } from "react";

export function WithCategory(limit) {
    return function (WrapppedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    categories: ['Category 1', 'Category 2', 'Category 3']
                }
            }
            render() {
                let categories = this.state.categories.splice(0, limit)
                return (
                    <div>
                        <div>With Category Title</div>
                        <WrapppedComponent {...this.props} categories={categories} />
                    </div>
                )
            }
        }
    }
}