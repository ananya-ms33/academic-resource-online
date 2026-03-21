import { useEffect, useState } from "react"
import Navbar from "./navbar"
import './App.css';

function Resources() {

  const [arr, setArr] = useState([])

  useEffect(() => {

    fetch("http://localhost:3000/resources")
      .then(res => res.json())
      .then(data => setArr(data))

  }, [])

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

              <a href={r.link} target="_blank" className="openbtn">
                Open resource
              </a>

            </div>

          ))}
        </div>

      </div>
    </div>

  )

}

export default Resources