
import './App.css'
import {useEffect, useState} from "react";
import useSWR from "swr";
import Spinner from "./components/Spinner.jsx";
function App() {
  const [pet,setPets] =useState([])
  const API_URL ="http://localhost:8080/api/v1/pets"
  const ADD_API_ENDPOINT ="/add/new"
  const GET_ALL ="/all"
  // using useEffect
  // useEffect(()=>{
  //   fetchData()
  // },[])

  // use swr hook


  const fetchData =(async ()=>{
    const response =await fetch(API_URL+GET_ALL,{
      method:"GET"
    })
    if(response.ok){
      const data =await response.json()
      setTimeout(()=>{
        setPets(data.sort((a,b)=>b.id-a.id))
      },10000)

    }else{
      throw new Error("Error fetching data from api")
    }

  })
  const{isLoading,error} =useSWR(API_URL+GET_ALL,fetchData)
  if(error)return <div>Failed to load</div>
  if(isLoading) return<Spinner/>
  const petContainer ={
    display:"flex",
    flexWrap:"wrap",
    gap:"3px"

  }

  return (
    <div style={petContainer}>
      {pet.length>0?(
          pet.map((item)=>(
              <div key={item.id} style={{padding:"10px",width:"300px"}}>
                <img src={item.image} alt={item.name}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.color}</p>
                <p>{item.description}</p>
              </div>
          ))
      ) : (
          <Spinner/>
      )}
    </div>
  )
}

export default App
