import React, { Component } from 'react'

class Events extends Component {
    constructor() {
        super()

        this.state = {
            location: '',
            date: '',
            name: '',
            imageUrl: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let event = this.state

        this.props.handleCreateConcert(event)
    }
    

    render() {
        return (
            <div>
                <div>
                    <input type="text" name="location" placeholder="location" onChange={this.handleChange}/>
                    <input type="text" name="date" placeholder="date" onChange={this.handleChange}/>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                    <input type="text" name="imageUrl" placeholder="imageUrl" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Add Concert</button>
                </div>
                {/* {this.props.concert.map(concert => {
                    return <Concert
                                key={concert.id} concert={concert}
                                updateConcert={this.props.updateConcert}
                                deleteConcert={this.props.deleteConcert} />
                })} */}
            </div>
        )
    }
}

export default Events