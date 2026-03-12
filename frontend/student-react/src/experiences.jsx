import {useEffect,useState} from "react"
import Navbar from "./navbar"
function Experiences(){

const [exp,setexp]=useState([])

useEffect(()=>{

fetch("http://localhost:3000/experiences")
.then(res=>res.json())
.then(data=>setexp(data))

},[])

return(

<div>
<Navbar/>
<h2>Placement Experiences</h2>

<a href="/shareexperience">Share Experience</a>

{exp.map((e)=>(

<div key={e._id}>

<p>{e.company}</p>

<p>{e.content}</p>

</div>

))}

</div>

)

}

export default Experiences