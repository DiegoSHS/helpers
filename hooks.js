/**
 * React's useState hook
 * @param {any} initialState initial state of the state
 * @returns {[any, Function]} state and setState
 */
export const useState = (initialState) => {
    const state = initialState
    const setState = (newState) => {
        state = newState
    }
    return [state, setState]
}
/**
 * React's useEffect hook
 * @param {Function} callback 
 * @param {Array} dependencies 
 */
const useEffect = (callback, dependencies) => {
    const hasNoDependencies = !dependencies
    const hasChangedDependencies = dependencies && dependencies.some((dependency, index) => {
        return dependency !== dependencies[index]
    })
    if (hasNoDependencies || hasChangedDependencies) {
        callback()
    }
}

const useReducer = (reducer, initialState) => {
    const [state, setState] = useState(initialState)
    const dispatch = (action) => {
        const newState = reducer(state, action)
        setState(newState)
    }
    return [state, dispatch]
}