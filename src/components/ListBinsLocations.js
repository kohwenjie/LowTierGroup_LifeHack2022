import divider from 'assets/theme/components/divider';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { array } from 'prop-types';

export default function ListBins() {
    
    const [locationView, binsLocation] = useState([])

    useEffect(() => {
        getBinsLocation()
    }, []);

    useEffect(() => {
        console.log(locationView)
    }, [locationView]);

    function getBinsLocation() {
        const binsLocationCollection = collection(db, 'BinsLocation');
        getDocs(binsLocationCollection)
            .then(response => {
                const coords = response.docs.map(doc => (
                    {
                        data: doc.data(), 
                        id: doc.id
                    })
                );

                binsLocation(coords);
            })
            .catch(error => console.log(error.message))
    }

    function getGeoDesicDistance() {
        
    }

    return (
        <div>
            <h4>
                ListBins
                <ul>
                    {locationView.map(loc => (
                        <li key={loc.id}>{ [loc.id, ": [", loc.data.Location._lat, ", ", loc.data.Location._long, "]"]}</li>
                    ))}
                </ul>
            </h4>
        </div>
    )
}