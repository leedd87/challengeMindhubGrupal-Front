import React,{useEffect} from "react"
import {useDispatch} from 'react-redux'
import shoesActions from '../redux/actions/shoesActions'

export default function Cards(){
    const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(shoesActions.getShoes())
    // eslint-disable-next-line
  },[])
    return(
        <></>
    )
}