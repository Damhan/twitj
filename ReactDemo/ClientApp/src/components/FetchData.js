import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <h1 id="tabelLabel" >Dashboard</h1>
                <p>This component features your twitter feeds.</p>
            </div>
        );
    }
}