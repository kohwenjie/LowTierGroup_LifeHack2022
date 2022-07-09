import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function ListBins() {
    
    const [locationView, binsLocation] = useState([])

    useEffect(() => {
        getBinsLocation()
        nearestBins(1.2863437, 103.8319802, 2000)
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

    function nearestBins(userLat, userLon, distanceX) {
        var selectedBins = [];
        locationView.map(loc => {
            var binLat = loc.data.Location._lat;
            var binLon = loc.data.Location._long;
            var distance = getGeodesicDistance(userLat, userLon, binLat, binLon);
            if (distance <= distanceX) {
                console.log([binLat, binLon])
                selectedBins.push([binLat, binLon]);
            }
        })
        return selectedBins;
    }

    function getGeodesicDistance(userLat, userLon, binsLat, binsLon) {
        var radius = function(x) {
            return x * Math.PI / 180;
        };
          
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = radius(userLat - binsLat);
        var dLong = radius(userLon - binsLon);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(radius(userLat)) * Math.cos(radius(binsLat)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in metres
    }

    return (
        <div>
            <h4>
                List of bins location:
                <ul>
                    {locationView.map(loc => (
                        <li key={loc.id}>{ [loc.id, ": [", loc.data.Location._lat, ", ", loc.data.Location._long, "]"]}</li>
                    ))}
                </ul>
            </h4>
        </div>
    )
}