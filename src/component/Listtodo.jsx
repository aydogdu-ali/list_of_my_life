import React from "react";
import "./Listtodo.css";


const Listtodo = ({ todo }) => {

  return (
    <>
    <div className="card"> 
        <p>Sıra Numarası</p>
    <p>Yapacağım Hayalim</p>
    <p>Kategorisi</p>
    <p> Düzenleme </p>
       </div>
           
      {todo.map((item) => {
        const { id, text, categori } = item;
        
        return (
          <div className="col-sm"> <div  key={id}  className="card"> 
          <p>{id}</p>
          <p>{text}</p>
          <p>{categori}</p>
          <p>
            <div> <button> sil</button>
            <button> Düzelt</button>
                  
            </div>  </p>
          
         
        
        </div> </div>
 
  )})}
 


 
 
 </>
 
)}

export default Listtodo;



