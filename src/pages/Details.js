import React from 'react';
import DetailCard from '../components/DetailCard';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch} from "react-redux";
import shoesActions from "../redux/actions/shoesActions";

const Details = () => {
    const {id}= useParams()
    console.log("🆔 ~ file: Shop.jsx ~ line 24 ~ Shoop ~ id", id)
    
    
    const [shoes, setShoes] = useState()


    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(shoesActions.getOneShoe(id))
        .then(res =>setShoes(res.data.response))
  // eslint-disable-next-line
  },[])

  console.log("🚀 ~ file: Details.js ~ line 14 ~ Details ~ shoes", shoes)


	// const handleIDshoe = async (id) => {
	// 	// console.log(id)
	// 	const res = await dispatch(shoesActions.getOneShoe(id));
	// 	console.log(res.data.response);
	// };


    return (
        <div style={{
            // backgroundColor: '#f3ebde'
            // backgroundColor: '#f3ebde6b'
            // backgroundColor: '#FAF6E9'
            backgroundColor: '#FFFDF6'
        }}>
            {/* Header */}
            <div className='mb-10 flex justify-center items-center h-20 border border-red-400'>
                <p className='uppercase font-bold'>Details</p>
            </div>

            {/* contenedor principal */}
            <div className='mb-4'>
                
                <DetailCard shoes={shoes}  />

            </div>

            {/* Comentarios */}
            <div className='mb-10 flex justify-center items-center h-20 border border-red-400'>
                <p className='uppercase font-bold'>comentarios</p>
            </div>

            {/* Footer */}
            <div className='flex justify-center items-center h-20 border border-red-400'>
                <p className='uppercase font-bold'>Footer</p>
            </div>
            

        </div>
    )
}

export default Details;