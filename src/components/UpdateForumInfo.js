import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/App.css';

class UpdateForumInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: ''
        };
    }

    componentDidMount() {
        axios
            .get('http://d18a651cad22.ngrok.io/api/fightFriend/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    author: res.data.author,
                    description: res.data.description,
                })
            })
            .catch(err => {
                console.log("Error from UpdateForumInfo");
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
        };

        axios
            .put('http://d18a651cad22.ngrok.io/api/fightFriend/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-forum/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateForumInfo!");
            })
    };


    render() {
        return (
            <div className="UpdateForumInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Forum List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Forum</h1>
                            <p className="lead text-center">
                                Update Forum's Info
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="title">Title</label>
                                <input
                                    type='text'
                                    placeholder='Title of the Forum'
                                    name='title'
                                    className='form-control'
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="author">Author</label>
                                <input
                                    type='text'
                                    placeholder='Author'
                                    name='author'
                                    className='form-control'
                                    value={this.state.author}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="description">Description</label>
                                <input
                                    type='text'
                                    placeholder='Describe this Forum'
                                    name='description'
                                    className='form-control'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Forum</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateForumInfo;
