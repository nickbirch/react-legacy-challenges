import React, { Component } from 'react'

export default class DogIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    onClick = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(json => this.setState({
                img: json.message
            }))
            .catch(err => alert(err))
    }

    
    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(json => this.setState({
                img: json.message
            }))
            .catch(err => alert(err))
    }
    
    render() {
        return (
            <div>
                <button onClick={this.onClick}>Get Another Dog Image</button>
                <img src={this.state.img} alt="doggo" height="400px"/>
            </div>
        )
    }
    
}

