import React, { Component } from 'react';
import Title from '../components/Title';
import reqwest from 'reqwest'


class Wrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: "ice"            
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        reqwest({
            url: 'https://pokeapi.co/api/v2/pokemon/charizard',
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": true,
                "Origin": "http://localhost:3000"
            }
        }).then((response)=>{
            this.setState({
                pokemon: response.name
            });
        });

        // this.setState((prevState) => {
        //     return {
        //         pokemon: !prevState.pokemon
        //     } 
        // });
    }

    render() {
        const { pokemon } = this.state;

        // const titleText = altText ? "I am alternative text" : "Hello World";

        return (
            <div>
                <Title text={pokemon} />
                <Title text="Dexterous" />
                <button onClick={this.handleClick}>Switch Ice/Fire</button>
            </div>
        );
    }

}

export default Wrapper;