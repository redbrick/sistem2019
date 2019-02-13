import React, { Component } from 'react';
import './Table.css';


class Livestream extends Component {
    

    render() {

        const liveStream = () => {
            /* Enter livestream link below! */
            let livestreamEmbedCode = [];
            livestreamEmbedCode.push(
                /* Replace me with an iframe! */
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            )
            if(livestreamEmbedCode.length === 0){
                livestreamEmbedCode.push(
                    <p>The livestream will be available to watch here on the day of the event. Please come back then to watch.</p>
                )
            }
            console.log(livestreamEmbedCode)
            return livestreamEmbedCode
        }
        return (
        <div>
            <h2 classname='fade-in' style={{paddingTop: '1em', paddingLeft: '2em', color: '#f2ae1d'}}>
                Live Stream
            </h2>
            <div className="content-container">
            <div className="page">
                <h2>Watch Now</h2>
                {liveStream()}
            </div>
        </div>
        </div>
      );
    }
  }
  
  export default Livestream;
  