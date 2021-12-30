const RangeSlider = (props) => {

    return (
        <div className="rangeSlider">
            <input type="range" min={props.min} max={props.max}></input>
        </div>
    )
};

export default RangeSlider;