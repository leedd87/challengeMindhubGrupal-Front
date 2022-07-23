import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const DetailCard = ({ shoes }) => {

  console.log("👠 ~ file: DetailCard.jsx ~ line 4 ~ DetailCard ~ shoes", shoes)


  const addCarrito = ({ shoes }) => {

    const product = {
      image: shoes.image[0],
      name: shoes.name,
      price: shoes.price,
      id: shoes._id,
      cant: 1
    }

    dispatch(shopActions.addToShop(product))
    console.log('alerta agregaste un producto')

  }

  return (
    <>
      {
        shoes &&
        <div className='sm:container sm:mx-auto grid grid-cols-5 p-2 sm:p-10 gap-5 border bg-white rounded-md'

        >

          {/* card productos y descripcion */}
          <div className='col-span-5 md:col-span-3 flex justify-center items-center flex-col p-1'>


            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item> <img
                    src={shoes.image[0]}
                    alt='producto'
                  /></Item>
                </Grid>

                <Grid item xs={6}>
                  <Item><img
                    src={shoes.image[1]}
                    alt='producto'
                  /></Item>
                </Grid>

                <Grid item xs={6}>
                  <Item sx={{
                    "backgroundImage": `url(${shoes.image[2]})`,
                    "height": "100%",
                    "backgroundSize": "cover",
                    "backgroundPosition": "center",
                    "objectFit": "cover"
                  }}></Item>
                </Grid>

                <Grid item xs={12}>
                  <Item><img
                    src={shoes.image[0]}
                    alt='producto'
                  /></Item>
                </Grid>

              </Grid>
            </Box>
            {/* Descripcion */}


          </div>

          {/* Nombre precio talle y botones */}
          <div className='col-span-5 md:col-span-2 p-2 sm:p-5 flex justify-around flex-col border boxDetailsFixed'>

            {/* Nombre precio y talle */}
            <div className='boxFixed'>
              <div className=' text-base lg:text-lg text-center'>

                <h3 className='mb-2 text-2xl font-bold text-center h2Name'>{shoes.name}</h3>
                <p className='mb-2'>⭐⭐⭐⭐☆</p>
                <p className='mb-4 text-lg font-bold'>u$s {shoes.price}</p>
                <p className=' font-bold txtDescription'>{shoes.description}</p>



                {/* <p className='mb-2'>10.5 US</p> */}

                <select name="" id="" className='p-2 rounded-md w-2/5 sm:w-2/3 hover:cursor-pointer text-center'>
                  <option value="">10.5 US</option>
                  <option value="">11.5 US</option>
                  <option value="">9.5 US</option>
                  <option value="">12.5 US</option>
                </select>


                {/* Botones */}
                <div className=' flex items-center justify-center flex-col gap-5 py-4 md:py-8 md:text-sm'>

                  <button
                    className='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'
                      onClick={() => addCarrito(shoes)}
                  >Agregar al carrito</button>

                  <button className='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'>Comprar ahora</button>


                </div>
                <div className='metodosPago'>
                  <p>FREE SHIPPING OVER $18,999</p>
                  <p>PAY UP TO 6 INSTALLMENTS WITHOUT INTEREST!</p>
                  <p>FREE RETURNS NOT YOUR SIZE? YOU CAN RETURN IT WITHIN 60 DAYS</p>

                </div>

              </div>
            </div>

          </div>

        </div>


      }

    </>
  )

}

export default DetailCard;