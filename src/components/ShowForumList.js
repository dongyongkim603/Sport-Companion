import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import ForumCard from './ForumCard';
import NavigationBar from './NavigationBar';
import logo from './../resources/pngfind.com-arts-png-3779409.png';

class ShowForumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forums: []
        };
    }

    componentDidMount() {
        axios
            .get('http://d18a651cad22.ngrok.io/api/fightFriend')
            .then(res => {
                this.setState({
                    forums: res.data
                })
            })
            .catch(err => {
                console.log('Error from ShowForumList');
            })
    };

    render() {
        const forums = this.state.forums;
        console.log("PrintForums: " + forums);
        let forumList;

        if (!forums) {
            forumList = "there is no forum record!";
        } else {
            forumList = forums.map((forum, k) =>
                <ForumCard forum={forum} key={k} />
            );
        }

        return (
            <div className="ShowForumList">
                <div className="container">
                    <div className="row">
                        <NavigationBar
                            page={"forum"}
                        />
                        <div className="home-banner-container">
                            <img src={logo} className="home-banner" />
                        </div>
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center"><b>All Forums</b></h2>
                        </div>

                    </div>

                    <div className="list">
                        {forumList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowForumList;