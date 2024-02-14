import React, { useState } from 'react'
import '../App.css';
import { useGlobalContext } from '../Context';

const Search = () => {
    const [text, setText] = useState('')
    const {setSearchTerm, fetchRandomMeals } = useGlobalContext()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }

    const handleOnchange = (e) =>{
        e.preventDefault()
        setText(e.target.value)
    }

    const handleFetchRandomMeals = () =>{
        fetchRandomMeals();
        setText('');
        setSearchTerm('')
    }

  return (
    <section>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Fav Meal' value={text} onChange={handleOnchange}/>
            <button type='submit' className='btn'>Search</button>
            <button className='sup-btn' onClick={handleFetchRandomMeals}>Suprise Me!</button>
        </form>
      </div>
    </section>
  )
}

export default Search
