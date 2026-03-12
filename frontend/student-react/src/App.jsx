import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Login from "./login"
import Resources from "./resources"
import SubmitResource from "./submitresource"
import Experiences from "./experiences"
import ShareExperience from "./shareexperience"

function App(){

return(

<Router>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/resources" element={<Resources/>}/>
<Route path="/submitresource" element={<SubmitResource/>}/>
<Route path="/experiences" element={<Experiences/>}/>
<Route path="/shareexperience" element={<ShareExperience/>}/>

</Routes>

</Router>

)

}

export default App