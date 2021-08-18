import { Link } from 'react-router-dom';
import '../styles/App.css';

const NavigationBar = (props) => {

    return (
        <div className="col-md-11">
            <Link to="/create-forum" className="btn btn-outline-danger">
                + Start New Forum
            </Link>
            <br />
            <br />
            <hr />
        </div>
    )
};

export default NavigationBar;