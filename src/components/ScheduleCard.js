import React from 'react';
import '../App.css';

const ScheduleCard = (props) => {
    const schedule = props.schedule;
    return (
        <div className="card-container">
            <div className="desc">
                <h3>{schedule.Name}</h3>
                <p>{schedule.DateTime}</p>
            </div>
        </div>
    )
};

export default ScheduleCard;