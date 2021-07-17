import usersReducers from "./reducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
  users: usersReducers
})

export default rootReducer