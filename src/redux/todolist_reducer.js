const DELETE_ITEM = "DELETE_ITEM"
const ADD_ITEM_LIST = "ADD_ITEM_LIST"
const UPDATE_NEW_TEXT_BODY = "UPDATE_NEW_TEXT_BODY"

let initialState = {
   todoItems: [
      { id: Math.random(), itemText: "Изучить ReactJS" },
      { id: Math.random(), itemText: "Задеплоить проекты" },
      { id: Math.random(), itemText: "Изучить Препроцессор" }
   ],
   newTextBody: ""
}

let todolistReducer = (state = initialState, action) => {
   switch (action.type) {

      case DELETE_ITEM:
         return {
            ...state,
            todoItems: state.todoItems.filter(p => p.id !== action.itemId)
         };

      case UPDATE_NEW_TEXT_BODY:
         return {
            ...state,
            newTextBody: action.body
         };

      case ADD_ITEM_LIST:
         let newTodo = {
            id: Math.random(), itemText: state.newTextBody
         }
         return {
            ...state,
            todoItems: [...state.todoItems, newTodo],
            newTextBody: ""
         }

      default:
         return state
   }
}

export const deleteTodoAC = (itemId) => ({ type: DELETE_ITEM, itemId })
export const updateNewTextBodyAC = (body) => ({ type: UPDATE_NEW_TEXT_BODY, body: body })
export const addItemTodoAC = () => ({ type: ADD_ITEM_LIST })

export default todolistReducer