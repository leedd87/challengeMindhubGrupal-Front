import React from 'react';
import DetailCard from '../components/DetailCard';

const Details = () => {
    return (
        <>
            {/* Header */}
            <div className='mb-10 flex justify-center items-center h-20'>
                <p className='uppercase font-bold'>Details</p>
            </div>

            {/* contenedor principal */}
            <div className='mb-4'>

                <DetailCard />

            </div>

            {/* Comentarios */}
            <div className='mb-10 flex justify-center items-center h-20'>
                <p className='uppercase font-bold'>comentarios</p>
            </div>

            {/* Footer */}
            <div className='flex justify-center items-center h-20'>
                <p className='uppercase font-bold'>Footer</p>
            </div>

        </>
    )
}

export default Details