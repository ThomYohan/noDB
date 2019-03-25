import React, { Component } from 'react'
import axios from 'axios'
import Concert from './Concert'
import Events from './Events'

class EventContainer extends Component {
    constructor() {
        super()

        this.state = {
            events: []
        }
    }
    
    updateEvent = event => {
        axios.put(`/api/events/${event.id}`, event)
        .then(res => {
            this.setState({events: res.data})
        }).catch(err => {
            console.log(err)
        })
    }

    createEvent = event => {
        axios.post('api/events', event)
        .then(res => {
            this.setState({events: res.data})
        }).catch(err => {
            console.log('lmaaooo trash:', err)
        })
    }

    deleteEvent = id => {
        axios.delete(`/api/events/${id}`)
        .then(res => {
            this.setState({events: res.data})
        }).catch(err => {
            console.log('dun goofd.', err)
        })
    }
    
    componentDidMount() {
        axios.get('/api/events')
        .then(res => {
            this.setState({events: res.data})
        }).catch(err => {
            console.log('weve got a problem houston:', err)
        })
    }

    render() {
        let concertList = this.state.events.map((event)=> {
            return <Concert event={event} key={event.id}
            updateConcert={this.updateEvent}
            deleteConcert={this.deleteEvent}/>
        })
        
        return (
            <div>
                <Events
                    concert={this.state.events}
                    handleClick={this.createEvent}
                    // updateEvent={this.updateEvent}
                    // deleteEvent={this.deleteEvent}
                    />
                <div>
                {concertList}
                </div>
            </div>
        )
    }
}

export default EventContainer