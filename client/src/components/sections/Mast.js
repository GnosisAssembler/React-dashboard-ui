import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class Mast extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          counterInRow: 0,
          checked: false, 
          checkedForDate: false,
          counterDate: ""
        }   
    }

    // handle mast
    handleAddMast = (e) => {
        e.preventDefault();

        let date = new Date().toDateString();
        
        if(this.state.checked && this.state.checkedForDate) {
            this.setState(() => {
                return {
                     counter: this.state.counter + 1,
                     checkedForDate: false,
                     counterDate: date
                }
            });
            console.log(this.state.checkedForDate);
        }
    };

    handleAddMastChange = (e) => {
        const mast = e.target.checked;
        if (mast) {
            this.setState(() => {
                return {
                    checked: true,
                    checkedForDate: true
                }
            });
        }
    };

    render() {
        return (
            <div style={{color:'black'}}>
                <div>
                    <p>Counter: {this.state.counter}</p>
                </div>
                <h4>!Mast? Check the box: </h4>
                <form onSubmit={this.handleAddMast}>
                    <input
                        onChange={this.handleAddMastChange}
                        type="checkbox" 
                        name="mast"/>
                    <button>Add mast</button>
                </form>
            </div>
        )
    }
}
