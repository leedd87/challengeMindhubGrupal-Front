import React from 'react';

const Details = () => {
    return (
        <>
            <div className='flex justify-center items-center h-20 border border-red-500'>
                <p className='uppercase font-bold'>Details</p>
            </div>

            {/* contenedor principal */}
            <div>

                <div className='container mx-auto flex justify-evenly items-center'>

                    {/* card productos y descripcion */}
                    <div className='flex justify-center items-center flex-col'>
                        {/* card productos */}
                        <div>
                            <img 
                                src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                            />
                            <img 
                                src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                            />
                            <img 
                                src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                            />
                            <img 
                                src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                            />
                        </div>

                        {/* Descripcion */}
                        <div>

                        </div>
                    </div>

                    {/* Nombre precio talle */}
                    <div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center h-20 border border-red-500'>
                <p className='uppercase font-bold'>comentarios</p>
            </div>

            <div className='flex justify-center items-center h-20 border border-red-500'>
                <p className='uppercase font-bold'>Footer</p>
            </div>

        </>
    )
}

export default Details