import { combineReducers } from "redux";
import BallReducer from "./Balls/BallReducer";
import BatReducer from './Bats/batReducer'
import userReducer from "./Users/userReducer";

const rootReducer = combineReducers({
    ball: BallReducer,
    bat: BatReducer,
    user: userReducer
})
export default rootReducer