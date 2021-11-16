import React,{useState,useEffect} from "react"
import "./index.css"
import Loading from "./Loading"
import Tours from "./Tours"

const url = 'https://course-api.com/react-tours-project'

const App =()=>{
  const [loading,setLoading] = useState(true)
  const [tours,setTours]=useState([])
  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async()=>{
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
    setLoading(false)
    console.log(data)

  }
  useEffect(()=>{
    fetchTours()
  },[])
  if(tours.length === 0){
    return <div className="title">
      <h1>No Tours Left</h1>
      <button onClick={fetchTours} className="btn">Refresh</button>
    </div>
  }

  return <main>
    {loading? <Loading/>:<Tours tours={tours} removeTour={removeTour}/>}
    
  </main>


}

export default App;