import React, { Component, Fragment } from 'react';
import './Table.css';
import tracks from '../tracks.js';


class Event extends Component {
    constructor(props){
        super(props)

        let initState = {};

         Object.keys(tracks).forEach(trackCategory => {
            tracks[trackCategory].forEach((track) => {
               initState[`${trackCategory}-${track[1]}`] = false;
            }); 
         }); 

         this.state = initState;

        this.handleTracks = this.handleTracks.bind(this)
        this.displayExtra = this.displayExtra.bind(this)
    }


    displayExtra = (e) => {
        let name = e.target.parentNode.getAttribute('name')
         if (!name) {
            name = e.target.parentNode.parentNode.getAttribute('name');
         }
        
         let tempState = Object.assign({}, this.state);
         tempState[name] = !tempState[name];
         this.setState(tempState);
   }

   handleTracks = (trackName) => {
      return tracks[trackName]
         .map((arr, i) => {
            return {
               id: i,
               time: arr[0],
               name: arr[1],
               loc: arr[2],
               by: arr[3],
               blurb: arr[4]
            }
         }).map(track => (
            <Fragment key = {`${trackName}-${track.id}-${track.name}`}>
               <tr
                  id={`row-${trackName}`}
                  onClick={this.displayExtra}
                  name={`${trackName}-${track.name}`}         
               >     
                  <td id={`time`}>
                     {track.time}
                  </td>
                  <td id={`name`}>
                     {track.name}
                  </td>
                  <td id={`location`}>
                     {track.loc}
                  </td>
                  <td>
                     <button className="trackToggle" onClick={this.displayExtra}>
                        Expand
                     </button>
                  </td>
               </tr>
               <tr 
                  name={`${trackName}-${track.name}`}
                  onClick={this.displayExtra}
                  style={{
                     display: (
                        this.state[`${trackName}-${track.name}`]
                           ? 'table-row'
                           : 'none'
                     ),
                     width: '100%'
                  }}
               >
                  <td colSpan='3'>
                     {
                        track.by !== ''
                           ? (
                              <span style={{contentAlign: 'left', float: 'left'}}>
                                 By: {track.by}
                              </span>
                           )
                           : ''
                     }
                     <p style={{contentAlign: 'left', float: 'left'}}>
                        {track.blurb}
                     </p>
                  </td>
               </tr>
            </Fragment>
         ));
    }
    render() {
        return (
        <div>
            <div className="content-container">
               <div className="page">
                  <h2 style = {{ margin: '16pt auto', padding: 0 }}> 
                      Event Guide
                  </h2>
               </div>
            </div>
            <div className="content-container">
            <div className="page">
                <h2>Room 1</h2>
                <table>
                    <thead>
                        <tr>
                           <th>Time</th>
                           <th>Name</th>
                           <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.handleTracks('main')}
                    </tbody>
                </table>
            </div>
            <div className="page">
                <h2>Room 2</h2>
                <table>
                    <thead>
                        <tr>
                           <th>Time</th>
                           <th>Name</th>
                           <th>Location</th>
                           <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.handleTracks('workshop')}
                    </tbody>
                </table>
            </div>

        </div>
        </div>
      );
    }
  }
  
  export default Event;
  
