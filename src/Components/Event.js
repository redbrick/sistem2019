import React, { Component, Fragment } from 'react';
import './Table.css';
import tracks from '../tracks.js';


class Event extends Component {
    

    render() {

        const handleTracks = (trackName) => {
            let rows = []
            tracks[trackName].forEach((track) => {
                rows.push(
                    <tr>
                    <td>
                        {track[0]}
                    </td>
                    <td>
                        {track[1]}
                    </td>
                    <td>
                        {track[2]}
                    </td>
                    </tr>
                )
            })
            return rows
        }
        return (
        <div>
            <h2 classname='fade-in' style={{paddingTop: '1em', paddingLeft: '2em', color: '#f2ae1d'}}>
                Event Guide
            </h2>
            <div className="content-container">
            <div className="page">
                <h2>Main Track</h2>
                <table>
                    <thead>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Location</th>
                    </thead>
                    <tbody>
                        {handleTracks('main')}
                    </tbody>
                </table>
            </div>
            <div className="page">
                <h2>Workshops</h2>
                <table>
                    <thead>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Location</th>
                    </thead>
                    <tbody>
                        {handleTracks('workshop')}
                    </tbody>
                </table>
            </div>

        </div>
        </div>
      );
    }
  }
  
  export default Event;
  