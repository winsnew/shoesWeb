import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import {getDataList} from "./Api"

const Card = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    getDataList().then((result) => {
      setUserList(result)
    })
  }, [])

  

  const UserList = () => {
    return userList.map((product, i) => {
      return (
        <>
        <div className="col-md-3">
          <div className="card">
            <img src={product.image} key={i} className="card-img-top" alt={product.image}/>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <a href="#" className="btn btn-primary">Go Here</a>
            </div>
          </div>
        </div>
        </>
      )
    })
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">All Product List</h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          <UserList/>
        </div>
      </div>
    </div>

  )
}

export default Card