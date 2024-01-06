import { Link } from "react-router-dom";

function NoMatch() {
    return (

        <div className="row my-5">
            <div className="col text-center">
                <h4 className="display-5">Page Not Found!</h4>
                <Link to="/">Back to Homepage</Link>
            </div>
        </div>

    );
}

export default NoMatch;