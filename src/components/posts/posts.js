import { Component } from 'react'
import SinglePost from '../single-post/single-post';
import AddPost from '../add-post/add-post';
import Dialog from '../dialog/dialog'

class Posts extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: [
                { id: '1', title: 'title 1', description: 'description 1' },
                { id: '2', title: 'title 2', description: 'description 2' },
                { id: '3', title: 'title 3', description: 'description 3' },
            ],
            postTitle: 'Posts Title',
            showPost: false
        }
        console.log('posts.js constructor is called')
    }

    static getDerivedStateFromProps(props,state){
        console.log('posts.js derived called')
        return state;
    }

    componentDidMount(){
        console.log('posts.js mount is called')
    }

    updateTitleHandler(title) {
        // e.preventDefault()
        this.setState({
            postTitle: title
        })
    }

    titleHandler = (title) => {
        // e.preventDefault()
        this.setState({
            postTitle: title
        })
    }

    toggleHandler = () => {
        this.setState({
            showPost: !this.state.showPost
        })
    }

    changeTitleHandler = (id, e) => {
        const postIndex = this.state.posts.findIndex((post) => post.id === id);
        const posts = [...this.state.posts]
        posts[postIndex].title = e.target.value
        this.setState({ posts, })
    }

    getPosts() {
        // let posts = this.state.posts.map((post) => {
        //     return (
        //         <SinglePost title={post.title} description={post.description} />
        //     )
        // })
        return (
            // <div>{posts}</div>
            <div className="p-5 w-1/3 border-2">{
                this.state.posts.map((post, i) => {
                    return (
                        <SinglePost key={post.id} description={post.description} addPost={<AddPost />} >
                            <input type="text" value={post.title} onChange={this.changeTitleHandler.bind(this, post.id)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                        </SinglePost>
                    )
                })}
            </div>
        )
    }

    render() {
        // setTimeout(() => {
        //     const posts = [...this.state.posts];
        //     posts[0].title = 'modified title 1';
        //     posts[1].title = 'modified title 2';

        //     this.setState({
        //         posts,
        //     })
        // }, 3000);

        // let posts = null;
        // if (this.state.showPost) {
        //     posts = (
        //         <div>
        //             <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
        //             <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
        //         </div>
        //     );
        // }

        console.log('posts.js render is called')

        return (
            <div className='space-y-3'>

                <Dialog>
                    <div>dialog props data</div>
                </Dialog>
                <div>{this.state.postTitle}</div>
                <button onClick={this.toggleHandler}>{this.state.showPost ? 'hide post' : 'show post'}</button>
                {/* <button onClick={this.updateTitleHandler.bind(this, 'modified 1')}>update</button> <br />
                <button onClick={this.titleHandler.bind(this, 'modified 2')}>update</button> <br /> */}
                {/* <a href='https://www.google.co.in/' onClick={(e)=> this.titleHandler(e)}>update</a> <br />
                <a href='https://www.google.co.in/' onClick={(e)=> this.updateTitleHandler(e)}>update</a> <br /> */}

                {/* {posts} */}
                {/* {this.state.showPost && (<div>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>)} */}

                {this.getPosts()}
                <AddPost />


            </div>

        )
    }
}

export default Posts;