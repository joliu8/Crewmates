import crewmates from "../assets/crewmate.jpg"
import {Link} from "react-router-dom"
function Homepage() {

  return (
    <>
    <h1>Welcome to the Crewmate Creator!</h1>
    <h3>Customize your very own crewmate!</h3>
    <img src={crewmates} style={{"width":"750px"}}/>
    <br/>
    <br/>
    <Link style={{padding:"5px", border:"solid", color:"white"}} to="/create">Click here to create a new crewmate!</Link>
    </>
  )
}

export default Homepage
