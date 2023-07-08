import { createContext, useReducer } from 'react';

const initialState = { step: 1 };

export const StepContext = createContext({
    step: initialState.step,
    dispatch: () => {},
});

const stepsReducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return {
                step: state.step + 1,
            };
        case 'PREV_STEP':
            if (state.step === 4) {
                return { step: state.step - 2 };
            } else if (state.step === 5) {
                return { step: state.step - 3 };
            } else {
                return {
                    step: state.step - 1,
                };
            }
        case 'NOT_ELIGIBLE':
            return {
                step: 5,
            };
        default:
            return state;
    }
};

const StepContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stepsReducer, { step: 1 });

    const stepValue = {
        step: state.step,
        dispatch,
    };
    return <StepContext.Provider value={stepValue}>{children}</StepContext.Provider>;
};

export default StepContextProvider;
