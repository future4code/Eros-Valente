import React, {useEffect} from 'react';
import useToken from '../../hooks/useToken'
import { useHistory } from 'react-router-dom';


function ListTripsPage() {
    const history = useHistory()
    useToken()

    const goToTripDetailsPage = () => {
        history.push("/trips/details")
    }


  return (
    <div>
        <ul>
            <li onClick={goToTripDetailsPage}>viagem 1</li>
            <li onClick={goToTripDetailsPage}>viagem 2</li>
            <li onClick={goToTripDetailsPage}>viagem 3</li>
        </ul>
   
    </div>
  );
}

export default ListTripsPage;