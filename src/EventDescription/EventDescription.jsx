import React from 'react';
import MembersList from './../MembersList/MembersList.jsx';

require( './EventDescription.scss');

/**
 * Text page with description and sign up button
 */

export default class EventDescription extends React.Component {
    render() {
        return(
            <div className="eventDescription">

                <p/><b>GoIT</b> is launching new super event. And most important thing in that event is <b>online registration</b>. Good news! You are one who can test it right now.
                <p/>Never before signing up to event was such simple, fast and user friendly!
                <p/>SPI (Single Page Application) based on React make life easier - no page reload, no extra traffic, no delays. Just click and get result. That's just an awesomeness!
                <p/>With connection of <b>Google Spreadsheets API</b> this app brings more clarity and simplicity of support.

                <div className="logos">
                    <div className="icon react" id="reactIcon"></div>
                    <div className="mdl-tooltip mdl-tooltip--large" htmlFor="reactIcon">
                        <strong>React</strong><br/>
                        Yes, famous Facebook library under the hood!
                    </div>

                    <div className="icon sheets" id="sheetsIcon"></div>
                    <div className="mdl-tooltip mdl-tooltip--large" htmlFor="sheetsIcon">
                        <strong>Google Spreadsheets API</strong><br/>
                        Google technologies connected
                    </div>

                    <div className="icon flux" id="fluxIcon"></div>
                    <div className="mdl-tooltip mdl-tooltip--large" htmlFor="fluxIcon">
                        <strong>FLUX</strong><br/>
                        Modern data flow
                    </div>

                    <div className="icon sass" id="sassIcon"></div>
                    <div className="mdl-tooltip mdl-tooltip--large" htmlFor="sassIcon">
                        <strong>SASS</strong><br/>
                        CSS prepocessor
                    </div>

                    <div className="icon responsive" id="responsiveIcon"></div>
                    <div className="mdl-tooltip mdl-tooltip--large" htmlFor="responsiveIcon">
                        <strong>Responsive</strong><br/>
                        Yes, you can use this app on any device!
                    </div>
                </div>


                <p/>Don't waste your time! Try all these cool features right now with this cool button:

                <p/>

                <MembersList />

                <p/>
                <button onClick={this.props.showDialog} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent add-button">
                    Sign Up for Event!
                </button>

                <p/><br/>
                <center>
                    <small>
                        Source code: <a href="https://github.com/Slicer256/EventRegistration" target="_blank">https://github.com/Slicer256/EventRegistration</a>
                    </small>
                </center>
            </div>
        )
    }
}