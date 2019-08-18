import React from 'react';

// import context
import {AppContext} from '../../../AppProvider';

// Wrap component with AppConsumer so that we can use the context
export default function MainHeaderHeading() {
    return (
        <div style={{fontSize:'100px', color:'green'}}>
            <AppContext.Consumer>
                {(context) => context.counter}
            </AppContext.Consumer>
        </div>
        
    )
}
