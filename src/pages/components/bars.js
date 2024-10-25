import React, { useState } from 'react';

function Bars(props) {
    const {data, xScale, yScale, height, selectedStation, setSelectedStation} = props;
    
    const getColor = (station) => station === selectedStation ? 'red' : 'steelblue'

    const handleMouseEnter = (station) => {
        if (typeof setSelectedStation == 'function'){
            setSelectedStation(station);
        }  
    };

    const handleMouseOut = () => {
        if (typeof setSelectedStation == 'function'){
            setSelectedStation(null);
        }  
    };


    if(data){
        return <g>
            {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)} 
                        y={yScale(d.start)} 
                        width={xScale.bandwidth()} 
                        height={height - yScale(d.start)} 
                        fill = {getColor(d.station)}
                        stroke = "black"
                        onMouseEnter={() => handleMouseEnter(d.station)}
                        onMouseOut={handleMouseOut}
                    />
                ))}
            </g>
    } else {
        return <g></g>
    }
}

export default Bars