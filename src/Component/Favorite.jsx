import React from 'react'
import '../App.css';
import { useGlobalContext } from '../Context';

const Favorite = () => {
  const{favorites, handleSelectedMeal, removeFromFavorite} = useGlobalContext()
  return (
    <div className='favorite-container'>
      <h1>Favorites Cart</h1>
      <div className="favorite">
          {favorites.map((items) =>{
            const {idMeal, strMealThumb:image} = items;
            // eslint-disable-next-line react/jsx-key
            return <div className="favorite-cart">
                      <img src={image} alt="Img" key={idMeal} onClick={()=> handleSelectedMeal(idMeal)}/>
                      <button onClick={()=> removeFromFavorite(idMeal)}>Remove</button>
                    </div>
          })}
      </div>
    </div>
  )
}

export default Favorite
