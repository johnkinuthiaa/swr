# Learning swr(Stale while revalidating) to for data fetching instead of using useEffect


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
# using swr
### First install the swr npm dependency
```shell
npm install swr
```
### Using the useSWR hook

```javascript
//import useSWR
import useSWR from "swr";
// Normal fetcher function
const fetchData =(async ()=>{
    const response =await fetch(API_URL+GET_ALL,{
        method:"GET"
    })
    if(response.ok){
        const data =await response.json()
        setTimeout(()=>{
            setPets(data.sort((a,b)=>b.id-a.id))
        },2000)

    }else{
        throw new Error("Error fetching data from api")
    }

})
const{isLoading,error} =useSWR(API_URL+GET_ALL,fetchData)
if(error)return <div>Failed to load</div>
if(isLoading) return <div>Loading...</div>
```
