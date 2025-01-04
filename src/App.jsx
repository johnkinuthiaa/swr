
import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [pet,setPets] =useState([])
  const API_URL ="http://localhost:8080/api/v1/pets"
  const ADD_API_ENDPOINT ="/add/new"
  const GET_ALL ="/all"
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData =(async ()=>{
    const response =await fetch(API_URL+GET_ALL,{
      method:"GET"
    })
    if(response.ok){
      const data =await response.json()
      setPets(data)
    }else{
      throw new Error("Error fetching data from api")
    }

  })

  return (
    <div>
      {pet.length>0?(
          pet.map((item)=>(
              <div key={item.id}>
                <img src={item.image} alt={item.name}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.color}</p>
                <p>{item.description}</p>
              </div>
          ))
      ) : (
          <div>pet list is empty</div>
      )}
    </div>
  )
}

export default App
