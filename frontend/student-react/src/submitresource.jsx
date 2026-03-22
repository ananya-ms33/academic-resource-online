//submitresource.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./Footer"
import './App.css'

function SubmitResource() {

    const [title, settitle] = useState("")
    const [link, setlink] = useState("")
    const navigate = useNavigate()

    function add() {
        const username = localStorage.getItem('username')
        fetch(`${import.meta.env.VITE_API_URL}/addresource`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, link, username })
        }).then(() => navigate("/resources"))
    }

    return (
        <div>
            <Navbar />
            <div className="db">
                <div className="loginpg1">
                    <h2>Submit Learning Resource</h2>
                    <div className="fcont">
                        <div className="finp">
                            <input placeholder="Resource Title Like 'SEM 4 FST'" onChange={(e) => settitle(e.target.value)} />
                        </div>
                        <div className="finp">
                            <input placeholder="Resource Link - Can be One Drive, Google Drive, etc." onChange={(e) => setlink(e.target.value)} />
                        </div>
                        <button className="subbtn" style={{ width: '100%' }} onClick={add}> Add Resource </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SubmitResource