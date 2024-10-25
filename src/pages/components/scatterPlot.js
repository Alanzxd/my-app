import React from 'react'
import XAxis from './xAxis' 
import YAxis from './yAxis'
import Points from './points' 
function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipData, setTooltipX, setTooltipY } = props;

    const plotHeight = height - offsetY;
    const plotWidth = width - offsetX;
    
    return (<g transform={`translate(${offsetX}, ${offsetY})`}>
    <Points data={data} xScale={xScale} yScale={yScale} radius={5} color='steelblue' selectedStation = {selectedStation} setSelectedStation = {setSelectedStation} setTooltipData={setTooltipData} setTooltipX={setTooltipX} setTooltipY={setTooltipY}/>
    <YAxis xScale = {xScale} yScale={yScale} axisLabel="Trip duration end in" />
    <XAxis xScale={xScale} height = {plotHeight + 20} width={plotWidth} axisLabel="Trip duration start from" />
</g>
);
}

export default ScatterPlot

// height={height} width={width}