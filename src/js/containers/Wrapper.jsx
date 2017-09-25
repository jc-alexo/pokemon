import React, { Component } from 'react';

import Title from '../components/Title';

class Wrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            altText: false,
            loading: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((nextState) => {
            return {
                altText: !nextState.altText
            } 
        });
    }

    render() {
        const { altText } = this.state;

        const titleText = altText ? "I am alternative text" : "Hello World";

        return (
            <div>
                <Title text={titleText} />
                <Title text="Dexatron" />
                <button onClick={this.handleClick}>Change State</button>
            </div>
        );
    }

}

export default Wrapper;