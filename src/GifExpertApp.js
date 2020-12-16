import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['Haikyuu', 'Shingeki no Kyojin', 'Zankyou no Terror']
    const [categorias, setCategorias] = useState( ['Haikyuu']);

    // TAREA 70
    // <button onClick={handleAdd}>Agregar</button>
    // const handleAdd = () => {
    //     setCategorias( [...categorias, 'Naruto'] );
    //     // setCategorias( cats => [...cats, 'Naruto']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr></hr>
            <ol>
                {
                    categorias.map( categoria => 
                        <GifGrid key={categoria} categoria = {categoria} />
                    )
                }
            </ol>
        </>
    )
}
