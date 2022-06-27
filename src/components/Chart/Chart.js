import React from 'react';
import ChartBar from './ChartBar';
import "./Chart.css";

const Chart = (props) =>{
    let totalMax = '';
    let propsToUse ='';
    if(props.selectedYear === 'All'){
        propsToUse = props.allDataPoints;
        const dataPointValues = props.allDataPoints.map(dataPoints => dataPoints.value);
        totalMax = Math.max(...dataPointValues);
    } else{
        propsToUse = props.filteredDataPoints;
        const dataPointValues = props.filteredDataPoints.map(dataPoints => dataPoints.value);
        totalMax = Math.max(...dataPointValues);
    }    

    return(
        <div className="chart">
            {propsToUse.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMax} 
                    label={dataPoint.label} 
                /> 
            ))}
        </div>
    )
}

export default Chart;