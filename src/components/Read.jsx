/*import axios from "axios"
import { useEffect, useState } from "react"



const Read = () => {

    const [data ,setData]=useState([])

    function getData(){
     axios.get("https://665af13b003609eda45f544b.mockapi.io/crud-react")
     .then((res)=>{
        console.log(res.data)
        setData(res.data)
     })
    }
    getData()

    useEffect(()=>{
        getData()
    },[data])

  return (
    <div>
        <h2>Read Operation</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nmae</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
 { 
 
    data.map((eachData)=>{
        return (
            <>
             <tbody>
    <tr>
     
      <td>1</td>
      <td>Name</td>
      <td>Email</td>
      <td><button className="btn-success">Edit</button></td>
      <td><button className="btn-danger">Delete</button></td>
    </tr>
    <tr>
      
      
    
    </tr>
    
    
 

  </tbody></>
    })
    }
</table>

    </div>


}


export default Read
*/

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;