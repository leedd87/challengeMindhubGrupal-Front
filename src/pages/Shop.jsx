import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import shoesActions from '../redux/actions/shoesActions'
import CardsShop from '../components/CardsShop';
import '../styles/style.css'
/*acordeon*/
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

/*optionsFilter*/
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Shoop() {
    const dispatch = useDispatch()


    const [age, setAge] = React.useState('');


    useEffect(() => {
        dispatch(shoesActions.getShoes())
        // eslint-disable-next-line
    }, [])

    const shoes = useSelector(store => store.shoesReducer.shoes);
    console.log("🚀 ~ file: Shop.jsx ~ line 40 ~ Shoop ~ shoes", shoes)


    const handleChange = (event) => {
        setAge(event.target.value);
    }



    return (
        <>
            <div className='Header mb-9 bg-gray-300 py-5'>


                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                > <div className='filtersShop'>
                        <div className='filterGender'>
                            <AccordionDetails>
                                Gender:
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Man</MenuItem>
                                    <MenuItem value={1}>Woman</MenuItem>
                                    <MenuItem value={2}>Kids</MenuItem>
                                    <MenuItem value={3}>Unisex</MenuItem>
                                </Select>
                            </AccordionDetails>
                        </div>

                        <div className='filterMark'>
                            <AccordionDetails>
                                Marks:
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Nike</MenuItem>
                                    <MenuItem value={1}>Adidas</MenuItem>
                                    <MenuItem value={2}>New Balance</MenuItem>

                                </Select>


                            </AccordionDetails>
                        </div>

                    </div>

                </AccordionSummary>

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

        </>

    )
}

export default Shoop;


