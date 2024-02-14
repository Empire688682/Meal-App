import React, {useState } from 'react'
import { useGlobalContext } from '../Context';
import { BsHandThumbsUp } from "react-icons/bs";

const Meal = () => {
    const {meals, loading, handleselectedMeal} = useGlobalContext();

    if(loading){
        return <section>
            <h1 style={{color:"green"}}>Loading........</h1>
        </section>
    }

    if(meals < 1){
        return <section>
            <h1 style={{color:"red"}}>An error occur try again later</h1>
        </section>
    }

    return <section>
    <div className="row">
        {meals.map((singleMeals) =>{
          const {idMeal, strMeal:title, strMealThumb:image} = singleMeals;
          // eslint-disable-next-line react/jsx-key
          return <div key={idMeal} className="single-meal">
          <img src={image} alt="Img" onClick={() =>handleselectedMeal(idMeal, true)} />
          <div className="single-meal-footer">
            <p className='title'>{title}</p>
            <button className='like-btn'><BsHandThumbsUp/></button>
          </div>
        </div>
        })}
    </div>
  </section>
}

export default Meal
