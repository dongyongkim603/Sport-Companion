import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import FighterCard from './FighterCard';
import logo from './../resources/1000_F_287669297_jyKF7nGOczOnkSvXNxFzikGl2ppPCGPm.jpg';
import NavigationBar from './NavigationBar';

class Fighters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fighters: []
        };
    }

    componentDidMount() {
        const organization = window.location.pathname;

        axios
            .get(`http://localhost:8082/api/SportsDataApi`)
            .then(res => {
                this.setState({
                    fighters: res.data
                })
            })
            .catch(err => {
                console.log('Error from schedules');
            })
    };

    render() {
        const fighters = this.state.fighters;
        console.log("fighters: " + fighters);
        let fighters_list;

        if (!fighters) {
            fighters_list = "could not get fighter stats";
        } else {
            fighters_list = fighters.map((fighter, k) =>
                <FighterCard fighter={fighter} key={k} />
            );
        }



        return (
            <div className="ShowForumList">
                <div className="container">
                    <div className="row">
                        <NavigationBar
                            page={"fighter"}
                        />
                        <div className="home-banner-container">
                            <img src={logo} className="home-banner" />
                        </div>
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">Fighter Statistics</h2>
                        </div>
                        <div className="col-md-11">
                            <br />
                            <br />
                            <hr />
                        </div>

                    </div>

                    <div className="list">
                        {fighters_list}
                    </div>
                </div>
            </div>
        );
    }
}

export default Fighters;