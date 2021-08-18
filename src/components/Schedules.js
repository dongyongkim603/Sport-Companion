import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import ScheduleCard from './ScheduleCard';

class Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/fightFriend/schedules')
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
            <div className="ShowBookList">
                <div className="container">
                    <div className="row">
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