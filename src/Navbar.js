import React from 'react'
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return <ul>
            <div className="Nav">
                <Link to="/">Squabank Home</Link>
            </div>
            <div>
                <Link to="/accounts">View Accounts</Link>
            </div>
        </ul>
    }
}

export default Navbar