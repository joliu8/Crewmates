import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { supabase } from '../client'
import rainbow from "../assets/rainbow.gif"


const EditPage = ({ data }) => {

    const { id } = useParams()
    const [crewmate, setCrewmate] = useState({ id: null, name: "", speed: 0, color: "" })
    const [oldInfo, setOldInfo] = useState([])

    useEffect(() => {
        const getInfo = async () => {

            const { data, error } = await supabase
                .from('Data')
                .select('name, speed, color')
                .eq('id', id)


            if (error) {
                console.error('Error fetching data:', error.message);
                return null;
            }

            setOldInfo(data)
            console.log(data)
            // window.location = "/gallery";

        };
        getInfo();
    }, [])

    const updateCrewmate = async (event) => {
        event.preventDefault()
        await supabase
            .from('Data')
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .eq('id', id)
        window.location = "/gallery";


    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Data')
            .delete()
            .eq('id', id)
        window.location = "/gallery";


    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <div>
            <div style={{display:'flex', alignContent:'center'}}>
            <h1>Edit/Delete Crewmate</h1>
            <img style={{width:"120px"}} src={rainbow} />
            </div>

            <div className="current-info" style={{ backgroundColor: oldInfo[0] ? oldInfo[0].color : "nah" }}>
                <h3>Current Crewmate Info:</h3>
                {oldInfo && oldInfo.length > 0 ? (<>
                    <p>Name: {oldInfo[0].name}</p>
                    <p>Speed: {oldInfo[0].speed}</p>
                    <p>Color: {oldInfo[0].color}</p>
                </>) : (<p>oop</p>)
                }
            </div>
            <form>
                <label>New Name:
                    <input
                        type="text"
                        name="name"
                        placeholder={oldInfo[0] ? oldInfo[0].name : "nah"}
                        style={{ "width": "400px", "margin": "10px" }}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>New Speed(mph):
                    <input
                        type="number"
                        name="speed"
                        placeholder={oldInfo[0] ? oldInfo[0].speed : "nah"}
                        style={{ "width": "400px", "margin": "10px" }}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>
                    New Color:
                    <select style={{ "margin": "10px", width:"200px" }} name="color" onChange={handleChange}>
                        <option value="" disabled selected>
                            {oldInfo[0] ? oldInfo[0].color : "nah"}
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
                <input type="submit" onClick={updateCrewmate}></input>
                <input className="delete-button" type="submit" value="Delete" onClick={deleteCrewmate} />

            </form>

        </div >
    )
}

export default EditPage