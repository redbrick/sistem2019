import React, { Component } from 'react';

class About extends Component {
    
    render() {
        return (
        <div>
            <h2 classname='fade-in' style={{paddingTop: '1em', paddingLeft: '2em', color: '#86c323'}}>
                About SISTEM
            </h2>
            <div className="content-container">
            <div className="page" style={{textAlign: 'left'}}>
                <h2>What is SISTEM?</h2>
                <p>
                    SISTEM is a meetup style conference run by students, for students. SISTEM helps provide a link between students and those in the world of tech and enterprise in a casual meetup environment.
                </p>
                <br/>
                <p>
                    Building on the foundations of the inaugural event in 2018, SISTEM 2019 promises to cater for multiple skills levels on the day, with speakers from an array of different companies, as well as workshops, a live tech panel, and lightning talks! On top of all this, one of our lucky attendees will walk away with a brand new Xbox One courtesy of Microsoft!
                </p>
                <br/>
                <p>
                    In short, Redbrick DCU, DUCSS, UCD Netsoc, DIT Compsoc, DU Netsoc, MUCSS and UCD Netsoc have come together to organise the student tech event of the year!
                </p>
                <br/>
                <p>
                    Tickets are €10 each, and all proceeds will go to charity. Tickets can be purchased <a href='https://tickets.redbrick.dcu.ie/'>here.</a>
                </p>
            </div>
           </div>
        </div>
      );
    }
  }
  
  export default About;
  
