import { Link, useNavigate } from "react-router-dom"
import './App.css';

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="header-container">
      <h1 className="project-title">CSE Nexus</h1>
      
      <nav>
        <div className="navlinks">
          <Link to="/resources">Resources</Link>
          <Link to="/submitresource">Submit Resource</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/shareexperience">Share Experience</Link>
        </div>

        <button onClick={() => { localStorage.removeItem('isAdmin'); navigate("/") }} className="logoutbtn"> Logout </button>
      </nav>

      <div className="marquee-container">
        <div className="marquee-text">
          Happy Learning! 🎉 Support the CSE Department by sharing quality resources! 🚀 Stay updated for more features!
        </div>
      </div>
    </div>
  )

}

export default Navbar