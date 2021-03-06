import React, { Component } from 'react'
import EventContainer from './EventContainer'

class Concert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.event.id,
            location: props.event.location,
            date: props.event.date,
            name: props.event.name,
            imageUrl: props.event.imageUrl,
            edit: false
        }
        
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
            
        })
    }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    handleUpdateClick = () => {
        this.props.updateConcert(this.state)
        this.setState({
            edit: false
        })
    }

    handleDeleteClick = () => {
        this.props.deleteConcert(this.state.id)
        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <div>
            {this.state.edit ? (
            <div>
                <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                <button onClick={this.handleUpdateClick}>Update Concert</button>
                <button onClick={this.handleDeleteClick}>Delete Concert</button>
            </div>
        ) : (
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', 
                        alignItems: 'center', alignContent: 'flex-start'}}>
                <img src={this.props.event.imageUrl} alt="" height="150"width="150"/>
                <h1 style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', 
                        alignItems: 'center', fontSize: 'small', border: '3px solid black', width: '150px', height: '145px'}}>
                    <p>{this.props.event.location}</p>
                    <p>{this.props.event.date}</p>
                    <p>{this.props.event.name}</p>
                    <button onClick={this.handleEditClick}>Edit</button>
                </h1>
            </div>
        )}
        </div>
        )}
}

export default Concert