import React from 'react'
import trash from './../../../assets/img/trash.png'

const Item = ({ id, itemText, deleteToDoItem }) => {

   const [doneTodoItem, setDoneTodoItem] = React.useState(false)

   const doneTodo = (e) => {
      if (e.target.className !== 'check') return
      setDoneTodoItem(!doneTodoItem)
   }

   const deleteItem = () => {
      deleteToDoItem(id);
   }

   return (
      <div onClick={doneTodo} className={doneTodoItem ? "item checked" : "item"} >
         <button className="check"></button>
         <p>{itemText}</p>
         <img className="image-bucket" src={trash} alt="delete" onClick={deleteItem} />
      </div>
   )
}

export default Item
