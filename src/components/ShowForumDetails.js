import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';
import CommentCard from './CommentCard.js';
import CreateComment from './CreateComment';
import NavigationBar from './NavigationBar';

class showForumDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forum: {},
            comments: []
        };
    }


    onCreateComment(ForumId) {
        console.log(ForumId)
        this.setState({
            image_banner: ForumId
        })
    }

    componentDidMount() {

        axios
            .get('http://localhost:8082/api/fightFriend/' + this.props.match.params.id)
            .then(res => {
                // console.log("Print-showForumDetails-API-response: " + res.data);
                this.setState({
                    forum: res.data
                })
            })
            .catch(err => {
                console.log("Error from ShowForumDetails");
            })

        axios
            .get(`http://localhost:8082/api/comments/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    comments: res.data
                })
            })
    };

    onDeleteClick(id) {
        axios
            .delete('http://localhost:8082/api/fightFriend/' + id)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error form ShowForumDetails_deleteClick");
            })
    };


    render() {

        const forum = this.state.forum;
        let ForumItem = <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{forum.title}</td>
                    </tr>
                    <tr>
                        <td>Forum Creator</td>
                        <td>{forum.author}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{forum.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        const comments = this.state.comments;
        let commentList;
        if (!comments) {
            commentList = <div><h4> "There are no comments yet! be the first to make a comment"</h4></div>;
        } else {
            commentList = comments.map((comment, k) =>
                <CommentCard comment={comment} key={k} />
            );
        }

        return (
            <div className="ShowForumDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                            <NavigationBar />
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">{forum.title}</h1>
                            <img src={forum.forum_banner} className="home-banner" />
                            <hr /> <br />
                        </div>
                    </div>
                    <div>
                        {ForumItem}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this, forum._id)}>Delete Forum</button><br />
                        </div>

                        <div className="col-md-6">
                            <Link to={`/edit-forum/${forum._id}`} className="btn btn-outline-info btn-lg btn-block">
                                Edit Forum
                            </Link>
                            <br />
                        </div>
                    </div>
                    <CreateComment
                        forum_id={forum._id}
                        history={this.props.history}
                    />
                    {commentList}
                </div>
            </div>
        );
    }
}

export default showForumDetails;