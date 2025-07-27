import dancing from "../assets/crewmatesdancing.gif"
import { useState } from "react"
import { supabase } from '../client'
import '../App.css'

function CreatePage() {

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Data')
            .insert({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .select();

        window.location = "/create";
    }

    const [crewmate, setCrewmate] = useState({ name: "", speed: 0, color: "" })

    const handleChange = (event) => {
        // console.log("reached")
        const { name, value } = event.target
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <>
            <h1>Create a New Crewmate!</h1>
            <div className="inputs">
                {/* <form onSubmit={handleSubmit}> */}
                <form>
                    <label>Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter the name of your crewmate"
                            style={{ "width": "200px", "margin": "10px" }}
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>Speed(mph):
                        <input
                            type="number"
                            name="speed"
                            placeholder="Enter the speed of your crewmate"
                            style={{ "width": "200px", "margin": "10px" }}
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>
                        Pick a color:
                        <select style={{ "margin": "10px" }} name="color" onChange={handleChange}>
                            <option value="" disabled selected>
                            </option>
                            <option value="Pink">Pink</option>
                            <option value="Red">Red</option>
                            <option value="Orange">Orange</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Lime">Lime</option>
                            <option value="Green">Green</option>
                            <option value="Cyan">Cyan</option>
                            <option value="Blue">Blue</option>
                            <option value="Purple">Purple</option>
                            <option value="Black">Black</option>
                            <option value="Brown">Brown</option>
                            <option value="White">White</option>
                        </select>
                    </label>
                    <br></br>
                    <input type="submit" onClick={createCrewmate}></input>
                </form>

                <img src={dancing} style={{ "width": "350px" }}></img>

            </div>
        </>
    )
}

export default CreatePage
