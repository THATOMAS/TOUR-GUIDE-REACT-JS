import {useState} from "react"

const Tour =({id,image,info,name,price,removeTour})=>{

  const [showmore,setShowmore] = useState(true)
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
    
    <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price">$ {price}</h4>
      <p>
        {showmore ? info : `${info.substring(0,200)}`}
        <button onClick={()=>setShowmore(!showmore)}>
          {showmore? "show less":"show more"}

        </button>
      </p>
      <button className="delete-btn" onClick={()=>{removeTour(id)}}>Not Interested </button>
    </div>

    </footer>

  </article>
}

export default Tour;