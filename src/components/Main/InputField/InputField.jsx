import React from 'react'
import PropTypes from 'prop-types';

const InputField = (props) => {

   const onAddItem = () => {
      if (props.listItemText) {
         props.addItem()
      }
   }

   const onUpdateItem = (e) => {
      let body = e.target.value;
      props.updateItem(body);
   }

   return (
      <div className="input__field">
         <input id="newTask" type="text" tabIndex="1" placeholder="Введите задачу..." value={props.listItemText} onChange={onUpdateItem} />
         <div id="addNewTask" onClick={onAddItem}>
            <svg className="svg-circleplus" viewBox="0 0 100 100">
               <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
               <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
            </svg>
         </div>
      </div>
   )
}

InputField.propTypes = {
   listItemText: PropTypes.string,
   addItem: PropTypes.func,
   updateItem: PropTypes.func
};

InputField.defaultProps = {
   listItemText: ''
};

export default InputField