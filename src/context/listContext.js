import { createContext, useContext, useReducer } from "react";

const ListContext = createContext('');

const useListContext = () => {
    return useContext(ListContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    {
                        id: action.id,
                        text: action.text
                    }
                ],
            }

        case 'UPDATE_INPUT': 
            return {
                ...state,
                inputValue: action.payload.inputValue
            }

        default:
            return state;
    }
}

const ListContextProvider = ( {children} ) => {
    const dispatcher = useReducer(reducer, {
        jobs: [],
        inputValue: '',
    })

    return (
        <ListContext.Provider value={dispatcher}>
            {children}
        </ListContext.Provider>
    )
}

export {useListContext, ListContextProvider};