import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Viewall = () => {
    const [data, changeData] = useState({
       products:[
        

       ],
       total:100,
       skip:0,
       limit:30,
    }
        
        )


        const fetchData=()=>{
            axios.get("https://dummyjson.com/products").then(
                (response)=>{
                    changeData(response.data)
                }
            )
           }
           useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.products.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex allign-items-stretch">

                                            <div class="card">
                                                <img src={value.thumbnail} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <h5 class="card-title">{value.price}</h5>
                                                    <h5 class="card-title">{value.discountPercentage}</h5>
                                                    <h5 class="card-title">{value.brand}</h5>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">{value.category}</p>
                                                    <p class="card-text">{value.stock}</p>
                                                    <p class="card-text">{value.rating}</p>
                                                    <a href="#" class="btn btn-primary">BUY NOW</a>
                                                </div>
                                            </div>
                                            </div>
                                            )

                        }
                                            )
                        }



                                        </div>
                            </div>
                    </div>
                </div>
            </div>
    
                        
                
                
    )
}

export default Viewall