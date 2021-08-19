import { Link } from 'react-router-dom';
import '../styles/App.css';

const NavigationBar = (props) => {

    return (
        <div className="col-md-11">
            <div className="button-container">
                <Link to="/create-forum" className="btn btn-outline-danger">
                    + Start New Forum
                </Link>
            </div>
            <div className="button-container">
                <Link to="/create-forum" className="btn btn-outline-danger">
                    + Start New Forum
                </Link>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
};

export default NavigationBar;