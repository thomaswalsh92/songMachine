import ReactDom from 'react-dom';
import { useRef } from 'react';
import Login from '../Login';
import spotMachine from '../images/spotMachine-32px.png'

const Landing = (props) => {
    const landingBg = useRef();
    const landing = useRef();
    
    if (landingBg.current) {
        if (props.token) {
            landingBg.current.style.display = 'none'
            landing.current.style.display = 'none'
        } else {
            landingBg.current.style.display = 'fixed'
            landing.current.style.display = 'flex'
        }
    }
    
    return ReactDom.createPortal( 
        <> 
            <div className="landingBg" ref={landingBg}>
                    <div className="header">
                        <h1>spotMachine</h1>
                        <img src={spotMachine} />
                    </div>
                    <div className="landing" ref={landing}>     
                        <div className="landingInfo">
                            <p>Spot Machine is a tool to help you find new music. Simply select one or more genres or seed tracks, hit suggest and SpotMachine will find related music!</p>                              
                            <p>Login to Spotify to use the app.</p> 
                        </div>
                        {props.token === '' ? <Login/> : null }
                        <div className="landingDataDisclaimer">
                            <p>Note: spotMachine requires access to your Spotify account to access the Spotify API and Web playback SDK. spotMachine does not access or use any of your listener data.</p>
                        </div>
                    </div>
            </div>
        </>,
        document.getElementById('landing')
    ) 

};

export default Landing;