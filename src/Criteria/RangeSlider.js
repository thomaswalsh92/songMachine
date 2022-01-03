import { useState, useRef } from 'react';

const RangeSlider = (props) => {


    const input = useRef();
    const unit = useRef();
    

    const handleChange = () => {
    var value = (input.current.value-input.current.min)/(input.current.max-input.current.min)*100
    console.log (value)
    input.current.style.background = `linear-gradient(to right, #74BAF5 0%, #74BAF5 ${value}%, #ececec ${value}%, #ececec 100%)`
    unit.current.style.paddingLeft = `${value - 2}%`;
    props.updateCriteria(parseInt(input.current.value), props.parameter)
    };

    return (
    <div className="rangeSlider">
        <div className="rangeSliderHeader">
            <h3>{props.parameter.toUpperCase()}</h3>
        </div>
        <div className="sliderContainer">
            <div className="unitContainer">
                <span ref={unit} className="unit">{`${props.criteria} ${props.unit}`}</span>
            </div>
            <input ref={input} onInput={handleChange} type="range" min={props.min} max={props.max} />
        </div>
    </div>
    )
};


export default RangeSlider;