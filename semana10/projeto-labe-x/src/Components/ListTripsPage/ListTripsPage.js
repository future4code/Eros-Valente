import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar'
import useToken from '../../hooks/useToken'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom';
import { WrappAll, TripsList } from './styles';


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eros-mello"

function ListTripsPage() {
    const history = useHistory()
    useToken()
    
    const trips = useRequestData(`${baseUrl}/trips`,"", []).trips
    console.log(trips)

    const goToTripDetailsPage = (tripId) => {
        history.push(`/trips/details/${tripId}`)
    }

    return (
        <div>
            <NavBar/>
            <WrappAll>
            <TripsList>
                <h2>VIAGENS</h2>
                {trips ? (trips.map(trip => {
                    return ( 
                        <div>
                            <p>{trip.name} ({trip.planet})</p>
                            <button onClick={() => goToTripDetailsPage(trip.id)}>Detalhes da viagem</button>
                        </div>
                    )
                    })) : <div>carregando...</div>
                }
            </TripsList>
            </WrappAll>
        </div>
    );
}

export default ListTripsPage;