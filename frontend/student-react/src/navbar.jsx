import { Link, useNavigate } from "react-router-dom"
import './App.css';

function Navbar() {

  const navigate = useNavigate()

  return (

    <nav>

      <div className="navlinks">
        <Link to="/resources">Resources</Link>
        <Link to="/submitresource">Submit Resource</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/shareexperience">Share Experience</Link>
      </div>

      <button onClick={() => { navigate("/") }} className="logoutbtn"> Logout </button>

    </nav>

  )

}

export default Navbar