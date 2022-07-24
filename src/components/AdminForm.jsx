import '../../src/styles/style.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


export default function AdminForm() {


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target)

        const data = {
            name: e.target[0].value,
            brand: e.target[1].value,
            colorway: e.target[2].value,
            price: e.target[3].value,
            image: [e.target[4].value, e.target[5].value, e.target[6].value, e.target[7].value],
            description: e.target[8].value,
            stock: e.target[9].value,
            type: e.target[10].value,
        }

        console.log(data)


        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
        e.target[5].value = ''
        e.target[6].value = ''
        e.target[7].value = ''
        e.target[8].value = ''
        e.target[9].value = ''
        e.target[10].value = ''
    }

    return (
        <div className="adminForm">

            <div className='admin-ctn'>
                <div className='title-form'>Add Shoes</div>
                <form
                    className='form-admin'
                    onSubmit={handleSubmit}
                >
                    <div className='admin-details'>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Name' required />
                        </div>

                        {/* BRAND */}
                        <select name="type" id="" required className='p-2 w-4/5 rounded-md'>
                            <option value=""></option>
                            <option value="62d836532f6e1f16ca3df337">Nike</option>
                            <option value="62d838004fca1cb3de1808cb">Adidas</option>
                            <option value="62d8392a4fca1cb3de1808cd">Jordan</option>
                            <option value="62d839d04fca1cb3de1808ce">New Balance</option>
                            <option value="62d83a704fca1cb3de1808cf">Asics</option>
                            <option value="62d83b334fca1cb3de1808d1">Balenciaga</option>
                            <option value="62d83c814fca1cb3de1808d6">Dior</option>
                            <option value="62d83e2d4fca1cb3de1808da">Louis Vuittom</option>
                        </select>
                        {/* BRAND */}
                        {/* <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Brand' required />
                        </div> */}



                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Colorway' required />
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='number' placeholder='Price' required />
                        </div>


                        {/* IMAGENES */}
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='url img' required />
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='url img' required />
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='url img' required />
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='url img' />
                        </div>
                        {/* IMAGENES */}


                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Description' required />
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='number' placeholder='Stock' required />
                        </div>

                        <select name="type" id="" required className='p-2 w-4/5 rounded-md'>
                            <option value=""></option>
                            <option value="62d81e84db36588e63203de7">urban</option>
                            <option value="62d827534fca1cb3de1808b1">sport</option>
                            <option value="62d828964fca1cb3de1808bd">fancy</option>
                        </select>

                        {/* <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            // value={type}
                            // onChange={order}
                            label="Brand"
                        >
                            <MenuItem value={"62d81e84db36588e63203de7"}>urban</MenuItem>
                            <MenuItem value={"62d827534fca1cb3de1808b1"}>sport</MenuItem>
                            <MenuItem value={"62d828964fca1cb3de1808bd"}>fancy</MenuItem>

                        </Select> */}


                        {/* <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Type'/>
                        </div> */}
                    </div>
                    <div className='button-ctn'>
                        <input className='btn-admin' type='submit' value='send' />
                    </div>
                </form>
            </div>
        </div>
    )
}