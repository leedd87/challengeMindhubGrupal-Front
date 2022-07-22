import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import shoesActions from '../redux/actions/shoesActions';
import CardsShop from '../components/CardsShop';
import '../styles/style.css'
/*optionsFilter*/
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Shoop() {
  const dispatch = useDispatch()
  const [inputSearch, setInputSearch] = useState("")
  const [tipe, setTipe] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [shoes, setShoes] = React.useState([]);
  const [filterShoes, setfilterShoes] = React.useState([]);

  console.log("🚀 ~ file: Shop.jsx ~ line 22 ~ Shoop ~ filterShoes", filterShoes)
  useEffect(() => {
    //dispatch(shoesActions.filterShoes(inputSearch))
    getShoes()
    // eslint-disable-next-line
  }, [])
  let filterCard = useSelector(store => store.shoesReducer.filterShoes)

  useEffect(()=>{
    if (shoes?.length > 0) {
      const filterRender = shoes?.filter(shoe => shoe.name.toLowerCase().startsWith(inputSearch.trim().toLowerCase()))
      setfilterShoes(filterRender)
    }
    // eslint-disable-next-line
  },[inputSearch])

  
  const getShoes = async (event) => {
    const res = await dispatch(shoesActions.getShoes())
    console.log("🚀 ~ file: Shop.jsx ~ line 53 ~ handleChangeBrand ~ res", res)
    setShoes(res.data.response)
   
  }

  const handleChangeTipe = async (event) => {
    console.log(event.target.value);
    const res = await dispatch(shoesActions.getShoesByType(event.target.value))
    setShoes(res.response.response)
    setfilterShoes(res.response.response)
  }

  const handleChangeBrand = async (event) => {
    const res = await dispatch(shoesActions.getShoesByBrand(event.target.value))
    console.log("🚀 ~ file: Shop.jsx ~ line 53 ~ handleChangeBrand ~ res", res)
    setShoes(res.response.response)
    setfilterShoes(res.response.response)
  }
  //   const search=(e)=>{
  //     dispatch(shoesActions.filterShoes(e.target.value))
  // }
  

  return (
    <>
      <div className='Header mb-9 bg-gray-300 py-5'>

        <div className='filtersShop'>

          <div>
            <input className='input' type="text" placeholder='Search Shoes' onChange={(e) => setInputSearch(e.target.value)} />
          </div>

          <Box sx={{ minWidth: 120, padding: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipe}
                label="Tipe"
                onChange={handleChangeTipe}
              >
                <MenuItem value={"62d81e84db36588e63203de7"}>Urban</MenuItem>
                <MenuItem value={"62d827534fca1cb3de1808b1"}>Sport</MenuItem>
                <MenuItem value={"62d828964fca1cb3de1808bd"}>Fancy</MenuItem>
              </Select>
            </FormControl>
          </Box>


          <Box sx={{ minWidth: 120, padding: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brand}
                label="Brand"
                onChange={handleChangeBrand}
              >
                <MenuItem value={"62d836532f6e1f16ca3df337"}>Nike</MenuItem>
                <MenuItem value={"62d838004fca1cb3de1808cb"}>Adidas</MenuItem>
                <MenuItem value={"62d8392a4fca1cb3de1808cd"}>Jordan</MenuItem>
                <MenuItem value={"62d839d04fca1cb3de1808ce"}>New Balance</MenuItem>
                <MenuItem value={"62d83a704fca1cb3de1808cf"}>Asics</MenuItem>
                <MenuItem value={"62d83b334fca1cb3de1808d1"}>Balenciaga</MenuItem>
                <MenuItem value={"62d83c814fca1cb3de1808d6"}>Dior</MenuItem>
                <MenuItem value={"62d83e2d4fca1cb3de1808da"}>Louis Vuittom</MenuItem>

              </Select>
            </FormControl>
          </Box>

        </div>




      </div>

      {/* CONTENEDOR DE CARDS */}
      <div className='contFilterCards'>
        <div className='filter'>
          <div>
            <h1>Filter Shoes</h1>
            <h3>Price</h3>

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
            filterShoes.length > 0 ?
              (
                filterShoes?.map((shoes, index) => {
                  return (
                    <CardsShop key={index} shoes={shoes} />
                  )

                })
              ) :
              shoes.map((shoes, index) => {
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


