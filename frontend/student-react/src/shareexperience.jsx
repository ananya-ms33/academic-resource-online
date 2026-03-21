import { useState } from "react"
import Navbar from "./navbar"
import { useNavigate } from "react-router-dom"
import './App.css';

function ShareExperience() {

  const [company, setcompany] = useState("")
  const [content, setcontent] = useState("")
  const navigate = useNavigate()

  async function handlesubmit(e) {

    e.preventDefault()

    await fetch("http://localhost:3000/addexperience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ company, content })
    })

    alert("Experience shared!")
    navigate("/experiences")

  }

  return (

    <div>
      <Navbar />

      <div className="db">
        <div className="loginpg2">
          <h2 className="fhead">Share Experience</h2>
          <form onSubmit={handlesubmit} className="fcont">

            <input type="text" placeholder="Company Name" value={company} onChange={(e) => setcompany(e.target.value)} required className="finp" />

            <textarea placeholder="Share your experience" value={content} onChange={(e) => setcontent(e.target.value)} required className="taip"></textarea>

            <button type="submit" className="subbtn2">Share Experience</button>

          </form>

        </div>
      </div>

    </div>

  )

}

export default ShareExperience