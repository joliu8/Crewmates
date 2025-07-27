import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'
import missing from '../assets/missing.gif'
import {Link} from "react-router-dom"

const GalleryPage = (props) => {

    const [allMates, setAllMates] = useState([])

    useEffect(() => {
        // setPosts(props.data)

        const fetchPosts = async () => {
            const { data } = await supabase
                .from('Data')
                .select()
                .order('created_at', { ascending: true })

            // set state of posts
            setAllMates(data)
            // console.log(data)

        }
        fetchPosts()
    }, [props])



    return (
        <div className="crewmates">
            <h1>Your Crewmate Gallery</h1>
            {
                allMates && allMates.length > 0 ?
                    [...allMates]
                        .sort((a, b) => b.id - a.id)
                        .map((post, index) =>
                            <Card
                                key={post.id}
                                id={post.id}
                                name={post.name}
                                speed={post.speed}
                                color={post.color}
                            />
                        ) : <><h2>You haven't made a crewmate yet!</h2>
                        <img src={missing}/>
                        <br/>
                        <br/>
                        <Link style={{padding:"5px", border:"solid", color:"white"}} to="/create">Click here to create a new crewmate!</Link>
                        </>
            }
        </div>
    )
}

export default GalleryPage