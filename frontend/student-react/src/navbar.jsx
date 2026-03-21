import { Link, useNavigate } from "react-router-dom"
import './App.css';

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="headercont">
      <h1 className="projtitle">CSE Nexus</h1>

      <nav>
        <div className="navlinks">
          <Link to="/resources">Resources</Link>
          <Link to="/submitresource">Submit Resource</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/shareexperience">Share Experience</Link>
        </div>

        <button onClick={() => { localStorage.removeItem('isAdmin'); navigate("/") }} className="logoutbtn"> Logout </button>
      </nav>

      <div className="marqueecont">
        <div className="marqueetext">
          Happy Learningg
        </div>
      </div>
    </div>
  )

}

export default Navbar