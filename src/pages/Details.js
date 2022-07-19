import React from 'react';

const Details = () => {
    return (
        <>
            <div className='mb-10 flex justify-center items-center h-20 border border-red-500'>
                <p className='uppercase font-bold'>Details</p>
            </div>

            {/* contenedor principal */}
            <div className='mb-10 border border-red-400'>

                <div className='container mx-auto grid grid-cols-5 p-10 gap-5'>

                    {/* card productos y descripcion */}
                    <div className='col-span-3 border border-red-400 flex justify-center items-center flex-col p-1'>

                        {/* card productos imagenes*/}
                        <div className='mb-4 grid grid-cols-4'>

                            <div className='col-span-3'>
                                <img
                                    src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                                />
                            </div>

                            <div className='col-span-1'>
                                <img
                                className=''
                                    src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                                />
                                <img
                                    className=''
                                    src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                                />
                                <img
                                className=''
                                    src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                                />
                            </div>

                        </div>

                        {/* Descripcion */}
                        <div className='border border-red-400 w-full h-20 flex items-center justify-center'>
                            <p className='font-bold uppercase'>Descripcion</p>
                        </div>

                    </div>

                    {/* Nombre precio talle y botones */}
                    <div className='col-span-2 border border-red-400 p-5 flex justify-around flex-col'>

                        {/* Nombre precio y talle */}
                        <div className='font-bold text-xl border border-red-400'>
                            <p className='mb-2'>Nombre</p>
                            <p className='mb-2'>Precio</p>
                            <p className='mb-2'>Talle</p>
                        </div>

                        {/* Botones */}
                        <div className='border border-red-400 flex items-center justify-center flex-col gap-10'>

                            <button class='bg-indigo-500 text-white font-bold px-5 py-2 rounded-md hover:bg-indigo-700 shadow-md w-1/2'>Agregar al carrito</button>

                            <button class='bg-indigo-500 text-white font-bold px-5 py-2 rounded-md hover:bg-indigo-700 shadow-md w-1/2'>Comprar ahora</button>


                        </div>
                    </div>

                </div>

            </div>

            <div className='mb-10 flex justify-center items-center h-20 border border-red-500'>
                <p className='uppercase font-bold'>comentarios</p>
            </div>

            <div className='flex justify-center items-center h-20 border border-red-500'>
                <p className='uppercase font-bold'>Footer</p>
            </div>

        </>
    )
}

export default Details