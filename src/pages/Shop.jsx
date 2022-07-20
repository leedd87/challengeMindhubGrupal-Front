import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import shoesActions from '../redux/actions/shoesActions'

import CardsShop from '../components/CardsShop';


function Shoop() {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(shoesActions.getShoes())

        // eslint-disable-next-line
    }, [])

    const shoes = useSelector(store => store.shoesReducer.shoes);

    return (

        <>
            <div className='Header mb-10 bg-gray-300 py-5'>
                <h2>NavBar</h2>
                <h1>Shop</h1>

                <div className='botonesShop'>
                    <button>Deplegable1</button>
                    <button>Desplegable2</button>
                    <button>Desplegable3</button>
                    <button>Desplegable4</button>
                </div>
            </div>

            {/* CONTENEDOR DE CARDS */}
            <div className='bodyShop mb-10'>

                {
                    shoes?.map((shoes, index) => {

                        return (

                            <CardsShop key={index} shoes={shoes} />

                        )

                    })
                }

            </div>

            <div className='bg-red-400 h-20 flex items-center justify-center'>
                <h2 className=''>Footer</h2>
            </div>
        </>

    )
}

export default Shoop;
