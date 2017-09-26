import React, { Component } from 'react';
import Title from '../components/Title';
import reqwest from 'reqwest';


// class Wrapper extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             pokemon: "ice",
//             pokedata: ""
//         };

//         this.handleClick = this.handleClick.bind(this);
//         this.handleType = this.handleType.bind(this);
//     }

//     handleClick() {

//         reqwest({
//             url: 'https://pokeapi.co/api/v2/pokemon/charizard/'            
//         }).then((response)=>{
//             this.setState({
//                 pokemon: response.name
//             });
//         });

//         // this.setState((prevState) => {
//         //     return {
//         //         pokemon: !prevState.pokemon
//         //     } 
//         // });
//     }

//     handleType()
//     {
//         this.setState({ 
//             pokedata: pokebox.value
//         });
//     }

//     render() {
//         const { pokemon } = this.state;
//         const { pokedata } = this.state;

//         // const titleText = altText ? "I am alternative text" : "Hello World";

//         return (
//             <div>
//                 <Title text={pokemon} />
//                 <Title placeholder="Dexterous" value={pokedata} />
//                 <button onClick={this.handleClick}>Switch Ice/Fire</button>
//                 <br/>
//                 <br/>
//                 <input onChange={this.handleType} type="textbox" name="pokebox" placeholder="put text here"></input>
//             </div>
//         );
//     }

// }


// function Pokedex(props)
//     {
//         if(props.poketext != '')
//         {
//             return <p>The water will boil.</p>;
//         }
//         return <p>The water will not boil</p>;
//     }

class Wrapper extends Component {

    
        constructor(props)
        {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {temperature: ''};
        }

        handleChange(e)
        {
            this.setState({temperature: e.target.value});
        }

        render()
        {
            const temperature = this.state.temperature;
            return (
                <fieldset>
                    <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature} 
                    onChange={this.handleChange}
                />
                <Wrapper
                    celsius={parseFloat(temperature)}
                />
                </fieldset>
            );
        }
    }

export default Wrapper;