import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
    const [data,changeData]=useState({
        id:"",
        title :"",
        description:"", 
        price : "",
        discountPercentage : "",
        stock:""
       
    });

    const readValue=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})




    }
    const submitValues=()=>{
        console.log(data)
    }
  return (
    <div>
        <Header/>
         <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="text" className="form-control" name="id" value={data.id} onChange={readValue}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-labei">Title</label>
                                <input type="text" className="form-control"name="title" value={data.title} onChange={readValue} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="number" className="form-control" name="price" value={data.price}  onChange={readValue}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" name="description" value={data.description} onChange={readValue} />
                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Discount Percentage</label>
                                <input type="percentage" className="form-control" name="discountPercentage" value={data.discountPercentage} onChange={readValue}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Stock</label>
                                <input type="text" className="form-control" name="stock" value={data.stock} onChange={readValue} />
                            </div>
                            

                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={submitValues}> Add Items</button>
                            </div>
                        </div>









                    </div>
                </div>
            </div>
        </div>
    )
}



export default Add