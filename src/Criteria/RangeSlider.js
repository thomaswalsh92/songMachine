import { useState, useRef } from 'react';

const RangeSlider = (props) => {


    const input = useRef();
    const unit = useRef();
    const toggle = useRef();
    
    console.log (toggle.current)

    const handleChange = () => {
    var value = (input.current.value-input.current.min)/(input.current.max-input.current.min)*100
    input.current.style.background = `linear-gradient(to right, #74BAF5 0%, #74BAF5 ${value}%, #ececec ${value}%, #ececec 100%)`
    //unit.current.style.paddingLeft = `${value}%`;
    props.updateCriteria(parseInt(input.current.value), props.parameter)
    };

    return (
    <div className="rangeSlider">
        <div className="rangeSliderHeader">
            <input ref={toggle} type="checkbox"></input>
            <h3>{props.parameter.toUpperCase()}</h3>
        </div>       
        <div className="sliderContainer">
            <span ref={unit} className="unit">{`${props.criteria} ${props.unit}`}</span>
            <input ref={input} onInput={handleChange} type="range" min={props.min} max={props.max} defaultValue={props.start}/>
        </div>
        <div className="spacer">
            
        </div>
    </div>
    )
};

export default RangeSlider;