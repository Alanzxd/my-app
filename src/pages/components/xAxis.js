import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function XAxis(props) {
    const {xScale, height, width, axisLabel } = props;
    const xAxisRef = useRef();
    const [isLinear, setIsLinear] = useState(true);

    useEffect(() => {

        setIsLinear(typeof xScale.domain()[0] === 'number');

        const axis = d3.axisBottom(xScale);

        const xAxis = d3.select(xAxisRef.current).call(axis);

        if (!isLinear) {
            xAxis.selectAll(".tick text")
                .style("text-anchor", "start")
                .attr("dx", "1em")
                .attr("dy", "0.15em")
                .attr("transform", "rotate(80)");
        }

    }, [xScale, isLinear]);

    return (
        <g 
            transform={`translate(0, ${height})`} 
            ref={xAxisRef} 
            className="x-axis">
            {axisLabel && (
                <text 
                    x={width / 2} 
                    y={isLinear? 30 : 50} 
                    textAnchor="end">
                    {axisLabel}
                </text>
            )}
        </g>
    );
}

export default XAxis;