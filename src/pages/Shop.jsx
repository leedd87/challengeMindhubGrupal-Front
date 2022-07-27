import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
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
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Swiper, SwiperSlide } from "swiper/react";
import SuperF from "../components/SuperF";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styleHome.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Shoop() {
  const dispatch = useDispatch()
  const [inputSearch, setInputSearch] = useState("")
  const [brand, setBrand] = React.useState('');
  const [shoes, setShoes] = React.useState([]);
  const [ord, setOrd] = React.useState('');
  const [reload, setReload] = React.useState(false);
  const [filterShoes, setfilterShoes] = React.useState([]);

  
  // console.log("🚀 ~ file: Shop.jsx ~ line 22 ~ Shoop ~ filterShoes", filterShoes)
  useEffect(() => {
    //dispatch(shoesActions.filterShoes(inputSearch))
    getShoes()

    // eslint-disable-next-line
  }, [])


  useEffect(() => {
    if (shoes?.length > 0) {
      const filterRender = shoes?.filter(shoe =>
        shoe.name.toLowerCase().startsWith(inputSearch.trim().toLowerCase())
        || shoe.brand.name.toLowerCase().startsWith(inputSearch.trim().toLowerCase())
        // || shoe.type[0].name.toLowerCase().startsWith(inputSearch.trim().toLowerCase())
      )
      setfilterShoes(filterRender)
    }
    // eslint-disable-next-line
  }, [inputSearch])


  const getShoes = async (event) => {
    const res = await dispatch(shoesActions.getShoes())
    // console.log("🚀 ~ file: Shop.jsx ~ line 53 ~ handleChangeBrand ~ res", res)
    setShoes(res.data.response)
    setfilterShoes(res.data.response)
    setInputSearch("")
    setBrand("")
    setOrd("")
  }

  const order = (event) => {
    console.log(event)
    if (event.target.value === "op1") {
      shoes?.sort((a, b) => a.price - b.price);
      setOrd(event.target.value)
      setReload(!reload)
    }
    else if (event.target.value === "op2"){
      shoes?.sort((a, b) => b.price - a.price)
      setReload(!reload)
      setOrd(event.target.value)
    }
    
  }


  const handleChangeType = async (id) => {
    console.log(id);
    const res = await dispatch(shoesActions.getShoesByType(id))
    setShoes(res.response.response)
    setfilterShoes(res.response.response)
  }

  const handleChangeBrand = async (event) => {
    const res = await dispatch(shoesActions.getShoesByBrand(event.target.value))
    console.log("🚀 ~ file: Shop.jsx ~ line 53 ~ handleChangeBrand ~ res", res)
    setShoes(res.response.response)
    setfilterShoes(res.response.response)
    setBrand(event.target.value)
  }
  //   const search=(e)=>{
  //     dispatch(shoesActions.filterShoes(e.target.value))
  // }


  return (
    <>

      <div className='Header bg-gray-300 py-5'>

        <div className='filtersShop'>
          <Box>
            <button className='btnColors' onClick={() => handleChangeType("62d81e84db36588e63203de7")}>Urban</button>
          </Box>
          <Box>
            <button className='btnColors' onClick={() => handleChangeType("62d827534fca1cb3de1808b1")}>Sport</button>
          </Box>
          <Box>
            <button className='btnColors' onClick={() => handleChangeType("62d828964fca1cb3de1808bd")}>Fancy</button>
          </Box>

          <div>
            <input value={inputSearch} className='input' type="text" placeholder='Search Shoes' onChange={(e) => setInputSearch(e.target.value)} />
          </div>

          <Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={brand}
                onChange={handleChangeBrand}
                label="Brand"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
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

          <Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={ord}
                onChange={order}
                label="Brand"
              >
                <MenuItem value={"op1"}>menor a mayor</MenuItem>
                <MenuItem value={"op2"}>mayor a menor</MenuItem>
                
              </Select>
            </FormControl>
          </Box>

          <Box>
            <button className='btnColors' onClick={() => getShoes()} ><DeleteIcon/></button>
          </Box>

        </div>

      </div>

      {/* CONTENEDOR DE CARDS */}
      <div className='contFilterCards'>

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
              (shoes.map((shoes, index) => {
                return (
                  <CardsShop key={index} shoes={shoes} />
                )

              })) ?
                (<h1>holaaa</h1>) : null

          }

        </div>
      </div>

    </>

  )
}

export default Shoop;