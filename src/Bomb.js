// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        };
    }

    timingBomb = () => {
        if (this.props.secondsLeft > 0) {
            return `${this.props.secondsLeft} seconds left before I go boom!`
        } else {
            return 'Boom!'
        }
    }


    render () {
        return(
            <div>
                {this.timingBomb()}
            </div>
        )
    }
}
