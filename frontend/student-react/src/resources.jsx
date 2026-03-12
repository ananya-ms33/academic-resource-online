import {useEffect,useState} from "react"
import Navbar from "./navbar"
function Resources(){

const [resources,setresources]=useState([])

useEffect(()=>{

fetch("http://localhost:3000/resources")
.then(res=>res.json())
.then(data=>setresources(data))

},[])

return(

<div>
<Navbar/>
<h2>Resources</h2>

<a href="/submitresource">Submit Resource</a>

<br/><br/>

{resources.map((r)=>(

<div key={r._id} style={{border:"1px solid #ccc",padding:"10px",marginBottom:"10px"}}>

<p>{r.title}</p>

<a href={r.link} target="_blank">Open</a>

</div>

))}

</div>

)

}

export default Resources