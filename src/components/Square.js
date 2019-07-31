import React from "react";

class Square extends React.Component {
    render() {
        return (
            <div className="SquareWrapper"
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
                onMouseEnter={this.props.onMouseEnter}
            >
                <div className={`Square${this.props.visible ? ' shown' : ' hidden'}`}></div>
            </div>
        );
    }
}

export default Square;