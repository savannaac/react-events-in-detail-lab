import React, { Component } from "react";

export default class CoordinatesButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this);
    // }

    handleCoordinatesButton = (event) => {
        const x = event.clientX;
        const y = event.clientY;

        this.props.onReceiveCoordinates([x, y])
    }

    render() {
        return (
            <button
                //onClick={() => this.handleCoordinatesButton()}
                onClick={this.handleCoordinatesButton}>
            </button>
        )
    }
}
