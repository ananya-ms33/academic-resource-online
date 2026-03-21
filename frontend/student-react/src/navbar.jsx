import { Link, useNavigate } from "react-router-dom"
import './App.css'

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="headercont">
      <div className="titlewrap">
        <div className="titlebox">
          <h1 className="projtitle">CSEA Resource Hub</h1>
        </div>
      </div>
      
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
          Happy Learning! 🎉 Support the CSEA Department by sharing quality resources! 🚀 Stay updated for more features!
        </div>
      </div>
    </div>
  )

}

export default Navbar