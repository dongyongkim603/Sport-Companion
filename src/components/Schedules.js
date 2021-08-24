import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import ScheduleCard from './ScheduleCard';
import logo from './../resources/Ultimate-Fighting-Championship-Logo-2001-2015.png';
import NavigationBar from './NavigationBar';

class Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: []
        };
    }

    componentDidMount() {
        const organization = window.location.pathname;

        axios
            .get(`http://d18a651cad22.ngrok.io/api/sportsDataApi${organization}`)
            .then(res => {
                this.setState({
                    schedules: res.data
                })
            })
            .catch(err => {
                console.log('Error from schedules');
            })
    };

    render() {
        const schedules = this.state.schedules;
        console.log("schedules: " + schedules);
        let scheduleList;

        if (!schedules) {
            scheduleList = "could not get schedules";
        } else {
            scheduleList = schedules.map((schedule, k) =>
                <ScheduleCard schedule={schedule} key={k} />
            );
        }



        return (
            <div className="ShowForumList">
                <div className="container">
                    <div className="row">
                        <NavigationBar
                            page={"schedule"}
                        />
                        <div className="home-banner-container">
                            <img src={logo} className="home-banner" />
                        </div>
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">Scheduled Fights</h2>
                        </div>
                        <div className="col-md-11">
                            <br />
                            <br />
                            <hr />
                        </div>

                    </div>

                    <div className="list">
                        {scheduleList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedules;