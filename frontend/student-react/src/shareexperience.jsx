//shareexperience.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./Footer"
import './App.css'

function ShareExperience() {

  const [company, setcompany] = useState("")
  const [content, setcontent] = useState("")
  const navigate = useNavigate()

  function add() {
    const username = localStorage.getItem('username')
    fetch(`${import.meta.env.VITE_API_URL}/addexperience`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, content, username })
    }).then(() => navigate("/experiences"))
  }

  return (
    <div>
      <Navbar />
      <div className="db">
        <div className="loginpg2">
          <h2>Share Placement Experience</h2>
          <div className="fcont">
            <div className="finp">
              <input placeholder="Company Name" onChange={(e) => setcompany(e.target.value)} />
            </div>
            <div className="finp">
              <textarea placeholder="Share Your Experience"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} onChange={(e) => setcontent(e.target.value)}></textarea>
            </div>
            <button className="subbtn" style={{ width: '100%', marginTop: '10px' }} onClick={add}> Share Now </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShareExperience