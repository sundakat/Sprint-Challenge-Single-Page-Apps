import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "../components/LocationCard";

export default function LocationsList() {


    const [location, setLocation] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/").then(res => {
            console.log(res.data.results);
            setLocation(res.data.results);
        }).catch(e => console.log(e));
    }, []);

    return (
        <section>
            {location.map(location =>
                <LocationCard
                    id={location.id}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents}
                />
            )
            }
        </section>
    );
}
