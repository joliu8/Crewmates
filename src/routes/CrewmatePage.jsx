import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from '../client'
import meme1 from '../assets/meme1.png'
import meme2 from '../assets/meme2.jpg'

function CrewmatePage() {
    const { id } = useParams()
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

    return (
        <>
            <h1>Current Crewmate Info:</h1>
            <div className="current-info" style={{ backgroundColor: oldInfo[0] ? oldInfo[0].color : "nah" }}>
                {oldInfo && oldInfo.length > 0 ? (<>
                    <h2>Name: {oldInfo[0].name}</h2>
                    <h2>Speed: {oldInfo[0].speed}</h2>
                    <h2>Color: {oldInfo[0].color}</h2>
                </>) : (<p>oop</p>)
                }
            </div>
            <img style={{ width: "500px" }} src={meme1} />
            <img style={{ width: "500px" }} src={meme2} />
        </>
    )
}

export default CrewmatePage