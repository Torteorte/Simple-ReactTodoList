import React from 'react'

const InputField = () => {
   return (
      <div className="input__field">
         <input id="new-task" type="text" tabIndex="1" placeholder="Введите задачу..." />
         <div id="addNewTask">
            <svg className="svg-circleplus" viewBox="0 0 100 100">
               <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
               <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
            </svg>
         </div>
      </div>
   )
}

export default InputField