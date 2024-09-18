import { Component } from 'react'
import SinglePost from '../single-post/single-post';

class Posts extends Component {

    state = {
        posts: [
            { title: 'title 1', description: 'description 1' },
            { title: 'title 2', description: 'description 2' },
        ],
        postTitle: 'Posts Title',
        showPost: false
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

    render() {
        setTimeout(() => {
            const posts = [...this.state.posts];
            posts[0].title = 'modified title 1';
            posts[1].title = 'modified title 2';

            this.setState({
                posts,
            })
        }, 3000);

        let posts = null;
        if (this.state.showPost) {
            posts = (
                <div>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>
            );
        }

        return (
            <div className=''>
                <div>{this.state.postTitle}</div>
                <button onClick={this.toggleHandler}>{this.state.showPost ? 'hide post' : 'show post'}</button>
                {/* <button onClick={this.updateTitleHandler.bind(this, 'modified 1')}>update</button> <br />
                <button onClick={this.titleHandler.bind(this, 'modified 2')}>update</button> <br /> */}
                {/* <a href='https://www.google.co.in/' onClick={(e)=> this.titleHandler(e)}>update</a> <br />
                <a href='https://www.google.co.in/' onClick={(e)=> this.updateTitleHandler(e)}>update</a> <br /> */}

                {/* {posts} */}
                {this.state.showPost && (<div>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>)}
            </div>
        )
    }
}

export default Posts;