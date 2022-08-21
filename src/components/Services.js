import React from 'react'
import { useEffect, useState } from "react";
import "../Services.css"
const Services = () => {
    const [users, setUsers] = useState([])
    const API = "https://ajju-testapi.herokuapp.com/service";


    // to get data from api
    const getServices = () => {
        fetch("https://ajju-testapi.herokuapp.com/service")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    };

    // Api call
    useEffect(() => {
        getServices();
    }, []);

    return (
        <>
            <div className='section'>
                <div className="container grid grid-three-column">
                    {users.map((curElem) => {
                        const { id, title, image, description } = curElem;
                        return (
                            <div key={id} className="card">
                                <figure>
                                    <img className='photo' src={image} alt={title} />
                                </figure>
                                <div className="card-data">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                  
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}



export default Services
