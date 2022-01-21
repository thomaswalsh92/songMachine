import ReactDom from 'react-dom';
import { useRef } from 'react';

const Exception = (props) => {
    
    const exceptionBg = useRef();
    const exception = useRef();

    if (exceptionBg.current) {
        if (props.exceptionOccured) {
            exceptionBg.current.style.display = 'flex'
            exception.current.style.display = 'flex'
        } else {
            exceptionBg.current.style.display = 'none'
            exception.current.style.display = 'none'
        };
    };

    const handleClick = () => {
        props.clearException();
    };
    
    return ReactDom.createPortal( 
        <> 
            <div className="exceptionBg" ref={exceptionBg}>
                    <div className="exception" ref={exception}>
                        <div className="exceptionInfo">
                            <p>{props.exceptionContent}</p>
                        </div>
                        <button onClick={handleClick}>Ok</button>
                    </div>
            </div>
        </>,
        document.getElementById('error')
    ) 

};

export default Exception;