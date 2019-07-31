import React from "react";
import { connect } from 'react-redux';
import { setDimensions } from "../redux/actions";

class DimensionsInput extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="rows">
                    Rows
                    <input name="rows" id="rows"
                        type="number"
                        value={this.props.rows}
                        onChange={
                            e => {
                                this.props.onDimensionsChange(e.target.value, this.props.columns)
                            }
                        } />
                </label>

                <label htmlFor="columns">
                    Columns
                    <input name="columns" id="columns"
                        type="number"
                        value={this.props.columns}
                        onChange={
                            e => {
                                this.props.onDimensionsChange(this.props.rows, e.target.value)
                            }
                        } />
                </label>
            </form>
        );
    }
}


const mapStateToProps = state => {
    return {
        columns: state.dimensions.columns,
        rows: state.dimensions.rows,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDimensionsChange: (rows, columns) => {
            dispatch(setDimensions(rows, columns));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DimensionsInput);
