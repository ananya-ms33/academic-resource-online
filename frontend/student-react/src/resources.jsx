import { useEffect, useState } from "react"
import Navbar from "./navbar"
import './App.css';

function Resources() {

  const [arr, setArr] = useState([])

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/resources`)
      .then(res => res.json())
      .then(data => setArr(data))

  }, [])

  function deletepost(id) {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      fetch(`${import.meta.env.VITE_API_URL}/deleteresource/${id}`, { method: "DELETE" })
        .then(() => {
          setArr(arr.filter(r => r._id !== id)); // Removes from screen immediately (doesnt access db again to fetch)
        });
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
              <div>
                <h3 className="restitle">{r.title}</h3>
                <a href={r.link} target="_blank" className="openbtn">Open resource</a>
              </div>
              {/* delte option shown only to people who posted that */}
              {r.username === localStorage.getItem('username') && (
                <button
                  onClick={() => deletepost(r._id)}
                  className="logoutbtn"
                  style={{ marginTop: '15px', color: '#ef4444', borderColor: '#ef4444' }}
                >
                  Delete My Post
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Resources