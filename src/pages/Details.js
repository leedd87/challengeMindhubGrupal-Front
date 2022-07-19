import React from 'react';

const Details = () => {
    return (
        <>
            {/* Header */}
            <div className='mb-10 flex justify-center items-center h-20'>
                <p className='uppercase font-bold'>Details</p>
            </div>

            {/* contenedor principal */}
            <div className='mb-4'>

                {/* contenedor de div imagenes y div botones de agregar carrito */}
                <div className='sm:container sm:mx-auto grid grid-cols-5 p-2 sm:p-10 gap-5 border border-red-400'>

                    {/* card productos y descripcion */}
                    <div className='col-span-5 md:col-span-3 flex justify-center items-center flex-col p-1'>

                        {/* card productos imagenes*/}
                        <div className='mb-4 grid grid-cols-4'>

                            <div className='col-span-4 lg:col-span-3'>
                                <img
                                    src='https://wave.fr/images/1916/08/nike-air-max-1-wmns-triple-white.jpg'
                                />
                            </div>

                            <div className='hidden lg:block lg:col-span-1'>
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
                        <div className='w-full h-10 md:h-20 flex items-center justify-center text-sm md:text-base border border-red-400'>
                            <p className='font-bold uppercase'>Descripcion</p>
                        </div>

                    </div>

                    {/* Nombre precio talle y botones */}
                    <div className='col-span-5 md:col-span-2 p-2 sm:p-5 flex justify-around flex-col border border-red-400'>

                        {/* Nombre precio y talle */}
                        <div className='font-bold text-base lg:text-lg text-center border border-red-400'>
                            <p className='mb-2'>Air Max 1</p>
                            <hr />
                            <span>☆☆☆☆☆</span>
                            <p className='mb-2'>u$s 150</p>
                            <p className='mb-2'>10 US</p>
                        </div>

                        {/* Botones */}
                        <div className=' flex items-center justify-center flex-col gap-5 py-4 md:py-8 md:text-sm'>

                            <button class='bg-indigo-500 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/3'>Agregar al carrito</button>

                            <button class='bg-indigo-500 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/3'>Comprar ahora</button>


                        </div>
                    </div>

                </div>

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