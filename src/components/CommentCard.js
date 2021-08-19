import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import likeIcon from './../resources/white-like-icon-png-20.png'

const CommentCard = (props) => {
    const comment = props.comment;
    const likePath = `/${comment._id}`;

    return (
        <div className="card-container">
            <div className="comment-container">
                <div className="desc">
                    <div>
                        <h2>
                            <b>Username: {comment.author}</b>
                        </h2>
                        <p>Date Posted: {comment.post_date}</p>
                        <Link to={likePath}>
                            <img src={likeIcon} className="like-button"/>
                        </Link>
                    </div>
                    <div>
                        Likes: {comment.likes}
                        <p>{comment.body}</p>
                    </div>
                    <div>
                        <img src={comment.comment_banner} className="home-banner" />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
};

export default CommentCard;