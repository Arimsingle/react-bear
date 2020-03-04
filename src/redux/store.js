import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
const initialForm = {
    name: '',
    weight: 0,
    img: ''
}
const bearReducer = (bears = [], action) => {
    switch (action.type) {
        case 'GET_BEAR':
            return action.bears
        case 'ADD_BEAR':
            return [...bears, action.bears]
        case 'DELETE_BEAR':
            return bears.filter((bear)=>+bear.id !== +action.id)
        case 'UPDATE_BEAR':
            return bears.map((bear,index)=>{
                if(+bear.id === +action.id){
                    return action.bear;
                }
                else{
                    return bear;
                }
            })
    }
    return bears;
}
const formReducer = (data = initialForm, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...data,
                name: action.name //chagne only name
            }
        case 'CHANGE_WEIGHT':
            return {
                ...data,
                weight: action.weight //chagne only name
            }
        case 'CHANGE_IMG':
            return {
                ...data,
                img: action.img //chagne only name
            }
        default: return data;
    }
}
const reducers = combineReducers({
    bear:bearReducer,
    form:formReducer
})
export const store = createStore(reducers,applyMiddleware(logger));