/* 
 * MS VSC extension "es7 react..."
 * rfc ENTER 
 */
import React from 'react'

export default function Testscript() {
    // JS Bereich
    console.log('test 2');



    function initMap(){
        console.log('test initMap fn');

        let options = {
            zoom: 8,
            center: {
                lat: 52.5200,
                lng: 13.4050
            }
        }
        //let map = new google.maps.Map(document.getElementById('map'), options); 
    }
    initMap();
    return (
        <div>
        {/* HTML Bereich */}

          {/*   <script async
                src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
            </script> */}
           
            <script async
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLZvxK4-g2VMzk17_YHfNfWYhP2gJ7oXI&callback=initMap">
            </script>
        </div>
    )
}
