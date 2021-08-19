import { Link } from 'react-router-dom';
import '../styles/App.css';

const NavigationBar = (props) => {

    return (
        <div className="navigation-container">
            <div className="button-container">
                <Link to="/create-forum" className="btn btn-outline-danger btn-lg">
                    + Start New Forum
                </Link>
            </div>
            <div className="button-container">
                <Link to="/schedules/ufc" className="btn btn-light btn-lg float-right">
                    UFC Schedule
                </Link>
            </div>
            <div className="button-container">
                <Link to="/fighters" className="btn btn-light btn-lg float-right">
                    Fighter Stats
                </Link>
            </div>
            <div className="button-container">
                <Link to="/" className="btn btn-warning btn-lg float-right">
                    All Forums
                </Link>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
};

export default NavigationBar;