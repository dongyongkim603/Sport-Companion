import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';
import FileUploader from './FileUploader';
import NavigationBar from './NavigationBar';

class CreateForum extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            description: '',
            image_banner: ''
        };
    }

    onUploadImage(img_url) {
        console.log(img_url)
        this.setState({
            image_banner: img_url
        })
    }


    onChange = e => {
        console.log(this.state)
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            forum_banner: this.state.image_banner
        };

        axios
            .post('http://localhost:8082/api/fightFriend', data)
            .then(res => {
                this.setState({
                    title: '',
                    author: '',
                    description: '',
                    image_banner: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.error(`Error in CreateForum! ${err}`);
            })
    };

    render() {
        return (
            <div className="CreateForum">
                <div className="container">
                    <div className="row">
                        <NavigationBar
                        page={"create"}
                        />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center"><b>Add Forum</b></h1>
                            <hr/>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Title of the Forum'
                                        name='title'
                                        className='form-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                        alt="text area forum title"
                                    />
                                </div>
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

                                <FileUploader changeImageUrl={this.onUploadImage.bind(this)} />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Describe this forum'
                                        name='description'
                                        className='form-control'
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        alt="text area add a disciption for the forum"
                                    />
                                </div>


                                <input
                                    type="submit"
                                    className="btn btn-outline-danger btn-block mt-4"
                                    alt="submit forum"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateForum;