import { SET_DIMENSIONS } from "../actionTypes"
import { DEFAULT_DIMENSIONS} from "../../constants";

const initialState = {
    rows: DEFAULT_DIMENSIONS.ROWS,
    columns: DEFAULT_DIMENSIONS.COLUMNS,
};

const dimensionsReducer = (state = initialState, action) => {
    switch (action.type) {        
        case SET_DIMENSIONS:
            const rows = +action.payload.rows;
            const columns = +action.payload.columns;

            if (!Number.isInteger(rows) || rows < 0 || !Number.isInteger(columns) || columns < 0)
                return state;

            return {
                ...state,
                rows,
                columns
            };
        default:
            return state;
    }
};

export default dimensionsReducer;