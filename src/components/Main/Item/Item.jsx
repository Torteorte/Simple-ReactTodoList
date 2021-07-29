import React from 'react'
import trash from './../../../assets/img/trash.png'

const Item = ({ id, itemText, deleteToDoItem }) => {

   const deleteItem = () => {
      deleteToDoItem(id);
   }

   return (
      <div className="item" >
         <button className="check"></button>
         <p>{itemText}</p>
         <img className="image-bucket" src={trash} alt="delete" onClick={deleteItem} />
      </div>
   )
}

export default Item
