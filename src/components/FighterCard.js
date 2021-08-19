import React from 'react';
import '../styles/App.css';

const FighterCard = (props) => {
    const fighter = props.fighter;
    return (
        <div className="card-container">
            <div className="forum-container">
                <div className="desc">
                    <h3>Fighter Name:<br></br> {fighter.FirstName} {fighter.Nickname} {fighter.LastName}</h3>
                    <p>WeightClass:<br></br> {fighter.WeightClass}</p>
                    <p>Height:<br></br> {fighter.Height}</p>
                    <p>Reach:<br></br> {fighter.Reach}</p>
                    <p>Record:<br></br> W:{fighter.Wins}-L:{fighter.Losses}</p>
                    <p>Knockout Wins:<br></br> {fighter.TechnicalKnockouts}</p>
                </div>
            </div>
        </div>
    )
};

export default FighterCard;