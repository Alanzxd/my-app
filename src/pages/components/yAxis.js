import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function YAxis(props){
    const { yScale, height, axisLabel } = props;
    const yAxisRef = useRef();

    useEffect(() => {
    if(yScale){
    
        const yAxis = d3.axisLeft(yScale);
        d3.select(yAxisRef.current).call(yAxis);
        }
    }, [yScale]);


    return (
        <g ref={yAxisRef} className="y-axis">
            {axisLabel && (
                <text
                    style={{ textAnchor: 'end', fontSize: '15px' }}
                    transform={`translate(-20, ${height / 2}) rotate(-90)`}
                >
                    {axisLabel}
                </text>
            )}
        </g>
    );
}
export default YAxis