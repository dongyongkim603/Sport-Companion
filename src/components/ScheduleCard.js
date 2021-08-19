import React from 'react';
import '../styles/App.css';

const ScheduleCard = (props) => {
    const schedule = props.schedule;
    return (
        <div className="card-container">
            <div className="forum-container">
                <div className="desc">
                    <h3>Event Name: {schedule.Name}</h3>
                    <p>Date: {schedule.DateTime}</p>
                    <p>Booking Status: {schedule.Status}</p>
                </div>
            </div>
        </div>
    )
};

export default ScheduleCard;