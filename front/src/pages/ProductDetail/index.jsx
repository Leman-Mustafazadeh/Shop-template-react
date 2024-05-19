import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOne } from '../../API'

const ProductDetail = () => {
    const {id} = useParams()

    const [getData,setGetData] = useState({
        imgSrc:'',
        title:'',
        price:''
    })
    useEffect(()=>{
        getOne(id).then((res)=>{
            setGetData(res.data.data)
        })
    },[id])
    console.log(getData);
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <button  style={{textDecoration:"none",borderColor:'transparent',backgroundColor:'pink',marginBottom:'30px'}}><Link to={"/shopproducts"} style={{textDecoration:"none",color:'white'}}>Go back</Link></button>
        <img src={getData.imgSrc} alt="" />
        <h5>{getData.title}</h5>
        <h2>Price: ${getData.price}</h2>


    </div>
  )
}

export default ProductDetail
