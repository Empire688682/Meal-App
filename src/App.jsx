import React from 'react'
import './index.css'
import Favorite from './Component/Favorite';
import Meal from './Component/Meal';
import Modal from './Component/Modal';
import Search from './Component/Search';
import { useGlobalContext } from './Context';

const App = () => {
  const {modal, favorites} = useGlobalContext()
  return (
    <div>
      {favorites.length > 0 && <Favorite/>}
      <Search/> 
      <Meal/>
      {modal && <Modal/>}
    </div>
  )
}

export default App
