import counterReducer from './counter'
import IncrementData from './isLogged'
import MonthFromCrossIcon from './MonthFromCrossIcon'
import MonthFrom from './MonthFrom'
import UpdateIndex from './UpdateIndex'
import UpdateNumber from './UpdateNumber'
import CountingUpdateNumber from './CountingUpdateNumber'
import IncrementState from './Incrementstate'
import UpdateYearFrom from './UpdateYearFrom'
import { combineReducers } from "redux" 
const allReducers = combineReducers({
counter:counterReducer,
CounterData:IncrementData,
MonthFromCrossIcon:MonthFromCrossIcon,
MonthFrom:MonthFrom,
UpdateIndex:UpdateIndex,
UpdateNumber:UpdateNumber,
CountingUpdateNumber,CountingUpdateNumber,
IncrementState:IncrementState,
UpdateYearFrom:UpdateYearFrom,
});
export default allReducers