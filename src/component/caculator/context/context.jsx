
import { createContext, useReducer } from "react";

export const mycontext = createContext();

const initialState = {
    leftSide: [],
    rightSide: [],
    operator: null,
    result: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'number':
            if (state.operator === null) {
                return { ...state, leftSide: [...state.leftSide, action.payload] };
            } else {
                return { ...state, rightSide: [...state.rightSide, action.payload] };
            }

        case 'operator':
            return { ...state, operator: action.payload };

        case 'calculate':
            const leftSide = parseFloat(state.leftSide.join('')) || 0;
            const rightSide = parseFloat(state.rightSide.join('')) || 0;
            let result = null;

            switch (state.operator) {
                case '+':
                    result = leftSide + rightSide;
                    break;
                case '-':
                    result = leftSide - rightSide;
                    break;
                case 'x':
                    result = leftSide * rightSide;
                    break;
                case '/':
                    result = leftSide / rightSide;
                    break;
                case '√':
                    result = Math.sqrt(rightSide);
                    break;
                case 'x²':
                    result = Math.pow(rightSide, 2);
                    break;
                default:
                    console.warn(`Unhandled operator: ${state.operator}`);
            }

            return {
                ...state,
                result: result,
            };

        case 'erase':
            return {
                ...initialState,
            };

        default:
            return state;
    }
};

function Context({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <mycontext.Provider value={[state, dispatch]}>
            {children}
        </mycontext.Provider>
    );
}

export default Context;
