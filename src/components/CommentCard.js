import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const CommentCard = (props) => {
    const comment = props.comment;

    return (
        <div className="card-container">
            <div className="desc">
                <div>
                    <h2>
                        Username: {comment.author}
                    </h2>
                    <p>Date Posted: {comment.post_date}</p>
                </div>
                <div>
                    <p>{comment.body}</p>
                </div>
                <img src={comment.comment_banner} className="home-banner" />
            </div>
        </div>
    )
};

export default CommentCard;