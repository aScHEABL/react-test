import { useListContext } from "../context/listContext";

let nextID = 0;
export default function AddList() {
    const [stateList, dispatch] = useListContext();
    const handleChange = (key, value) => {
        dispatch({type: 'UPDATE_INPUT', payload: { [key]: value }});
    }
    
    const handleClick = (value) => {
        dispatch({type: 'ADD_JOB', id: nextID++, text: stateList.inputValue});
        dispatch({type: 'UPDATE_INPUT', payload: {inputValue: '' }});
        console.log(stateList);
    }

    return (
        <div>
            <input name="inputValue" value={stateList.inputValue}
            onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <button name="jobs" onClick={(e) => handleClick(e.target.value)}>
                Add
            </button>
        </div>
    )
}