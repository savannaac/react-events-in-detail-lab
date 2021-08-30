import React, { Component } from "react";

export default class DelayedButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onDelayedClick = this.onDelayedClick.bind(this);
    // }

    handleDelayedButton = (event) => {
        event.persist(); //necessary to pass the event to the callback prop
        setTimeout(() => {
            this.props.onDelayedClick(event),
            this.props.delay
        });
    }

    render() {
        return (
            <button
                onClick={this.handleDelayedButton}>
            </button>
        )
    }
}
