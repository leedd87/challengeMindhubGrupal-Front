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
/*optionsFilter*/
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




function Shoop() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    }

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
            <div className='contFilterCards'>
                <div className='filter'>
                    <div>
                        <h1>Filter Shoes</h1>
                        <h3>Price</h3>
                        <Box sx={{ minWidth: 120, padding: 1 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <h3>Color:</h3>
                        <div className='itemsFilterColor'>

                            <p>⚫⚪🟤</p>
                            <p>🔴🔵🟠</p>
                            <p>🟡🟢</p>

                        </div>
                    </div>

                </div>

                <div className='bodyShop mb-10'>

                    {
                        shoes?.map((shoes, index) => {

                            return (

                                <CardsShop key={index} shoes={shoes} />

                            )

                        })
                    }

                </div>
            </div>
            <div className='bg-red-400 h-20 flex items-center justify-center'>
                <h2 className=''>Footer</h2>
            </div>
        </>

    )
}

export default Shoop;


