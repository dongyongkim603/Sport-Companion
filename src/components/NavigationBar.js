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
                    UFC
                </Link>
            </div>
            <div className="button-container">
                <Link to="/schedules/bellator" className="btn btn-light btn-lg float-right">
                    Bellator
                </Link>
            </div>
            <div className="button-container">
                <Link to="/schedules/onefc" className="btn btn-light btn-lg float-right">
                    ONE FC
                </Link>
            </div>
            <div className="button-container">
                <Link to="/schedules/pfl" className="btn btn-light btn-lg float-right">
                    PFL
                </Link>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
};

export default NavigationBar;