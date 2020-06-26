import React, { useEffect } from 'react';
import useToken from '../../hooks/useToken'
import { useHistory, useParams } from 'react-router-dom';



function TripDetailsPage() {
    const { tripId } = useParams()
    useToken()
    

    useEffect(() => {

    })

  return (
    <div>
        <div>viagem</div>
        <div>
            <ul>
                <li>candidato 1</li>
                <li>candidato 2</li>
            </ul>
        </div>
   
    </div>
  );
}

export default TripDetailsPage;