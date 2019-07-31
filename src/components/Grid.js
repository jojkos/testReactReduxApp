import React from "react";

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hidden: false
            });
        }, this.props.waitBeforeImgVisible)
    }

    render() {
        return (
            <div onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}
                className={`Grid${this.state.hidden ? ' imgHidden' : ''}`}
                style={
                    {
                        gridTemplateColumns: `repeat(${this.props.columns}, 1fr)`,
                        gridTemplateRows: `repeat(${this.props.rows}, 1fr)`,
                        backgroundImage: `url(${this.props.img})`,
                    }
                }>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;