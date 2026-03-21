import { useEffect, useState } from "react"
import Navbar from "./navbar"
import Footer from "./Footer"
import './App.css'

function Resources() {

  const [arr, setarr] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/resources`)
      .then(res => res.json())
      .then(data => setarr(data))
  }, [])

  function deletepost(id) {
    if (window.confirm("Are you sure?")) {
      fetch(`${import.meta.env.VITE_API_URL}/deleteresource/${id}`, { method: "DELETE" })
        .then(() => {
          setarr(arr.filter(r => r._id !== id))
        })
    }
  }

  return (
    <div>
      <Navbar />
      <div className="db">
        <div className="dbh">
          <h2>Learning Resources</h2>
          <a href="/submitresource" className="subbtn">Submit Resource</a>
        </div>
        <div className="res">
          {arr.map((r) => (
            <div className="dbres" key={r._id}>
              <h3 className="restitle">{r.title}</h3>
              <a href={r.link} target="_blank" className="openbtn">Open resource</a>
              {r.username === localStorage.getItem('username') && (
                <button onClick={() => deletepost(r._id)} className="deletebtn"> Delete My Post </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resources