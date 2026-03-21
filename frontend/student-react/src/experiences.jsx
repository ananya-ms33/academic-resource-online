import { useEffect, useState } from "react"
import Navbar from "./navbar"
import './App.css';

function Experiences() {

  const [arr, setArr] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/experiences`)
      .then(res => res.json())
      .then(data => setArr(data))
  }, [])

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
            </div>

          ))}
        </div>

      </div>
    </div>

  )
}

export default Experiences