import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import likeIcon from './../resources/white-like-icon-png-20.png'
import axios from 'axios';

class CommentCard extends Component {
    constructor(props) {
        super()
        this.state = {
            count: props.comment.likes,
            comment: props.comment
        }
    }

    incrementMe = () => {
        console.log(this.state.comment.likes)
        let newCount = this.state.comment.likes + 1

        const data = {
            author: this.props.comment.author,
            body: this.props.comment.body,
            post_date: this.props.comment.post_date,
            comment_banner: this.props.comment.comment_banner,
            forum_id: this.props.comment.forum_id,
            likes: newCount
        };

        console.log(data)
        console.log(this.props.comment._id)

        axios
            .put(`http://localhost:8082/api/comments/${this.props.comment._id}`, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err+"Error in updating likes!");
            })

        this.setState({
            count: newCount
        })

        console.log(this.state.comment.likes)

    }

    render() {
        return (
            <div className="card-container">
                <div className="comment-container">
                    <div className="desc">
                        <div>
                            <h2>
                                <b>Username: </b>{this.state.comment.author}
                            </h2>
                            <p><b>Date Posted:</b> {this.state.comment.post_date}</p>
                            <img onClick={this.incrementMe} src={likeIcon} className="like-button" />
                        </div>
                        <div>
                            Likes: {this.state.count}
                            <p>{this.state.comment.body}</p>
                        </div>
                        <div>
                            <img src={this.state.comment.comment_banner} className="home-banner" />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
};

export default CommentCard;