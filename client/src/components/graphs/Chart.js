import React from 'react';
import { HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis,
    LineMarkSeries} from 'react-vis';

export default function Chart({data}) {
    return (
        <XYPlot width={400} height={300}><XAxis/><YAxis/>
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineMarkSeries data={data} />
        </XYPlot>
    );
}
  
 