import React, { useState } from 'react'
import axios from "axios";
const Home = () => {
    const[input,setInput]=new useState([
        {
            userId:"",
            post:"",
            postedDate:""
        }
    ])

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/post/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="success") {
                    alert("Succesfully inserted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        )
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-lab">UserId</label>
                        <input type="text" className="form-control" name="userId" value={input.userId} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Post</label>
                        <input type="text" className="form-control" name="post" value={input.post} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValues}>POST</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
