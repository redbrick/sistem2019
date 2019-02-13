import React, { Component } from 'react';

class About extends Component {
    
    render() {
        return (
        <div>
            <h2 classname='fade-in' style={{paddingTop: '1em', paddingLeft: '2em', color: '#f2ae1d'}}>
                About SISTEM
            </h2>
            <div className="content-container">
            <div className="page">
                <h2>What Does SISTEM Mean?</h2>
                <p>
                SISTEM is and acronym for the Students Inter Society Tech &amp;q Enterprise Meetup. It’s pretty self explanatory, we provide a link between Students and those in the world of Tech and Enterprise in a casual meetup environment.
                    </p>
            </div>
           <div className="page">
            <h2>What's the idea behind SISTEM?</h2>
                <p>
                SISTEM was born from the minds of students who love networking, conference-styled meetups and all things tech. The societies behind SISTEM are Redbrick, DIT Compsoc, DUCSS, and DU Netsoc. They recognised that there is no event in Ireland targets topic in a way that doesn’t go above most students’ heads.
                </p>
                <p>
                A lot of the material at conferences across the country is usually geared towards the graduates rather than the undergraduates. SISTEM is run by a team of undergraduates, so we know what this can feel like. It can be alienating and rather off putting.
                </p>
            </div>
           <div className="page">
            <h2>When and Where?</h2>
            <p>
                SISTEM 2019 Will take place in The Venue, DCU, Dublin in 2019. 
            </p>
            </div>
           </div>
        </div>
      );
    }
  }
  
  export default About;
  