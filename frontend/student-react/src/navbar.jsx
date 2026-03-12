import {Link} from "react-router-dom"

function Navbar(){

return(

<div style={{marginBottom:"20px"}}>

<Link to="/resources">Resources</Link> | {" "}
<Link to="/submitresource">Submit Resource</Link> | {" "}
<Link to="/experiences">Experiences</Link> | {" "}
<Link to="/shareexperience">Share Experience</Link>

</div>

)

}

export default Navbar