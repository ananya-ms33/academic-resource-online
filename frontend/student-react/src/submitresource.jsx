import {useState} from "react"
import Navbar from "./navbar"
function SubmitResource(){

const [title,settitle]=useState("")
const [link,setlink]=useState("")

const handlesubmit=async(e)=>{

e.preventDefault()

await fetch("http://localhost:3000/addresource",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({title,link})

})

alert("submitted")

}

return(

<div>
<Navbar/>
<h2>Submit Resource</h2>

<form onSubmit={handlesubmit}>

<input
placeholder="title"
value={title}
onChange={(e)=>settitle(e.target.value)}
/>

<br/>

<input
placeholder="link"
value={link}
onChange={(e)=>setlink(e.target.value)}
/>

<br/>

<button>Submit</button>

</form>

</div>

)

}

export default SubmitResource