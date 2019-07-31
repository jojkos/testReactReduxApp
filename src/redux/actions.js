import { SET_DIMENSIONS, TOGGLE_CELL, SHOULD_FLIP } from "./actionTypes";

export const toggleCell = id => (
    {
        type: TOGGLE_CELL,
        payload: {
            id: id
        }
    }
);

export const setShouldFlip = shouldFlip => ({
    type: SHOULD_FLIP,
    payload: {
        shouldFlip: shouldFlip
    }
})

export const setDimensions = (rows, columns) => (
    {
        type: SET_DIMENSIONS,
        payload: {
            rows,
            columns
        }
    }
)
