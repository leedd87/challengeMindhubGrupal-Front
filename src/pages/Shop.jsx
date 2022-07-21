import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import shoesActions from '../redux/actions/shoesActions'
import CardsShop from '../components/CardsShop';
/*acordeon*/
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"

          >
            <Typography >Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Gender:
            <select name="gender" id="">
              
            </select>
            
          </AccordionDetails>
        </Accordion>
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


