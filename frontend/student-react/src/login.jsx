import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [loginorcreate, setloginorcreate] = useState(true)

    const navigate = useNavigate()

    async function handlelogin(e) {
        e.preventDefault()

        const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        const data = await res.json()

        if (data.success) {
            if (data.role === "student") {
                navigate("/resources")
            }
            if (data.role === "admin") {
                window.location.href = `${import.meta.env.VITE_ADMIN_URL}?auth=admin` //redirect with secret tag
            }
        } else {
            alert("invalid login")
        }
    }

    async function handleregister(e) {
        e.preventDefault()

        const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        const data = await res.json()

        if (data.success) {
            alert("Account successfully created! Login.")
            setloginorcreate(true) // set to login true
        } else {
            alert(data.message || "Error creating account.")
        }
    }

    return (
        <div className="login">
            <h2>{loginorcreate ? "Welcome Back" : "Create Account"}</h2>

            <form onSubmit={loginorcreate ? handlelogin : handleregister}>

                <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setusername(e.target.value)} required />
                <br />
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                <br />

                <button type="submit">{loginorcreate ? "Login" : "Sign Up"}</button>

            </form>

            <p className="msg1" onClick={() => setloginorcreate(!loginorcreate)}>
                {loginorcreate ? "Create account" : "Log in"}
            </p>

        </div>

    )
}

export default Login