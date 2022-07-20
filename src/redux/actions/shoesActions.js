import axios from 'axios'

const shoesActions={
    
    getShoes:()=>{

        return async(dispatch,getState)=>{

            const res= await axios.get('https://daftlab-back.herokuapp.com/api/shoes')
            dispatch({type:'GET_SHOES', payload:res.data.response})
        }
    },

    getOneShoe: (id) => {

        return async (dispatch, getState) => {
            
            const res = await axios.get(`https://daftlab-back.herokuapp.com/api/shoes/${id}`)
            return res

        }

        // dispatch({ type: 'GET_ONE_SHOE', payload: res.data.response })

    }
}
export default shoesActions