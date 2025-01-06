import React from 'react'
import { AdvancedMarker, APIProvider, Map, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { contact } from '@/data/data';


const MapComponent = ({className} : {
    className?: string
}) => {
    const position = { lat: 54.5756825, lng: -1.1901155 };
    const [open, setOpen] = React.useState(true);
    const [markerRef, marker] = useAdvancedMarkerRef();
    // 54.5756825,-1.1901155
    // 54.5754285,-1.1909573
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <div className={className}>

                <Map defaultCenter={position} defaultZoom={17} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID} renderingType='VECTOR' tilt={30} fullscreenControl={false} mapTypeControl={false}>
                    <AdvancedMarker position={position} ref={markerRef} onClick={() => setOpen(true)} />

                    {open &&
                        <InfoWindow anchor={marker} onClose={() => setOpen(false)} minWidth={250} headerContent={<div className="flex items-center justify-center space-x-3">
                            <img src="/content/logo-small.png" alt="Music School Logo" className="w-10 h-10  object-contain object-center transform scale-70" />
                            <h2 className="text-lg font-semibold text-gray-800">Middlesbrough Music Academy</h2>
                        </div>} >


                            {/* <h1 className='text-xl'>Info Window</h1> */}
                            {/* <div className='text-[rgb(51, 51, 51)] text-[13px] font-normal'>

                                <p>Come and visit us at:</p>
                                <dl>
                                    <dd>
                                        Suite 5b, South Bank<br />
                                        Cargo Fleet Business Centre<br />
                                        Cargo Fleet Offices, Middlesbrough Rd<br />
                                        Cargo Fleet, Middlesbrough TS6 6XH
                                    </dd>
                                </dl>
                            </div> */}


                            <div className="p-4 max-w-sm bg-white shadow-lg rounded-lg">
                                {/* <div className="flex items-center space-x-3">
                                    <img src="/content/logo-small.png" alt="Music School Logo" className="w-10 h-10 rounded-full" />
                                    <h2 className="text-lg font-semibold text-gray-800">Middlesbrough Music Academy</h2>
                                </div> */}
                                <p className="mt-2 text-sm text-gray-600">
                                    {/* Inspiring the next generation of musicians with expert tuition and world-class facilities. */}
                                    Come join us at our school and explore the world of music!
                                </p>
                                <div className="carousel mt-3">
                                    <img src="/content/school/window.jpg" alt="Studio 1" className="w-full h-auto rounded-md max-h-40 object-cover object-center" />
                                </div>
                                <div className="mt-3 text-sm text-gray-700">
                                    {/* <div className="flex flex-row justify-start items-start"> */}
                                    <div className="grid grid-cols-[auto,1fr] ">

                                        <strong>Address:{' '}</strong> <a className='text-blue-600 underline border-none' href="https://goo.gl/maps/example"><p>Cargo Fleet Buisness Centre, Middlesbrough Rd, Middlesbrough, TS6 6XH</p></a>
                                        <p><strong>Phone:</strong></p><p> <a href={`tel:${contact.phone}`} className="text-blue-600 underline">{contact.phonePretty}</a></p>
                                        <p><strong>Email:</strong> </p><p> <a href={`mailto:${contact.email}`} className="text-blue-600 underline">{contact.email}</a></p>
                                        <p><strong>Hours:</strong></p><p>  Mon-Fri 9:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 mt-4 justify-around">
                                    <a href="https://www.google.com/maps/dir/?api=1&destination=middlesbrough+music+academy,+suite+5b,+cargo+fleet+business+centre,+middlesbrough,+ts6+6xh" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex felx-row items-center justify-center">
                                        <span>Get Directions</span>
                                    </a>
                                    
                                    <a href={`tel:${contact.phone}`} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 text-center min-w-24 flex flex-row justify-around items-center">
                                    <PhoneIcon aria-hidden="true" className="h-5 w-4 text-gray-400" />
                                        <span>Call Now</span>
                                    </a>
                                </div>
                            </div>



                        </InfoWindow>
                    }
                </Map>
            </div>

        </APIProvider>
    )
}

export default MapComponent