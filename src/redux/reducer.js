import { ADD_USER} from "./actionType";
import { combineReducers } from "redux";

const initialUser = {
    user : {},
    id : "",
    token : ""
}

const userReducer = (state=initialUser, action) =>{
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                user : action.payload,
                id : action.payload.id,
                token : action.payload.token
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    user : userReducer
})

export default rootReducer;