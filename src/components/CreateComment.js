import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import FileUploader from './FileUploader';

class CreateComment extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            body: '',
            image_banner: '',
            forum_id: ''
        };
    }

    onUploadImage(img_url) {
        console.log(img_url)
        this.setState({
            image_banner: img_url
        })
    }

    getForumId(forumId) {
        console.log(forumId)
        this.setState({
            forum_id: this.props.forum_id
        })
    }


    onChange = e => {
        console.log(this.state)
        this.setState({ [e.target.name]: e.target.value });
        this.setState({
            forum_id: this.props.forum_id
        })
    };

    onSubmit = e => {
        e.preventDefault();

        let forum_path = this.props.history.location.pathname
            .substring(("/show-forum/".length),
                this.props.history.location.pathname.length);

        console.log(forum_path)

        const data = {
            author: this.state.author,
            body: this.state.body,
            comment_banner: this.state.image_banner,
            forum_id: forum_path,
            likes: 0
        };

        axios
            .post(`http://d18a651cad22.ngrok.io/api/comments/create-comment`, data)
            .then(res => {
                this.setState({
                    author: '',
                    body: '',
                    comment_banner: '',
                    forum_id: '',
                    likes: 0
                })
                this.props.history.push(`/show-forum`);
                this.props.history.push(`/show-forum/${this.props.forum_id}`);

            })
            .catch(err => {
                console.error(`Error in CreateComment! ${err}`);
            })
    };

    render() {
        return (
            <div className="create-comment">
                <div className="container">
                    <p className="lead text-center" alt="Create new Comment">
                        Create new Comment
                    </p>
                    <br />
                    <form noValidate onSubmit={this.onSubmit}>
                        <br />

                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Username'
                                name='author'
                                className='form-control'
                                value={this.state.author}
                                onChange={this.onChange}
                                alt="text area - author"
                            />
                        </div>
                        <div className="center-box">
                            <FileUploader changeImageUrl={this.onUploadImage.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Comment '
                                name='body'
                                className='form-control'
                                value={this.state.body}
                                onChange={this.onChange}
                                alt="text area add a disciption for the Comment"
                            />
                        </div>


                        <input
                            type="submit"
                            className="btn btn-outline-danger btn-block mt-4"
                            alt="submit Comment"
                        />
                    </form>

                </div>
            </div>
        );
    }
}

export default CreateComment;