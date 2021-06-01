import { combineReducers } from 'redux';
import page1 from './page1_reducer';
import page2 from './page2_reducer';
import page3 from './page3_reducer';

const rootReducer = combineReducers({
    page1,
    page2,
    page3
})
export default rootReducer;