import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import {StoreContext} from "../../Context/StoreContext"
import axios from 'axios'
const Verify = () => {

    const [searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    const {url}=useContext(StoreContext)
    const navigate=useNavigate();

    const verifyPayment=async()=>{
      console.log("verify")
      const res=await axios.post(url+"/api/order/verify",{success,orderId});
      console.log("verify"+res.data.success)
        if(res.data.success){
             navigate('/myorders')
        }else{
            navigate('/')
        }
    }

    useEffect(()=>{
           verifyPayment()
    },[])

  return (
    <div className='verify'>
       <div className="spinner">

       </div>
    </div>
  )
}

export default Verify