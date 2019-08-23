import React, { Component } from 'react';
import axios from 'axios';
import Chart from '../graphs/Chart';
import styled from 'styled-components';

const CurrentWeight = styled.div`
    padding: 30px;
    text-align: center;
    background-color: white;
    margin: 50px;
    border-radius: 30px;
`

const HistoryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #697CE7;
    padding: 10px;
    margin: 20px 0;
`

const HistoryWeight = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 10px;
    font-size: 20px;
    text-align: center;
`

const InputWeight = styled.input`
    border-radius: 5px;
    padding: 5px;
`

const ButtonWeight = styled.button`
    padding: 5px;
    background-color: lightgrey;
    border-radius: 5px;
    box-shadow:none;

    &:hover{
        background-color: cyan;
    }
`

export default class Weight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kg:0,
            date:"",
            historyKg: [],
            historyDate: []
        }

        // React-vis data
        this.data = [
            
        ];
    }

    // populate the data on the graph
    //todo handle the dates and months
    populateData(populateKg, populateDate) {
        this.data.push({
            x:populateDate, 
            y:populateKg
        });
        console.log(this.data);
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

                // populate the graph with the server data
                //todo handle the date because it cant be displayed as a string
                this.populateData(serverWeights[i].kg,serverWeights[i].date);
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
                <CurrentWeight>
                    {this.state.kg} , {this.state.date}
                </CurrentWeight>
                {/*Form*/}
                <h4>Enter weight (kgs):</h4>
                <form onSubmit={this.handleAddWeight}>
                    <InputWeight 
                        type="text" 
                        name="kg"/>
                    <ButtonWeight>Add Weight</ButtonWeight>
                </form>
                {/*History weights*/}
                <HistoryContainer>
                    {this.state.historyKg.map(item => (
                        <HistoryWeight>
                            <p key={item}>Kg: {item}</p>
                        </HistoryWeight>
                    ))}
                </HistoryContainer>
                <Chart data={this.data}/>
            </div>
        )
    }
}
