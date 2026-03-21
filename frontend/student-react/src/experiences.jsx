import { useEffect, useState } from "react"
import Navbar from "./navbar"
import Footer from "./Footer"
import './App.css'

function Experiences() {

  const [arr, setarr] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/experiences`)
      .then(res => res.json())
      .then(data => setarr(data))
  }, [])

  function deletepost(id) {
    if (window.confirm("Are you sure?")) {
      fetch(`${import.meta.env.VITE_API_URL}/deleteexperience/${id}`, { method: "DELETE" })
        .then(() => {
          setarr(arr.filter(e => e._id !== id))
        })
    }
  }

  return (
    <div>
      <Navbar />
      <div className="db">
        <div className="dbh">
          <h2>Placement Experiences</h2>
          <a href="/shareexperience" className="subbtn">Share Experience</a>
        </div>
        <div className="explist">
          {arr.map((e) => (
            <div className="dbexp" key={e._id}>
              <h3 className="compname">{e.company}</h3>
              <p className="expinfo">{e.content}</p>
              {e.username === localStorage.getItem('username') && (
                <button onClick={() => deletepost(e._id)} className="deletebtn"> Delete My Post </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Experiences