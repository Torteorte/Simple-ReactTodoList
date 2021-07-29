import React from 'react'
import InputField from './InputField/InputField'
import Item from './Item/Item'

const Main = () => {
   return (
      <main>
         <InputField />
         <div className="items-to-do">
            <Item />
            <Item />
            <Item />
         </div>
      </main>
   )
}

export default Main