import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/cardShop.css';
import shoesActions from '../redux/actions/shoesActions';


const CardsShop = ({ shoes }) => {

  const dispatch = useDispatch()

  const handleIDshoe = async (id) => {
    // console.log(id)
    const res = await dispatch(shoesActions.getOneShoe(id))
    console.log(res.data.response)

  }

  return (

    <div id="container">

      <article id="card">

        <header>
          <img
            id="nikeLogo" src="https://wallpapercave.com/wp/CgjGnw0.jpg" alt="logo" />
          <span id="nike" class="subhead">puma</span>
        </header>

        <div
          style={{
            backgroundImage: `url('${shoes.image[0]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: 300,
            height: 200,
            objectFit: 'cover'
          }}
        >
        </div>

        <section>

          <div id="location">
            <span class="faded-name">{shoes.name}</span>
            <span class="faded">U$S {shoes.price}</span>
          </div>

          <div className='flex items-center justify-around mb-5'>

            <button className='bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 px-7 py-2'>buy</button>
            <button
              onClick={() => handleIDshoe(shoes._id)}
              className='bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 px-7 py-2'>+ info</button>

          </div>

        </section>

      </article>

    </div>
  )
}

export default CardsShop