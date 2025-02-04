import React from 'react'
import { GoogleMap, useJsApiLoader,LoadScript,Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px',
}

const center = {
    lat: 19.076090,
    lng: 72.877426,
}

const Map = ({containerStyle,center,zoom,onClick}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyB32VdUA3xjJvjWIXeDexlRJ3sFYS8UKoM',
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          onClick={onClick}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : (
        <></>
    )
}

export default Map