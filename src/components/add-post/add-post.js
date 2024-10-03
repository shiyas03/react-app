import { Component } from "react";

class AddPost extends Component {

    state = {
        title: '',
        description: '',
        status: ''
    }

    addPostHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
     }

    textChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return (
            <div className="p-5 w-full border-2">
                <h2 className="text-2xl">Add Post</h2>
                <form className="space-y-5" onSubmit={this.addPostHandler}>
                    <div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input type="text" value={this.state.title} onChange={this.textChange.bind(this, 'title')} id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea id="" value={this.state.description} onChange={this.textChange.bind(this,'description')} rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <select id="" value={this.state.status} onChange={this.textChange.bind(this, 'status')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost;