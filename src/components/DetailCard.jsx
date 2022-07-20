import React from 'react';

const DetailCard = () => {

    return (
        <>
            {/* contenedor de div imagenes y div botones de agregar carrito */}
            <div className='sm:container sm:mx-auto grid grid-cols-5 p-2 sm:p-10 gap-5 border border-red-400 bg-white rounded-md'
            
            >

                {/* card productos y descripcion */}
                <div className='col-span-5 md:col-span-3 flex justify-center items-center flex-col p-1'>

                    {/* card productos imagenes*/}
                    <div className='mb-4 grid grid-cols-4'>

                        <div className='col-span-4 lg:col-span-3'>
                            <img
                                src='https://img.hypeboost.com/products/new-balance-2002r-nightwatch-green/w900/img01.jpg'
                                alt='producto'
                            />
                        </div>

                        <div className='hidden lg:block lg:col-span-1'>
                            <img
                                src='https://img.hypeboost.com/products/new-balance-2002r-nightwatch-green/w900/img01.jpg'
                                alt='producto'
                            />
                            <img
                                src='https://img.hypeboost.com/products/new-balance-2002r-nightwatch-green/w900/img01.jpg'
                                alt='producto'
                            />
                            <img
                                src='https://img.hypeboost.com/products/new-balance-2002r-nightwatch-green/w900/img01.jpg'
                                alt='producto'
                            />
                        </div>

                    </div>

                    {/* Descripcion */}
                    <div className='w-full h-10 md:h-20 flex items-center justify-center text-sm md:text-base border border-red-400'>
                        <p className='uppercase font-bold'>Descripcion</p>
                    </div>

                </div>

                {/* Nombre precio talle y botones */}
                <div className='col-span-5 md:col-span-2 p-2 sm:p-5 flex justify-around flex-col border border-red-400'>

                    {/* Nombre precio y talle */}
                    <div className='text-base lg:text-lg text-center'>
                        <p className='mb-2 text-2xl font-bold'>Air Max 1</p>
                        <hr />
                        {/* <span>☆☆☆☆☆</span> */}
                        <p className='mb-2'>⭐⭐⭐⭐☆</p>
                        <p className='mb-4 text-lg font-bold'>u$s 150</p>
                        {/* <p className='mb-2'>10.5 US</p> */}

                        <select name="" id="" className='p-2 rounded-md w-2/5 sm:w-2/3 hover:cursor-pointer text-center'>
                            <option value="">10.5 US</option>
                            <option value="">11.5 US</option>
                            <option value="">9.5 US</option>
                            <option value="">12.5 US</option>
                        </select>
                    </div>

                    {/* Botones */}
                    <div className=' flex items-center justify-center flex-col gap-5 py-4 md:py-8 md:text-sm'>

                        <button class='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'>Agregar al carrito</button>

                        <button class='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'>Comprar ahora</button>


                    </div>
                </div>

            </div>
        </>
    )

}

export default DetailCard;