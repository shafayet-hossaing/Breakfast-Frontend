import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [ordersData, setOrdersData] = useState([])
    useEffect(()=>{
        axios.get('https://serene-fjord-97183.herokuapp.com/getAllOrders')
        .then(res => {
            setOrdersData(res.data)
        })
    },[])


    // Handle Approve
    const handleApprove = (orderData) => {
        axios.put(`https://serene-fjord-97183.herokuapp.com/approve/${orderData.productId}`)
        .then(res => {

            // Taking The index
            const result = ordersData[0].findIndex((order) => order.productId === orderData.productId)
            const allData = [...ordersData]

            // Changing status of found product
            allData[0][result].orderStatus = "Approved"
            setOrdersData(allData)
        })
    }


    const handleDelete = id => {
        axios.delete(`https://serene-fjord-97183.herokuapp.com/deleteOrders/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                alert("Deleted")
                const remainingData = ordersData[1]?.filter(service => service?._id !== id)
                setOrdersData(remainingData)
            }
        }).catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="container shadow my-4 p-5">
            <h1 className="fw-bold mb-5 text-center text-danger">Manage Your Orders</h1>                     
            {
                ordersData[0]?.map(p=><div>
                  {
                      ordersData[1]?.map(s=> (p.productId === s._id) && <div className="table-responsive">
                          <table className="table mb-0 table-dark table-hover">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    {
                                        <img className="" style={{width: "50px", height: "auto", borderRadius: "50%"}} src={s?.img} alt="food" />
                                    }
                                </th>
                                <td className="align-items-center">
                                    {p?.email}
                                </td>
                                <td>{s?.name}</td>
                                <td>{s?.time} Morning</td>
                                <td><button onClick={() => handleDelete(s?._id)} className="btn btn-danger">Delete</button></td>
                                <td><button onClick={()=> handleApprove(p)} className="btn btn-success">{p.orderStatus === "Approved" ? "Approved" : "Approve"} </button></td>
                            </tr>
                        </tbody>
                        </table>
                      </div> )
                  }
                </div>)
            }
        </div>
    );
};

export default ManageOrders;