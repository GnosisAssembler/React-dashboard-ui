import React, { Component } from 'react';

// Create Context (store)
export const AppContext = React.createContext();

// Create AppProvider
export default class AppProvider extends Component {
        state = {
            counter: 1
        };
    
    // Set value as the state of the context
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
