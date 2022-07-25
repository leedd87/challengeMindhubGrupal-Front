import '../../src/styles/style.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import adminActions from '../redux/actions/adminActions';
import shoesActions from '../redux/actions/shoesActions';

export default function AdminForm() {

    const [shoes, setShoes] = useState([])
    const [reload, setReload] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        // getShoes()
        dispatch(shoesActions.getShoes())
            .then(res => setShoes(res.data.response))

    }, [reload])

    // AGREGAR SHOE
    const handleSubmit = async (e) => {

        e.preventDefault()

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

        const res = await dispatch(adminActions.addShoe(data))
        // console.log(res.data.message)

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

        setReload(!reload)
    }

    // REMOVE SHOE
    const handleSubmitDelete = async (e) => {
        e.preventDefault()

        const res = await dispatch(adminActions.removeShoe(e.target[0].value))
        // console.log(res.data.message)
        e.target[0].value = ''

        setReload(!reload)
    }

    return (
        <div className="adminForm">

            <div className='grid grid-cols-2'>

                {/* ADD SHOE */}
                <div className='border border-red-400'>
                    <p className='text-xl text-center font-bold'>Add Shoes</p>
                    
                    <form
                        className='form-admin border border-blue-400'
                        onSubmit={handleSubmit}
                    >
                        <div className='container'>
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

                {/* DELETE SHOE */}
                <div className='border border-red-400'>
                    <p className='text-xl text-center font-bold'>Remove Shoes</p>

                    <form
                        className='form-admin'
                        onSubmit={handleSubmitDelete}
                    >
                        {/* <div className='admin-details'> */}

                        <select name="type" id="" required className='p-2 w-4/5 rounded-md'>

                            {shoes?.map(shoe => <option key={shoe._id} value={shoe._id}>{shoe.name}</option>)}

                        </select>

                        {/* </div> */}

                        <div className='button-ctn'>
                            <input className='btn-admin' type='submit' value='send' />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}