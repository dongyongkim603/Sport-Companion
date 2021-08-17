import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const ForumCard = (props) => {
    const forum = props.forum;

    return (
        <div className="card-container">
            <div className="desc">
                <div>
                    <h2>
                        <Link to={`/show-forum/${forum._id}`}>
                            {forum.title}
                        </Link>
                    </h2>
                    <h3>{forum.author}</h3>
                    <p>Last Updated: {forum.updated_date}</p>
                </div>
                <div>
                    <p>{forum.description}</p>
                </div>
                <Link to={`/show-forum/${forum._id}`}>
                    <img src={forum.forum_banner} className="home-banner" />
                </Link>
            </div>
        </div>
    )
};

export default ForumCard;