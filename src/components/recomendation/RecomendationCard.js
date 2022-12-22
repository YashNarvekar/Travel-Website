import React from 'react'
import Recomadation from './Recomadation'
import './style.css'
import data from './menuApi'; 

const RecomendationCard = ({menuData}) =>{
    console.log(menuData);
  return (
    <>
    <section className="main-card--cointainer">
        {menuData.map((curElem) => {
        //   const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">#</span>
                    <span className="card-author subtle"> </span>
                    <h2 className="card-title"> {curElem.title} </h2>
                    <span className="card-description subtle">
                    {curElem.subTitle}
                    </span>
                    <div className="card-read">{curElem.duration}</div>
                  </div>
                  <img src={curElem.image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Book Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  )
}

export default RecomendationCard