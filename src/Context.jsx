import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Search from './Component/Search';

const AppContext = React.createContext();

const allMealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [modal, setModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState([]);    

const fetchMeals = async(url) =>{
    setLoading(true)
    try {
        const {data} = await axios(url)
        if(data.meals){
            setMeals(data.meals)
        }
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}

useEffect(() =>{
    fetchMeals(allMealUrl)
},[]);

useEffect(() =>{
if(!searchTerm) return
fetchMeals(`${allMealUrl + searchTerm}`)
},[searchTerm]);

const fetchRandomMeals = () =>{
    fetchMeals(randomMealUrl)
}

const closeModal = () =>{
    setModal(false)
}

const handleSelectedMeal = (idMeal) =>{
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);
    setModal(true)
    setSelectedMeal(meal)
}

const addToFavorite = (idMeal) =>{
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    if(alreadyFavorite) return;
    const updateFavorite = [...favorites, meal];
    setFavorites(updateFavorite);
    localStorage.setItem("favorite", JSON.stringify(updateFavorite));
}

const removeFromFavorite = (idMeal) =>{
    const updateFavorite = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updateFavorite);
    localStorage.setItem("favorite", JSON.stringify(updateFavorite));
}

const getFavoriteFromLocalStorage = () =>{
    let favorites = localStorage.getItem("favorite");
    if(favorites){
        favorites = JSON.parse(localStorage.getItem("favorite"))
    }
    else{
        favorites = []
    }
    return favorites
}

const [favorites, setFavorites] = useState(getFavoriteFromLocalStorage());

  return <AppContext.Provider value={{meals, addToFavorite, removeFromFavorite, favorites, selectedMeal, loading, setSearchTerm, fetchRandomMeals, modal, closeModal, handleSelectedMeal}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
