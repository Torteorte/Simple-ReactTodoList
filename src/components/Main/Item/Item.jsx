import React from 'react'
import trash from './../../../assets/img/trash.png'

const Item = ({ id, itemText, done, deleteToDoItem, toggleToDoItem }) => {

   const doneTodo = (e) => {
      if (e.target.className !== 'check') return
      toggleToDoItem(id, !done)
   }

   const deleteItem = () => {
      deleteToDoItem(id);
   }

   return (
      <div onClick={doneTodo} className={done ? "item checked" : "item"} >
         <button className="check"></button>
         <p>{itemText}</p>
         <img className="image-bucket" src={trash} alt="delete" onClick={deleteItem} />
      </div>
   )
}

export default Item
