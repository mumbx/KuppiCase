import Axios from 'axios'

export default {

  getProducts: async () =>{

    return await Axios({
        method: 'GET',
        url: 'https://dev-api.kuppi.com.br/example/products',
        headers: {
          'auth-token': 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
        }
     })
  },

  getProductById: async (id) =>{

    let url = `https://dev-api.kuppi.com.br/example/products/${id}`

    return await Axios({
        method: 'GET',
        url,
        headers: {
          'auth-token': 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
        }
     })
  },

}
