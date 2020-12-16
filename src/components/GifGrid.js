import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const {data: imagenes , loading} = useFetchGifs( categoria );

    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs( categoria )
    //         .then( setImages);
    // }, [ categoria ]);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    imagenes.map( img => (
                        <GifGridItem key={img.id} {...img }/>
                    ))
                }
            </div>
        </>
    )
}
