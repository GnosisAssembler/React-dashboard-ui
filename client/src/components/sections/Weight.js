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

    // Fetch all the weight entries from the database
    // and put them inside the state
    componentDidMount() {
        fetch('http://localhost:5000/api/weights')
          .then(res => {
              console.log(res);
              return res.json()
        })
            // Response from the server with the server weight entries
          .then(serverWeights => { 
            console.log(serverWeights.length); 
              
            // create a temporary list of kgs and dates in order to 
            // push them inside state later
            let listHistoryKg=[];
            let listHistoryDate=[];
            // extract kgs and dates from the database
            for(var i=0; i<serverWeights.length; i++) {
                listHistoryKg.push(serverWeights[i].kg);
                listHistoryDate.push(serverWeights[i].date);
            }
            //update the state with the temporary lists
            this.setState(() => {
                return {
                    historyKg: listHistoryKg,
                    historyDate: listHistoryDate
                }
            });
              
        })
        .catch(() => console.log("Cant access server due to broswer!"));

        // Fetch latest weight
        fetch('http://localhost:5000/api/weights/last')
          .then(res => {
              console.log(res);
              return res.json()
        })
            // Response from the server with the latest weight
          .then(latestWeight => { 
            
            if(latestWeight[0].kg==='undefined') {
                console.log('no weight to show')
            } else {
                //update the state with the current weight
                this.setState(() => {
                    return {
                        kg: latestWeight[0].kg,
                        date: latestWeight[0].date
                    }
                });
            }
            
              
        })
        .catch(() => console.log("Cant access server due to broswer!"));

    }

    // handle the insertion of new weight
    handleAddWeight = (e) => {
        e.preventDefault();

        // Current kg and date that the user has entered
        const kg = e.target.elements.kg.value.trim();
        const date = new Date().toDateString();

        // Post weight entry to database
        axios.post('http://localhost:5000/api/weights', {
            kg: kg,
            date: date
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.setState(() => {

            // User inputs
            const tempHistoryKg = this.state.historyKg.push(kg);
            const tempHistoryDate = this.state.historyDate.push(date);

            // update the state with the latest user's input
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
