import React from 'react';
import '../App.css';
import { useGlobalContext } from '../Context';
import { IoLogoYoutube } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Modal = () => {
    const {selectedMeal, closeModal} = useGlobalContext();

    const { strMeal: title, strInstructions: note, strSource: source, strMealThumb: image,strYoutube: youtube } = selectedMeal;

    return (
        <div>
            <div className="modal-container">
                <div className="modal">
                    <img src={image} alt={title}/>
                    <h1 className='title'>{title}</h1>
                    <h4 className='note-heading'>Cooking Instruction <FaArrowAltCircleDown style={{fontSize:"20px"}} /></h4>
                    <p className='note'>{note}</p>
                    <div className="links">
                    <a  href={source} target="_blank" rel="noopener noreferrer">Original Source</a><br/>
                    <a className='youtube'  href={youtube} target="_blank" rel="noopener noreferrer">Youtube <IoLogoYoutube style={{color:"red", marginLeft:"10px"}} /></a><br/>
                    </div>
                    <button className='close-btn' onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
