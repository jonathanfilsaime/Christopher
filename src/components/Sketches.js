import React, { Component } from 'react';
import UnderConstruction from '../images/UnderConstruction.png'
import '../App.css';

export default class Sketches extends Component {
    state = {}

    render() {
        return (
            <div className="App">
                <img src={UnderConstruction} />
            </div>
        )
    }
}