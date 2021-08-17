import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';

class showForumDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forum: {}
        };
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
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
                {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Title</td>
                        <td>{forum.title}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Author</td>
                        <td>{forum.author}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Description</td>
                        <td>{forum.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        return (
            <div className="ShowForumDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Forum List
                            </Link>
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Forum's Record</h1>
                            <p className="lead text-center">
                                View Forum's Info
                            </p>
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
                    {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Forum</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Forum</button> */}

                </div>
            </div>
        );
    }
}

export default showForumDetails;