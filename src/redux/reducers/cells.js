import {
    TOGGLE_CELL, SHOULD_FLIP, SET_DIMENSIONS
} from "../actionTypes"
import { DEFAULT_DIMENSIONS } from "../../constants";

const initialState = {
    cells: Array(DEFAULT_DIMENSIONS.ROWS * DEFAULT_DIMENSIONS.COLUMNS).fill(true),
    shouldFlip: false
}

const toggleCell = (state, action) => {
    const cells = [...state.cells];
    const { payload: { id: i } } = action;

    cells[i] = !cells[i];
    return {
        ...state,
        cells
    };
}

const copyCells = (oldCells, rows, columns) => {
    const newCells = Array(rows * columns).fill(true);

    for (let i = 0; i < oldCells.length; i++) {
        if (i === newCells.length) {
            break;
        }

        newCells[i] = oldCells[i];
    }

    return newCells;
}

const cellsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CELL:
            return toggleCell(state, action);
        case SHOULD_FLIP:
            return {
                ...state,
                shouldFlip: action.payload.shouldFlip
            }
        case SET_DIMENSIONS:
            const rows = +action.payload.rows;
            const columns = +action.payload.columns;

            if (!Number.isInteger(rows) || rows < 0 || !Number.isInteger(columns) || columns < 0)
                return state;

            return {
                ...state,
                cells: copyCells(state.cells, rows, columns)
            };
        default:
            return state;
    }
};

export default cellsReducer;