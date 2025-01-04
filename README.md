# Learning swr to for data fetching instead of using useEffect


```javascript

//how i used to do it using useEffect
const [dataFetched,setDataFetched] =useState([])
// fetch data once the component mounts
useEffect(()=>{
    fetchData()
},[])
const fetchData=(async()=>{
    const response =await fetch("https://some-api.com")
    if(response.ok){
        const data =await response.json();
        setDataFetched(data)
    }else{
        throw new Error("Error fetching data from the api")
    }
    
})
```
