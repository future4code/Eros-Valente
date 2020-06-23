import React from 'react';
import { useHistory } from 'react-router-dom';


function ListTripsPage() {
    const history = useHistory()

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