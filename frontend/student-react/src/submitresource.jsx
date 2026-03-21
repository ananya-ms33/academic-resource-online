import { useState } from "react"
import Navbar from "./navbar"
import { useNavigate } from "react-router-dom"
import './App.css';

function SubmitResource() {

  const [title, settitle] = useState("")
  const [link, setlink] = useState("")
  const navigate = useNavigate()

  async function handlesubmit(e) {

    e.preventDefault()

    const res = await fetch(`${import.meta.env.VITE_API_URL}/addresource`, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ 
        title, 
        link,
        username: localStorage.getItem('username') // Tell the backend who I am
      })

    })

    alert("Resource submitted successfully!")
    navigate("/resources")

  }

  return (

    <div>
      <Navbar />

      <div className="db">
        <div className="loginpg1">

          <h2 className="fhead">Submit Resource</h2>


          <form onSubmit={handlesubmit} className="fcont">

            <input type="text" placeholder="Resource Title" value={title} onChange={(e) => settitle(e.target.value)} required />

            <input type="text" placeholder="Resource Link (URL)" value={link} onChange={(e) => setlink(e.target.value)} required />

            <button type="submit" className="subbtn2">Submit Resource</button>

          </form>

        </div>
      </div>

    </div>

  )

}

export default SubmitResource