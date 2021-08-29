import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemTodoAC, deleteTodoAC, toggleTodoAC, updateNewTextBodyAC } from '../../redux/todolist_reducer';
import InputField from './InputField/InputField'
import Item from './Item/Item'

const Main = () => {

   const dispatch = useDispatch()
   const listItemText = useSelector(({ todolist }) => todolist.newTextBody);
   const listItem = useSelector(({ todolist }) => todolist.todoItems);

   const handleAddToDoItem = () => {
      dispatch(addItemTodoAC());
   };

   const handleUpdateToDoItem = (text) => {
      dispatch(updateNewTextBodyAC(text));
   };

   const deleteToDoItem = (id) => {
      dispatch(deleteTodoAC(id));
   };

   const toggleToDoItem = (id, done) => {
      dispatch(toggleTodoAC(id, done));
   };

   return (
      <main>
         <InputField
            addItem={handleAddToDoItem}
            updateItem={handleUpdateToDoItem}
            listItemText={listItemText}
         />
         <div className="items-to-do">
            {listItem.map((obj, index) =>
               <Item
                  key={obj.id}
                  {...obj}
                  deleteToDoItem={deleteToDoItem}
                  toggleToDoItem={toggleToDoItem}
               />
            )}
         </div>
      </main>
   )
}

export default Main
