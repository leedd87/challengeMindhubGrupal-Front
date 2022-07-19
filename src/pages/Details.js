import React from 'react';
import DetailCard from '../components/DetailCard';

const Details = () => {

    return (
        <div style={{
            // backgroundColor: '#f3ebde'
            // backgroundColor: '#f3ebde6b'
            // backgroundColor: '#FAF6E9'
            backgroundColor: '#FFFDF6'
        }}>
            {/* Header */}
            <div className='mb-10 flex justify-center items-center h-20 border border-red-400'>
                <p className='uppercase font-bold'>Details</p>
            </div>

            {/* contenedor principal */}
            <div className='mb-4'>

                <DetailCard />

            </div>

            {/* Comentarios */}
            <div className='mb-10 flex justify-center items-center h-20 border border-red-400'>
                <p className='uppercase font-bold'>comentarios</p>
            </div>

            {/* Footer */}
            <div className='flex justify-center items-center h-20 border border-red-400'>
                <p className='uppercase font-bold'>Footer</p>
            </div>

        </div>
    )
}

export default Details;