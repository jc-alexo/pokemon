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


function Pokebox(props)
    {
        if(props.pokedata != '')
        {
            return <p>{props.pokedata}</p>;
        }
        return <p></p>;
    }

function debounce(func, wait, immediate)
{

    var timeout;

    return function()
    {
        var context = this, args = arguments;
        var later = function()
        {
            timeout = null;

            if(!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }

}

class Wrapper extends Component {
    
        constructor(props)
        {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {poketext: ''};
        }

        pokecheck(query)
        {
            
            reqwest({
            url: `https://pokeapi.co/api/v2/pokemon/${query}/`
            }).then((response)=>{
                this.setState({
                    poketext: {id: response.id, img: response.img}
                });
            });

        }

        handleChange(e)
        {
            this.setState({poketext: e.target.value});

            this.pokecheck(e.target.value);

        }

        render()
        {
            const poketext = this.state.poketext;
            return (
                <fieldset>
                    <legend>POKEDEX!</legend>
                <input                     
                    onChange={this.handleChange}
                />
                <Pokebox
                    pokedata={poketext}                    
                />
                
                </fieldset>
            );
        }
    }

export default Wrapper;