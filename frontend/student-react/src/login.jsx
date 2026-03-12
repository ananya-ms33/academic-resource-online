import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login(){

const [username,setusername]=useState("")
const [password,setpassword]=useState("")

const navigate=useNavigate()

const handlelogin=async(e)=>{

e.preventDefault()

const res = await fetch("http://localhost:3000/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,password})

})

const data = await res.json()

if(data.success){

if(data.role==="student"){
navigate("/resources")
}

if(data.role==="admin"){
window.location.href="http://localhost:4200"
}

}

else{

alert("invalid login")

}

}

return(

<div>

<h2>Login</h2>

<form onSubmit={handlelogin}>

<input
placeholder="username"
value={username}
onChange={(e)=>setusername(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="password"
value={password}
onChange={(e)=>setpassword(e.target.value)}
/>

<br/>

<button>Login</button>

</form>

</div>

)

}

export default Login