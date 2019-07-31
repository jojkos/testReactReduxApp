import React from "react";
import Grid from "./Grid";
import Square from "./Square";

import { connect } from 'react-redux';
import { toggleCell, setShouldFlip } from '../redux/actions'

class GridOfSquares extends React.Component {
    render() {
        let squares = this.props.cells.map((square, i) => (
            <Square key={i} visible={square}
                onMouseDown={(e) => {
                    e.preventDefault();
                    this.props.setShouldFlip(true);
                    this.props.toggleCell(i);
                }}
                onMouseEnter={() => {
                    if (this.props.shouldFlipOnEnter) {
                        this.props.toggleCell(i);
                    }                    
                }}
                onMouseUp={() => {
                    this.props.setShouldFlip(false);
                }}
            ></Square>
        ));

        return (
            <Grid
                waitBeforeImgVisible={700}
                img="https://giantbomb1.cbsistatic.com/uploads/scale_small/0/6087/2437349-pikachu.png"
                columns={this.props.columns}
                rows={this.props.rows}
            >
                {squares}
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        cells: state.cells.cells,
        columns: state.dimensions.columns,
        rows: state.dimensions.rows,
        shouldFlipOnEnter: state.cells.shouldFlip
    };
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
// its easier to define it as a object and redux will take care of calling dispatch and creates appropriete objects for each action
// const mapDispatchToProps = dispatch => {
//     return {
//         onSquareMouseDown: id => {
//             dispatch(setShouldFlip(true));
//             dispatch(toggleCell(id));
//         },
//         onSquareMouseUp: () => {
//             dispatch(setShouldFlip(false));
//         },
//         onSquareMouseEnter: id => {
//             dispatch(enteredCell(id));
//         }
//     }
// };
const mapDispatchToProps = {
    setShouldFlip, toggleCell
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GridOfSquares);
