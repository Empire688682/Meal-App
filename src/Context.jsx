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
    const [selectedMeal, setSelectedMeal] = useState([])

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

const handleselectedMeal = (idMeal) =>{
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);
    setModal(true)
    setSelectedMeal(meal)
}

  return <AppContext.Provider value={{meals, selectedMeal, loading, setSearchTerm, fetchRandomMeals, modal, closeModal, handleselectedMeal}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
