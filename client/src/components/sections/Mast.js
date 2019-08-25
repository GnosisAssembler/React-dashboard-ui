import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//? Nivo calendar
import { ResponsiveCalendar } from '@nivo/calendar'

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

        //todo populate date
        //todo fix the string format of date
        this.data = [
            {
                "day": "2019-08-23",
                "value": 62
            },
            {
                "day": "2019-08-24",
                "value": 62
            },
            {
                "day": "2019-08-25",
                "value": 62
            }
          ];
    }

    // handle mast
    handleAddMast = (e) => {
        e.preventDefault();

        let date = new Date().toDateString();

        // Post mast entry to database
        axios.post('http://localhost:5000/api/masts', {
            counter: 1, //default
            date: date
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

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

                <div style={{height:'200px'}}>

                <ResponsiveCalendar
                    data={this.data}
                    from="2019-08-23"
                    to="2019-09-07"
                    emptyColor="#eeeeee"
                    colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor="#ffffff"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
                />

                </div>
            </div>
        )
    }
}
