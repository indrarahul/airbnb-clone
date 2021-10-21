import { useState } from 'react';
// import MapGL from 'react-map-gl';

function Map() {

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <div>


            {/* <ReactMapGL
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapStyle="mapbox://styles/indrarahul2018/ckue0fcnb1rmz18ohh055zdtf"
                mapboxApiAccessToken={process.env.mapbox_key}
            >

            </ReactMapGL> */}

        </div>
    )
}

export default Map
