import axios from 'axios';


const adminActions = {
  

    addShoe: (data, token) => {

        console.log(data);
        console.log(token);

        return async (dispatch, getState) => {

            const res = await axios.post(`https://daftlab-back.herokuapp.com/api/shoes`, { data },
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            return res;
        }

    },

    removeShoe: (idShoe) => {

        return async (dispatch, getState) => {

            const res = await axios.delete(`https://daftlab-back.herokuapp.com/api/shoes/${idShoe}`)

            return res;
        }
    }

}

export default adminActions