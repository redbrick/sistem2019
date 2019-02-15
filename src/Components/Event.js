import React, { Component, Fragment } from 'react';
import './Table.css';
import tracks from '../tracks.js';


class Event extends Component {
    constructor(props){
        super(props)
        this.state = {}
        const trackTypes = ['main', 'workshop']
        for(let i in trackTypes){
            tracks[trackTypes[i]].forEach((trackArray, n) =>{
                this.state[trackTypes[i]+n] = 'none'
            })
        }


        this.handleTracks = this.handleTracks.bind(this)
        this.displayExtra = this.displayExtra.bind(this)
    }


    displayExtra = (e) => {
        let name = e.target.getAttribute('name')
        let id = e.target.id
        console.log(name, id)
        if (this.state[name+id] == ''){
            this.setState({
                [name+id]: 'none'
            })
        }
        else{
            this.setState({
                [name+id]: ''
            })
        }
        }

    handleTracks = (trackName) => {
        let rows = []
        tracks[trackName].forEach((trackArray, i) => {
            rows.push(
                <Fragment>
                <tr name={trackName} id={i} onClick={this.displayExtra}>
                <td name={trackName} id={i}>
                    {trackArray[0]}
                </td>
                <td name={trackName} id={i}>
                    {trackArray[1]}
                </td>
                <td name={trackName} id={i}>
                    {trackArray[2]}
                </td>
                </tr>
                <tr style={{display: this.state[trackName+i], width: '100%'}}>
                <td colspan='3'>
                    {trackArray[3] != '' ? <span style={{contentAlign: 'left', float: 'left'}}>By: {trackArray[3]}</span> : ''}
                    <br />
                    <p style={{contentAlign: 'left', float: 'left'}}>
                        {trackArray[4]}
                    </p>
                </td>
                </tr>

                </Fragment>
            )
        })
        return rows
    }
    render() {
        return (
        <div>
            <h2 classname='fade-in' style={{paddingTop: '1em', paddingLeft: '2em', color: '#86c323'}}>
                Event Guide
            </h2>
            <div className="content-container">
            <div className="page">
                <h2>Room 1</h2>
                <table>
                    <thead>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Location</th>
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
                        <th>Time</th>
                        <th>Name</th>
                        <th>Location</th>
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
  
