import React, {useState,useEffect} from 'react'
import Loading from "./Loading"
import Tours from "./Tours"

import "./index.css"

const url = 'https://course-api.com/react-tours-project'


const App = () => {
const [loading,setLoading] = useState(true)
const [tours,setTours] = useState([])

const fecthTours = async()=> {
  setLoading(true)

  try {
  const response = await fetch(url)
  const tours = await response.json() 
  console.log(tours)
  setLoading(false) 
  setTours(tours)
  } 
  catch (error) {
      setLoading(false)
  }
  
  
}

useEffect(()=>{
  fecthTours();
},[])


if (loading){
  return (
    
      <Loading/>
    
  )
}
return (<main>
  <Tours tours={tours}/>
</main>)


}


export default App;