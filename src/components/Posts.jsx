import React, { useEffect, useState } from 'react'
import axios from "axios";
const Posts = () => {
    const[output,setOutput]= new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/post/viewall").then(
            (response)=>{
                setOutput(response.data)
                console.log(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        
    </div>
  )
}

export default Posts
