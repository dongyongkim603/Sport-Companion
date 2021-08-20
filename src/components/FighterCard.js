import React from 'react';
import '../styles/App.css';

const FighterCard = (props) => {
    const fighter = props.fighter;
    return (
        <div className="card-container">
            <div className="forum-container">
                <div className="desc">
                    <h3><b>Fighter Name:</b><br></br> {fighter.FirstName} {fighter.Nickname} {fighter.LastName}</h3>
                    <p><b>WeightClass:</b><br></br> {fighter.WeightClass}</p>
                    <p><b>Height:</b><br></br> {fighter.Height}</p>
                    <p><b>Reach:</b><br></br> {fighter.Reach}</p>
                    <p><b>Record:</b><br></br> W:{fighter.Wins}-L:{fighter.Losses}</p>
                    <p><b>KO Wins:</b><br></br> {fighter.TechnicalKnockouts}</p>
                </div>
            </div>
        </div>
    )
};

export default FighterCard;