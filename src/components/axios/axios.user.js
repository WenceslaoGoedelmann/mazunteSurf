
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'



export const createUser = async (nombre, surname, age, height,weight,experience,email, cellphone, location, address, password,adminKey) => {
    
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
            nombre,
            surname,
            age,
            height,
            weight,
            experience,
            email,
            cellphone,
            location,
            address,
            password,
        }, {
            headers: {
              'admin-key': adminKey,
            }, 
          }) 
        console.log(data)
        return data 
    } catch (error) {
        console.log({ createUserError: error })
        return alert(error.response.data.errors[0].msg) 
    }
}

export const loginUser = async (email, password) => {
    console.log(email)
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data 
    } catch (error) {
        console.log({ loginUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}

export const verifyUser = async (code, email ) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            code,
            email
        })
        return response.data
    } catch (error) {
        console.log({ loginUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}
