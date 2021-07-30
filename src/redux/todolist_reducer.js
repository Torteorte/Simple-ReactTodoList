const DELETE_ITEM = "DELETE_ITEM"
const ADD_ITEM_LIST = "ADD_ITEM_LIST"
const UPDATE_NEW_TEXT_BODY = "UPDATE_NEW_TEXT_BODY"
const TOGGLE_SET = "TOGGLE_SET"

let initialState = {
   todoItems: [
      { id: Math.random(), itemText: "Изучить ReactJS", done: false },
      { id: Math.random(), itemText: "Задеплоить проекты", done: true },
      { id: Math.random(), itemText: "Изучить Препроцессор", done: false }
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
            id: Math.random(), itemText: state.newTextBody, done: false
         }
         return {
            ...state,
            todoItems: [...state.todoItems, newTodo],
            newTextBody: ""
         }
      case TOGGLE_SET:
         return {
            ...state,
            todoItems: state.todoItems.map(u => {
               if (u.id === action.payload.itemId) {
                  return { ...u, done: action.payload.bool }
               }
               return u
            })
         }

      default:
         return state
   }
}

export const deleteTodoAC = (itemId) => ({ type: DELETE_ITEM, itemId })
export const updateNewTextBodyAC = (body) => ({ type: UPDATE_NEW_TEXT_BODY, body: body })
export const addItemTodoAC = () => ({ type: ADD_ITEM_LIST })
export const toggleTodoAC = (itemId, bool) => ({ type: TOGGLE_SET, payload: { itemId, bool } })

export default todolistReducer