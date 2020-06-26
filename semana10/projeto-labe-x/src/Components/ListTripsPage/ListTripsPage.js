import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar'
import useToken from '../../hooks/useToken'
import { useHistory } from 'react-router-dom';
import axios from 'axios'



function ListTripsPage() {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    useToken()

    const goToTripDetailsPage = (tripId) => {
        history.push(`/trips/details/${tripId}`)
    }

    useEffect (() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eros-mello/trips")
        .then ((response) => {
            setTrips(response.data.trips)
        }).catch ((error) => {
            console.log (error)
        })
    }, [])

    return (
      <div>
          <NavBar/>
          <ul>
              <h2>Viagens</h2>
              {trips.map(trip => {
                  return (
                      <div>
                          <p>{trip.name} ({trip.planet})</p>
                          <button onClick={() => goToTripDetailsPage(trip.id)}>Detalhes da viagem</button>
                      </div>
                  )
              })}
          </ul>
     
      </div>
    );
}

export default ListTripsPage;