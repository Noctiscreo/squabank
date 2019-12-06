import React from 'react'
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return <ul className="Nav">
            <div>
                <Link to="/">Slither Home</Link>
            </div>
            <div>
                <Link to="/accounts">Crawl to Accounts</Link>
            </div>
            </ul>
    }
}

export default Navbar