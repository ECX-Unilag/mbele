import React, { Component } from 'react';
import EventImage from './images/eventimg2.png';
import './styles/event.css'

class AboutEvent extends Component {
    render() {
        return (
            <div className="eventcontainer">
                <div className="eventleft">
                    <h1>About Event</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam velit ullam ut? Architecto consequatur id ratione error accusantium quos commodi repellendus, obcaecati optio 
                        voluptas possimus nostrum harum esse praesentium.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam velit ullam ut? Architecto consequatur id ratione error accusantium quos commodi repellendus, obcaecati optio 
                        voluptas possimus nostrum harum esse praesentium.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam velit ullam ut? Architecto consequatur id ratione error accusantium quos commodi repellendus, obcaecati optio 
                        voluptas possimus nostrum harum esse praesentium.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam velit ullam ut? Architecto consequatur id ratione error accusantium quos commodi repellendus, obcaecati optio 
                        voluptas possimus nostrum harum esse praesentium.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam velit ullam ut? Architecto consequatur id ratione error accusantium quos commodi repellendus, obcaecati optio 
                        voluptas possimus nostrum harum esse praesentium.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam velit ullam ut? Architecto consequatur id ratione error accusantium quos commodi repellendus, obcaecati optio 
                        voluptas possimus nostrum harum esse praesentium.</p>
                </div>
                <div className="eventright"><img src={EventImage} /></div>
            </div>
        )
    }
}

export default AboutEvent
