import { useState } from "react"
import Navbar from "./navbar"
import Footer from "./Footer"
import './App.css';

function SubmitResource() {

  const [title, settitle] = useState("")
  const [link, setlink] = useState("")

  function handlesubmit(e) {
    e.preventDefault()

    fetch(`${import.meta.env.VITE_API_URL}/addresource`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title,
        link,
        username: localStorage.getItem('username')
      })

    })
      .then(() => {
        alert("Resource added successfully")
        settitle("")
        setlink("")
      })

  }

  return (
    <div>
      <Navbar />
      <div className="db">

        <h2 className="pgtitle">Submit Learning Resource</h2>

        <form onSubmit={handlesubmit} className="subform">
          <input type="text" placeholder="Resource Title (e.g. OS Notes)" value={title} onChange={(e) => settitle(e.target.value)} required />
          <br />
          <input type="text" placeholder="Resource Link (Drive/GitHub)" value={link} onChange={(e) => setlink(e.target.value)} required />
          <br />
          <button type="submit" className="subbtn">Add Resource</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}

export default SubmitResource