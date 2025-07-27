import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client.js'
import '../App.css'
import Black from "../assets/black.png"
import Blue from "../assets/blue.png"
import Brown from "../assets/brown.png"
import Cyan from "../assets/cyan.png"
import Green from "../assets/green.png"
import Lime from "../assets/lightgreen.png"
import Orange from "../assets/orange.png"
import Pink from "../assets/pink.png"
import Purple from "../assets/purple.png"
import Red from "../assets/red.png"
import White from "../assets/white.png"
import Yellow from "../assets/yellow.png"


const Card = (props) => {

    const colorImages = { Black, Blue, Brown, Cyan, Green, Lime, Orange, Pink, Purple, Red, White, Yellow };

    return (

        <div className="Card" style={{ backgroundColor: props.color }}>
            <div className='card-content'>
                <img src={colorImages[props.color]} alt={props.color} />
            <br />
            <div className='card-info'>
                <h3 className="name">{"Name of Crewmate: " + props.name}</h3>
                <h3 className="speed">{"Speed of Crewmate: " + props.speed}</h3>
                <h3 className="color">{"Color of Crewmate: " + props.color}</h3>
                <Link style={{padding:"5px", border:"solid", color:"white"}}to={'/edit/' + props.id}>Edit Crewmate</Link>
                                <Link style={{padding:"5px", border:"solid", color:"white"}}to={'/gallery/' + props.id}>More Info</Link>
                {/* <Link to={'edit/' + props.id}>Edit Crewmate</Link> */}
            </div>
                        </div>
            <br />

        </div>
    );
};

export default Card