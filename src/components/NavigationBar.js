import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../styles/App.css';

class NavigationBar extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        let stats_button;
        console.log(this.props)

        if(this.props.page === "fighter"){

            stats_button = <Link to="/fighters" className="btn btn-warning btn-lg float-right">Fighter Stats </Link>
        }else {
            stats_button = <Link to="/fighters" className="btn btn-light btn-lg float-right">Fighter Stats</Link>   
        }

        let schedule_button

        if(this.props.page === "schedule"){
            schedule_button = <Link to="/schedules/ufc" className="btn btn-warning btn-lg float-right">UFC Schedule</Link> 
        }else{
            schedule_button = <Link to="/schedules/ufc" className="btn btn-light btn-lg float-right">UFC Schedule</Link>
        }

        let create_button

        if(this.props.page === "create"){
            create_button = <Link to="/create-forum" className="btn btn-warning btn-lg">+ Start New Forum</Link>
        }else{
            create_button = <Link to="/create-forum" className="btn btn-outline-danger btn-lg">+ Start New Forum</Link>
        }

        let forum_button

        if(this.props.page === "forum"){
            forum_button = <Link to="/" className="btn btn-warning btn-lg float-right"> All Forums</Link>
        }else{
            forum_button = <Link to="/" className="btn btn-light btn-lg float-right">All Forums</Link>
        }

        return (
            <div className="navigation-container">
                <div className="button-container">
                    {create_button}
                </div>
                <div className="button-container">
                    {schedule_button}
                </div>
                <div className="button-container">
                {stats_button}
                </div>
                <div className="button-container">
                    {forum_button}
                </div>
                <br />
                <br />
                <hr />
            </div>
        )
    }
};

export default NavigationBar;