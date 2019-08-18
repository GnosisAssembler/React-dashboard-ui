import React, { Component } from 'react';

export default class Weight extends Component {
    render() {
        return (
            <div style={{fontSize:'100px', color:'green'}}>
                {this.state.counter}
            </div>
        )
    }
}
