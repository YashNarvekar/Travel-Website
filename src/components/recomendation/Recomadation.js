import React ,{useState} from 'react';
import './style.css'
import data from './menuApi'; 
import RecomendationCard from './RecomendationCard';


const Recomadation = () => {
    const [menuData, setmenuData] = useState(data)
    const filterItem = (category)=> {
      const updatedList = data.filter((curElem) => {
        return curElem.category === category;
      })
      setmenuData(updatedList);
    }
  return (
    <>
    <nav className='navbar1'>
      <div className="btn-group">
        {/* <button>dgdj</button> */}
      <button className="btn-group-item" onClick={()=>filterItem("The Weekend Break")}>The Weekend Break</button>
        <button className="btn-group-item" onClick={()=>filterItem("The Package Holiday")}>The Package Holiday</button>
        <button className="btn-group-item" onClick={()=>filterItem("The Group Tour")} style={{marginLeft: '30px'}}>The Group Tour</button>
        <button className="btn-group-item"onClick={()=>setmenuData(data)} >All Travel Packages</button>
  
      </div>
    </nav>
         
         
         <RecomendationCard menuData={menuData}/>   
    </>
  )
}

export default Recomadation