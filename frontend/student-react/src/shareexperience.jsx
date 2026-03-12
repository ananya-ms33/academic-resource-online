import {useState} from "react"
import Navbar from "./navbar"
function ShareExperience(){

const [company,setcompany]=useState("")
const [content,setcontent]=useState("")

const handlesubmit=async(e)=>{

e.preventDefault()

await fetch("http://localhost:3000/addexperience",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({company,content})

})

alert("experience submitted")

}

return(

<div>
<Navbar/>
<h2>Share Experience</h2>

<form onSubmit={handlesubmit}>

<input
placeholder="company"
value={company}
onChange={(e)=>setcompany(e.target.value)}
/>

<br/>

<textarea
placeholder="experience"
value={content}
onChange={(e)=>setcontent(e.target.value)}
/>

<br/>

<button>Submit</button>

</form>

</div>

)

}

export default ShareExperience