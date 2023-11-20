import { TOGGLE } from './constants';

export const actToggleMenu = (payload) => {
    return {
            type: TOGGLE,
            payload
    }
}