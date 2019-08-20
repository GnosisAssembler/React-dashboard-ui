import React, { Component } from 'react';
import axios from 'axios';

export default class Weight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kg:0,
            date:"",
            historyKg: [],
            historyDate: []
        }
    }

    // handle the insertion of new weight
    handleAddWeight = (e) => {
        e.preventDefault();

        // Current kg and date
        const kg = e.target.elements.kg.value.trim();
        const date = new Date().toLocaleString();

        this.setState(() => {

            const tempHistoryKg = this.state.historyKg.push(kg);
            const tempHistoryDate = this.state.historyDate.push(date);

            return {
                kg: kg,
                date:  date,
                tempHistoryKg,
                tempHistoryDate
            }
        });

    };

    render() {
        return (
            <div style={{color:'black'}}>
                {/*Current weight*/}
                <div style={{height:'50px', backgroundColor:'grey', textAlign:'center'}}>
                    {this.state.kg} , {this.state.date}
                </div>
                {/*Form*/}
                <h4>Enter weight (kgs):</h4>
                <form onSubmit={this.handleAddWeight}>
                    <input 
                        type="text" 
                        name="kg"/>
                    <button>Add Weight</button>
                </form>
                {/*History weights*/}
                <div style={{height:'150px', backgroundColor:'cyan'}}>
                    <ul>
                        {this.state.historyKg.map(item => (
                            <div>
                                <li key={item}>Kg: {item}</li>
                                <hr></hr>
                            </div>
                           
                        ))}
                    </ul>
                    <ul>
                        {this.state.historyDate.map(item2 => (
                            <div>
                                <li key={item2}>Date: {item2}</li>
                                <hr></hr>
                            </div>
                            
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
