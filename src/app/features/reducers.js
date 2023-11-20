import { TOGGLE } from './constants';

let initialState = false;

    
export default function toggleReducer(state=initialState, {type, payload}){

    switch(type){
        case TOGGLE:
            return payload
        default:
            return state
    }
}
