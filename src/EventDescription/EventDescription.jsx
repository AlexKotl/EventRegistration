import React from 'react';

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
                <p/>Don't waste your time! Try all these cool features right now with this cool button:

                <p/>
                <button onClick={this.props.showDialog} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    Sign Up for Event!
                </button>
            </div>
        )
    }
}