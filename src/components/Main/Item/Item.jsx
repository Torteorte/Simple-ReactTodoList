import React from 'react'
import trash from './../../../assets/img/trash.png'

function Item() {
   return (
      <div className="item">
         <button className="check"></button>
         <p>Изучить ReactJS</p>
         <img className="image-bucket" src={trash} alt="delete" />
      </div>
   )
}

export default Item
