import axios from "axios"
import { BASE_URL } from "./base"

export async function getAll(){
  try{
    const response = await axios.get(BASE_URL)
    return response
  }
  catch(error){
    return error
  }
}

export async function getOne(id){
    try{
      const response = await axios.get(BASE_URL+`/${id}`)
      return response
    }
    catch(error){
      return error
    }
  }


  export async function deleteOne(id){
    try{
      const response = await axios.delete(BASE_URL+`/${id}`)
      return response
    }
    catch(error){
      return error
    }
  }

  export async function post(payload){
    try{
      const response = await axios.post(BASE_URL,payload)
      return response
    }
    catch(error){
      return error
    }
  }


  export async function patch(id,payload){
    try{
      const response = await axios.patch(BASE_URL+`/${id}`,payload)
      return response
    }
    catch(error){
      return error
    }
  }